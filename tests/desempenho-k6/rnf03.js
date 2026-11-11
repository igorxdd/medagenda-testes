import http from 'k6/http';
import { check } from 'k6';

const base = (__ENV.API_BASE_URL || 'http://localhost:3000/api').replace(/\/$/, '');
export const options = {
  vus: 50,
  duration: '1m',
  thresholds: {
    'http_req_duration{endpoint:horarios}': ['p(95)<800'],
    'http_req_duration{endpoint:agenda}': ['p(95)<800'],
    'http_req_failed{endpoint:horarios}': ['rate<0.01'],
    'http_req_failed{endpoint:agenda}': ['rate<0.01'],
    checks: ['rate==1']
  }
};

export function setup() {
  const response = http.post(`${base}/auth/login`, JSON.stringify({
    email: __ENV.TEST_RECEPTION_EMAIL || 'joana.lima@medagenda.dev',
    senha: __ENV.TEST_RECEPTION_PASSWORD || 'Secretaria@2026'
  }), { headers: { 'Content-Type': 'application/json' } });
  if (response.status !== 200) throw new Error('Falha no login de preparacao do k6');
  const headers = { Authorization: `Bearer ${response.json('token')}` };
  const doctorsResponse = http.get(`${base}/medicos`, { headers });
  if (doctorsResponse.status !== 200) throw new Error('Falha ao buscar medicos');
  const doctor = doctorsResponse.json().find(item => item.agenda.length > 0);
  if (!doctor) throw new Error('Nenhum medico com agenda');
  // A data ISO em UTC-3 evita depender do fuso do runner.
  const today = new Date(Date.now() - 3 * 3600000).toISOString().slice(0, 10);
  let day = new Date(`${today}T12:00:00-03:00`);
  do { day = new Date(day.getTime() + 86400000); } while (!doctor.agenda.some(block => block.diaSemana === day.getUTCDay()));
  return { headers, doctorId: doctor._id, today, future: day.toISOString().slice(0, 10) };
}

export default function (data) {
  const slots = http.get(`${base}/medicos/${data.doctorId}/horarios?data=${data.future}`, { headers: data.headers, tags: { endpoint: 'horarios' } });
  check(slots, { 'horarios HTTP 200': response => response.status === 200 });
  const agenda = http.get(`${base}/consultas?data=${data.today}`, { headers: data.headers, tags: { endpoint: 'agenda' } });
  check(agenda, { 'agenda HTTP 200': response => response.status === 200 });
}

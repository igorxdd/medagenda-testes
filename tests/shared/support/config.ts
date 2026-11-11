export const config = {
  webBaseUrl: (process.env.WEB_BASE_URL || 'http://localhost:8080').replace(/\/$/, ''),
  apiBaseUrl: (process.env.API_BASE_URL || 'http://localhost:3000/api').replace(/\/$/, ''),
  // Contas ficticias do seed oficial; nunca usar credenciais de producao.
  patientEmail: process.env.TEST_PATIENT_EMAIL || 'ana.souza@email.dev',
  patientPassword: process.env.TEST_PATIENT_PASSWORD || 'Paciente@2026'
};

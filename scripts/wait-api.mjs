const base = (process.env.API_BASE_URL || 'http://localhost:3000/api').replace(/\/$/, '');
const deadline = Date.now() + 120_000;
let ready = false;
while (Date.now() < deadline) {
  try {
    const response = await fetch(`${base}/saude`, { signal: AbortSignal.timeout(3000) });
    const data = await response.json();
    if (response.ok && data.status === 'ok' && data.servico === 'medagenda-api') {
      ready = true;
      break;
    }
  } catch { /* O banco e a API podem estar iniciando. */ }
  await new Promise(resolve => setTimeout(resolve, 2000));
}
if (!ready) throw new Error(`API indisponivel depois de 120 segundos: ${base}`);
console.log(`API pronta: ${base}`);

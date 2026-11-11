import newman from 'newman';
import { readFileSync, mkdirSync } from 'node:fs';
mkdirSync('reports/api', { recursive: true });
const collection = JSON.parse(readFileSync('tests/api-postman/collections/medagenda-smoke.postman_collection.json', 'utf8'));
const environment = JSON.parse(readFileSync('tests/api-postman/environments/local.postman_environment.json', 'utf8'));
newman.run({
  collection,
  environment,
  envVar: [{ key: 'apiBaseUrl', value: process.env.API_BASE_URL || 'http://localhost:3000/api' }],
  reporters: ['cli', 'json', 'junit'],
  reporter: {
    json: { export: 'reports/api/newman.json' },
    junit: { export: 'reports/api/junit.xml' }
  },
  timeoutRequest: 10000
}, (error, summary) => {
  if (error) console.error(error.message);
  if (error || summary?.run.failures.length) process.exitCode = 1;
});

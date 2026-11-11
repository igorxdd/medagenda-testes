import { mkdirSync } from 'node:fs';
for (const suite of ['api', 'bdd', 'interface', 'a11y', 'k6']) {
  mkdirSync(`reports/${suite}`, { recursive: true });
}

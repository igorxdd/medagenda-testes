import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync('docs/referencias/aplicacao-original.sha256.json', 'utf8').replace(/^\uFEFF/, ''));
const changed = [];
for (const [file, expected] of Object.entries(manifest)) {
  try {
    const actual = createHash('sha256').update(readFileSync(file)).digest('hex');
    if (actual !== expected) changed.push(file);
  } catch {
    changed.push(file);
  }
}
if (changed.length) throw new Error(`Aplicacao diferente do ZIP original: ${changed.join(', ')}`);
console.log(`${Object.keys(manifest).length} arquivos originais preservados.`);

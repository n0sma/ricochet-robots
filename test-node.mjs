// Runs the in-page self-tests headlessly: node test-node.mjs
import fs from 'node:fs';
const html = fs.readFileSync(new URL('./ricochet-robots.html', import.meta.url), 'utf8');
const core = html.match(/<script id="core">([\s\S]*?)<\/script>/)[1];
(0, eval)(core);
const res = globalThis.RRCore.runTests(console.log);
process.exit(res.fail ? 1 : 0);

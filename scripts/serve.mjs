import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../docs');
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.css':'text/css; charset=utf-8', '.json':'application/json; charset=utf-8', '.svg':'image/svg+xml', '.png':'image/png', '.woff2':'font/woff2', '.woff':'font/woff' };
// Dev-only allowance so impeccable live mode (http://localhost:8400) can load. This server only binds 127.0.0.1.
const liveDev = process.env.NODE_ENV === 'production' ? '' : ' http://localhost:8400';
const server = http.createServer((req, res) => {
  const headers = { 'X-Content-Type-Options':'nosniff', 'X-Robots-Tag':'noindex, nofollow', 'Cache-Control':'no-store', 'Referrer-Policy':'no-referrer', 'Content-Security-Policy':`default-src 'self'; script-src 'self'${liveDev}; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self'${liveDev}; frame-ancestors 'none'; base-uri 'none'` };
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405, headers); res.end(); return; }
  let rel;
  try { rel = decodeURIComponent(new URL(req.url, 'http://127.0.0.1').pathname); } catch { res.writeHead(400, headers); res.end(); return; }
  if (rel.includes('\0')) { res.writeHead(400, headers); res.end(); return; }
  const target = path.resolve(base, '.' + (rel === '/' ? '/index.html' : rel));
  if (!target.startsWith(base + path.sep)) { res.writeHead(403, headers); res.end(); return; }
  fs.stat(target, (error, stat) => {
    if (error || !stat.isFile()) { res.writeHead(404, headers); res.end('Not found'); return; }
    res.writeHead(200, { ...headers, 'Content-Type': types[path.extname(target)] || 'application/octet-stream' });
    if (req.method === 'HEAD') res.end(); else fs.createReadStream(target).on('error', () => res.destroy()).pipe(res);
  });
});
server.listen(4174, '127.0.0.1', () => console.log('Korean Frappe HR mockup: http://127.0.0.1:4174'));
server.on('error', error => { console.error(error.message); process.exitCode = 1; });

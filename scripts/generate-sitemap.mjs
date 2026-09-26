import {writeFileSync} from 'fs';
const base='https://xn--lypuhelin-u2a.fi';
const routes=['/','/vittuilupuhelin'];
writeFileSync('public/sitemap.xml',`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(r=>`\n  <url><loc>${base}${r}</loc></url>`).join('')}\n</urlset>\n`);
console.log(`Sitemap generated: ${routes.length} pages`);

import { writeFileSync } from "fs";

const BASE = "https://xn--lypuhelin-u2a.fi";
const now = new Date().toISOString().split("T")[0];

const pages = [
  { loc: "/", priority: "1.0", changefreq: "weekly" },
  { loc: "/vittuilupuhelin", priority: "0.9", changefreq: "weekly" },
  { loc: "/it-guru", priority: "0.7", changefreq: "monthly" },
  { loc: "/lemmikkiguru", priority: "0.7", changefreq: "monthly" },
  { loc: "/ravintoguru", priority: "0.7", changefreq: "monthly" },
  { loc: "/kuntoguru", priority: "0.7", changefreq: "monthly" },
  { loc: "/joulupukki", priority: "0.5", changefreq: "monthly" },
  { loc: "/tietosuoja", priority: "0.3", changefreq: "yearly" },
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${BASE}${p.loc}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", xml);
console.log(`Sitemap generated: ${pages.length} pages`);

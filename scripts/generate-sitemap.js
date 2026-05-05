const fs = require('fs');
const path = require('path');

// Edit this list when you add pages/routes you want in the sitemap
const DOMAIN = 'https://mmsalmanfaris.digitalpartner.ae';
const routes = [
  '/',
  '/#home',
  '/#projects',
  '/#contact'
];

const sitemapItems = routes.map((route) => {
  return `  <url>\n    <loc>${DOMAIN}${route}</loc>\n    <lastmod>${new Date().toISOString().slice(0,10)}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`;
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapItems.join('\n')}\n</urlset>\n`;

const outPath = path.join(__dirname, '..', 'public', 'sitemap.xml');
fs.writeFileSync(outPath, sitemap, 'utf8');
console.log('Wrote sitemap to', outPath);

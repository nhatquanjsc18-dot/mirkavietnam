// Tạo file import WordPress (WXR) cho 268 sản phẩm từ wp-theme-mirka-vn/assets/data/products.json.
// Chạy: node tools/build-wp-import.js
// Kết quả: wordpress-import/mirka-products.xml  (dùng ở wp-admin → Công cụ → Nhập → WordPress)
//
// Định dạng meta phải khớp mirka_product_array_to_meta() trong
// wp-theme-mirka-vn/inc/products-cpt.php.

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SRC = path.join(ROOT, 'wp-theme-mirka-vn', 'assets', 'data', 'products.json');
const OUT_DIR = path.join(ROOT, 'wordpress-import');
const OUT = path.join(OUT_DIR, 'mirka-products.xml');
const SITE = 'https://mirka.nhatquan.vn';
const DATE = '2026-10-02 08:00:00';

const products = JSON.parse(fs.readFileSync(SRC, 'utf8'));

function cdata(s) {
  return '<![CDATA[' + String(s).replace(/]]>/g, ']]]]><![CDATA[>') + ']]>';
}

function toMeta(p) {
  const meta = {};
  for (const k of ['slug', 'category', 'subCat', 'subCatLabel', 'img', 'shortDesc', 'lead', 'why', 'seoKeyword']) {
    meta['mp_' + k] = p[k] == null ? '' : String(p[k]);
  }
  meta.mp_features = (p.features || []).map((f) => (f[0] || '') + ' | ' + (f[1] || '')).join('\n');
  meta.mp_specs = Object.entries(p.specs || {}).map(([k, v]) => k + ' | ' + v).join('\n');
  meta.mp_applications = (p.applications || []).join('\n');
  return meta;
}

const items = products.map((p, i) => {
  const meta = toMeta(p);
  const metaXml = Object.entries(meta)
    .map(([k, v]) => `\t\t<wp:postmeta>\n\t\t\t<wp:meta_key>${cdata(k)}</wp:meta_key>\n\t\t\t<wp:meta_value>${cdata(v)}</wp:meta_value>\n\t\t</wp:postmeta>`)
    .join('\n');
  return `\t<item>
\t\t<title>${cdata(p.name)}</title>
\t\t<link>${SITE}/?post_type=mirka_product&amp;p=${1001 + i}</link>
\t\t<pubDate>Fri, 02 Oct 2026 08:00:00 +0000</pubDate>
\t\t<dc:creator>${cdata('admin')}</dc:creator>
\t\t<guid isPermaLink="false">${SITE}/?post_type=mirka_product&amp;p=${1001 + i}</guid>
\t\t<description></description>
\t\t<content:encoded>${cdata('')}</content:encoded>
\t\t<excerpt:encoded>${cdata('')}</excerpt:encoded>
\t\t<wp:post_id>${1001 + i}</wp:post_id>
\t\t<wp:post_date>${cdata(DATE)}</wp:post_date>
\t\t<wp:post_date_gmt>${cdata(DATE)}</wp:post_date_gmt>
\t\t<wp:post_modified>${cdata(DATE)}</wp:post_modified>
\t\t<wp:post_modified_gmt>${cdata(DATE)}</wp:post_modified_gmt>
\t\t<wp:comment_status>${cdata('closed')}</wp:comment_status>
\t\t<wp:ping_status>${cdata('closed')}</wp:ping_status>
\t\t<wp:post_name>${cdata(p.slug)}</wp:post_name>
\t\t<wp:status>${cdata('publish')}</wp:status>
\t\t<wp:post_parent>0</wp:post_parent>
\t\t<wp:menu_order>0</wp:menu_order>
\t\t<wp:post_type>${cdata('mirka_product')}</wp:post_type>
\t\t<wp:post_password>${cdata('')}</wp:post_password>
\t\t<wp:is_sticky>0</wp:is_sticky>
${metaXml}
\t</item>`;
});

const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"
\txmlns:excerpt="http://wordpress.org/export/1.2/excerpt/"
\txmlns:content="http://purl.org/rss/1.0/modules/content/"
\txmlns:wfw="http://wellformedweb.org/CommentAPI/"
\txmlns:dc="http://purl.org/dc/elements/1.1/"
\txmlns:wp="http://wordpress.org/export/1.2/">
<channel>
\t<title>Mirka Việt Nam - Sản phẩm</title>
\t<link>${SITE}</link>
\t<description>Dữ liệu ${products.length} sản phẩm Mirka</description>
\t<pubDate>Fri, 02 Oct 2026 08:00:00 +0000</pubDate>
\t<language>vi</language>
\t<wp:wxr_version>1.2</wp:wxr_version>
\t<wp:base_site_url>${SITE}</wp:base_site_url>
\t<wp:base_blog_url>${SITE}</wp:base_blog_url>
\t<wp:author><wp:author_id>1</wp:author_id><wp:author_login>${cdata('admin')}</wp:author_login><wp:author_email>${cdata('nhatquanjsc18@gmail.com')}</wp:author_email><wp:author_display_name>${cdata('admin')}</wp:author_display_name><wp:author_first_name>${cdata('')}</wp:author_first_name><wp:author_last_name>${cdata('')}</wp:author_last_name></wp:author>
\t<generator>https://wordpress.org/?v=6.8</generator>
${items.join('\n')}
</channel>
</rss>
`;

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(OUT, xml, 'utf8');
console.log(`Đã tạo ${OUT} — ${products.length} sản phẩm, ${(xml.length / 1024).toFixed(0)} KB`);

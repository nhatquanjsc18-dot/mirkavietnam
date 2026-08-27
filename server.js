// Mirka Việt Nam — server Node.js/Express phục vụ site tĩnh (HTML/CSS/JS/ảnh)
// và xử lý URL sản phẩm SEO-friendly dạng /mirka-{model}.
//
// Chạy local:  npm install && npm start   (mặc định cổng 3000)
// Deploy Hostinger: xem DEPLOY.md

const express = require('express');
const compression = require('compression');
const path = require('path');
const { sendFormEmail } = require('./mailer');

const app = express();
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

app.disable('x-powered-by');
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Nhận submit từ form Liên hệ / Đăng ký bảo hành / Đăng ký nhận tin,
// gửi email về MAIL_TO (xem mailer.js + .env.example).
app.post('/api/contact', async (req, res) => {
  const body = req.body || {};
  const formType = body.formType || 'lien-he';

  // Honeypot chống spam bot: field "website" ẩn trên form, người dùng thật
  // không bao giờ điền vào -> nếu có giá trị thì âm thầm coi như thành công.
  if (body.website) {
    return res.json({ ok: true });
  }

  const fields = { ...body };
  delete fields.formType;
  delete fields.website;
  delete fields.action;

  if (!fields.name && formType !== 'newsletter') {
    return res.status(400).json({ ok: false, error: 'missing_name' });
  }

  const result = await sendFormEmail(formType, fields);
  if (!result.ok) {
    return res.status(502).json({ ok: false, error: result.error });
  }
  res.json({ ok: true });
});

// Không phục vụ các thư mục/file nội bộ không dành cho public (theme WordPress
// riêng, mã nguồn server, cấu hình dự án...). Chặn trước khi vào static middleware.
const BLOCKED_PREFIXES = [
  '/wp-theme-mirka-vn',
  '/wp-theme-mirka-vn.zip',
  '/.git',
  '/.claude',
  '/node_modules',
  '/server.js',
  '/mailer.js',
  '/package.json',
  '/package-lock.json',
  '/DEPLOY.md',
  '/.env',
  '/.env.example',
];
app.use((req, res, next) => {
  const p = req.path;
  if (p.startsWith('/.') || BLOCKED_PREFIXES.some((bp) => p === bp || p.startsWith(bp + '/'))) {
    return res.status(404).sendFile(path.join(ROOT, '404.html'));
  }
  next();
});

// URL sản phẩm SEO-friendly: /mirka-{slug} (nguyên tắc "hãng Mirka + model máy").
// product-detail.js tự đọc model từ window.location.pathname để render đúng sản phẩm,
// nên server chỉ cần trả về đúng nội dung product.html, giữ nguyên URL hiển thị.
app.get('/mirka-:slug([a-z0-9-]+)', (req, res) => {
  res.sendFile(path.join(ROOT, 'product.html'));
});

// Toàn bộ file tĩnh còn lại: *.html, style.css, script.js, catalog.js,
// product-detail.js, products-data*.js, thư mục images/.
app.use(
  express.static(ROOT, {
    extensions: ['html'],
    setHeaders: (res, filePath) => {
      // Ảnh sản phẩm không đổi nội dung theo slug -> cache dài hạn.
      if (filePath.includes(`${path.sep}images${path.sep}`)) {
        res.setHeader('Cache-Control', 'public, max-age=604800, immutable');
      }
    },
  })
);

// 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(ROOT, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Mirka Việt Nam site đang chạy tại http://localhost:${PORT}`);
});

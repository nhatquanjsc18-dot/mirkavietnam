# Deploy lên Hostinger (Node.js App)

## 0. Cấu hình email nhận form Liên hệ / Đăng ký bảo hành / Đăng ký nhận tin

Toàn bộ form trên site đều POST về `/api/contact`, gửi email qua Gmail SMTP
(xem `mailer.js`). Cần cấu hình trước khi chạy, cả local lẫn trên server:

```bash
cp .env.example .env
```

Rồi mở `.env`, điền `GMAIL_APP_PASSWORD` (xem hướng dẫn tạo App Password chi
tiết ngay trong file `.env.example`). File `.env` đã được `.gitignore`, không
bao giờ bị đưa lên Git/GitHub. Nếu chưa cấu hình, form vẫn hoạt động nhưng sẽ
báo lỗi "Có lỗi xảy ra khi gửi..." cho khách và không gửi được email.

Trên Hostinger: vào hPanel → Node.js → **Environment variables**, thêm 3 biến
`GMAIL_USER`, `GMAIL_APP_PASSWORD`, `MAIL_TO` giống nội dung file `.env` (thay
vì upload file `.env` lên server).

## 1. Chạy thử local (máy có Node.js ≥ 18)

```bash
npm install
npm start
```

Mở `http://localhost:3000`. Nếu đổi cổng: `PORT=8080 npm start`.

## 2. Push code lên GitHub

```bash
git init
git add .
git commit -m "Mirka Việt Nam website - Node.js/Express"
git branch -M main
git remote add origin https://github.com/<tai-khoan>/<ten-repo>.git
git push -u origin main
```

> Thay `<tai-khoan>/<ten-repo>` bằng repository GitHub thật của bạn. Nếu repo chưa tồn tại, tạo trước trên github.com (Add file → không cần README, vì repo local đã có sẵn).

## 3. Deploy trên Hostinger (gói có Node.js — Business/Cloud/VPS)

1. Đăng nhập **hPanel** → chọn website → **Advanced → Node.js**.
2. Bấm **Create Application**:
   - **Node.js version**: 18 hoặc mới hơn.
   - **Application root**: thư mục chứa code (nếu deploy qua Git, Hostinger sẽ clone vào đây).
   - **Application startup file**: `server.js`.
   - **Application URL**: domain/subdomain của bạn.
3. Nếu Hostinger hỗ trợ **Git deploy** (mục "Git" trong hPanel):
   - Dán URL repo GitHub vừa push ở bước 2.
   - Chọn branch `main`.
   - Bấm **Deploy** — Hostinger tự `git pull` và cài đặt.
4. Nếu không có Git deploy, deploy thủ công qua **File Manager** hoặc **SSH**:
   ```bash
   cd domains/your-domain.com/public_html
   git clone https://github.com/<tai-khoan>/<ten-repo>.git .
   npm install --production
   ```
5. Trong hPanel → Node.js, bấm **NPM Install** (nếu có nút riêng) hoặc chạy qua SSH:
   ```bash
   npm install --omit=dev
   ```
6. Bấm **Restart Application**. Hostinger tự set biến môi trường `PORT` — `server.js` đã đọc `process.env.PORT` sẵn, không cần sửa gì.

## 4. Sau khi deploy — việc cần làm ngay

- Kiểm tra trang chủ, trang danh mục (`/san-pham.html`), và một sản phẩm dạng URL đẹp (`/mirka-deros-ii-625`) load đúng, không lỗi console.
- Trỏ DNS domain của bạn về Hostinger nếu domain mua ở nơi khác.
- Bật SSL miễn phí (Let's Encrypt) trong hPanel nếu domain mới trỏ vào.
- Cập nhật lại link cứng trong `sitemap.xml`/Google Search Console sang domain thật (nếu sau này thêm sitemap).

## 5. Cập nhật code sau này

```bash
git add .
git commit -m "Cập nhật ..."
git push
```

Rồi vào hPanel → Node.js → **Pull latest** (hoặc SSH `git pull && npm install --omit=dev`) → **Restart Application**.

## Cấu trúc quan trọng cần biết

- `server.js` — toàn bộ logic server (static file + rewrite `/mirka-{model}`).
- `products-data.js` → `products-data-6.js` — dữ liệu sản phẩm (data-driven, không phải hard-code trong HTML).
- `wp-theme-mirka-vn/` — theme WordPress **riêng biệt**, không dùng khi chạy bằng Node.js/Hostinger. Server đã chặn không public thư mục này ra ngoài.

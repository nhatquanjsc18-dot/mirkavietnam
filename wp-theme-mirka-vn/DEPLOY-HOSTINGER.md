# Deploy theme Mirka Việt Nam lên WordPress trên Hostinger

Hướng dẫn này dành riêng cho bản **WordPress** (file `wp-theme-mirka-vn.zip`), triển khai lên domain/subdomain `mirka.nhatquan.vn` trên Hostinger. Khác với bản Node.js/Express (xem `DEPLOY.md` ở thư mục gốc) — bản này cần cài WordPress trước rồi mới cài theme.

## 1. Cài đặt WordPress trên Hostinger

1. Đăng nhập **hPanel** → chọn website/subdomain `mirka.nhatquan.vn`.
2. Vào **Websites** → nếu subdomain chưa có WordPress, bấm **Auto Installer** (hoặc "Cài đặt WordPress") → chọn **WordPress** → điền thông tin quản trị (username, password, email) → Cài đặt.
3. Chờ vài phút cho tới khi cài xong, truy cập thử `https://mirka.nhatquan.vn/wp-admin` để xác nhận đăng nhập được.

> Nếu subdomain đã có sẵn WordPress (hoặc bản cài khác), sao lưu trước khi tiếp tục — việc đổi theme không xoá dữ liệu, nhưng nên sao lưu cho chắc (hPanel → Backups).

## 2. Cài theme

1. Vào **wp-admin → Appearance → Themes → Add New Theme → Upload Theme**.
2. Chọn file `wp-theme-mirka-vn.zip`, bấm **Install Now**, sau đó **Activate**.
3. Theme tự động flush rewrite rules khi kích hoạt (xem `mirka_flush_rewrite_rules()` trong `functions.php`), nhưng nên vào **Settings → Permalinks**, chọn **Post name**, bấm **Save Changes** một lần nữa cho chắc.

## 3. Tạo 15 Trang (Pages) và gán đúng Template

Vào **Pages → Add New**, tạo lần lượt 15 trang với đúng **slug** (phần URL) bên dưới, mỗi trang gán đúng **Template** (mục Page Attributes → Template, phía cột phải khi soạn trang):

| Slug (URL) | Template |
|---|---|
| `san-pham` | Trang: Sản phẩm |
| `product` | Trang: Chi tiết sản phẩm |
| `bai-viet` | Trang: Kiến thức & Tin tức |
| `lien-he` | Trang: Liên hệ |
| `dang-ky-bao-hanh` | Trang: Đăng ký bảo hành |
| `dieu-khoan-bao-hanh` | Trang: Điều khoản bảo hành |
| `nha-phan-phoi-mirka` | Trang: Nhà phân phối Mirka |
| `nganh-va-cham-oto` | Trang: Ngành nghề |
| `nganh-go-noi-that` | Trang: Ngành nghề |
| `nganh-xay-dung` | Trang: Ngành nghề |
| `nganh-hang-hai` | Trang: Ngành nghề |
| `nganh-cong-nghiep-oto` | Trang: Ngành nghề |
| `nganh-composite` | Trang: Ngành nghề |
| `nganh-dung-cu` | Trang: Ngành nghề |
| `nganh-powertrain` | Trang: Ngành nghề |

Ghi chú:
- Tiêu đề (title) của mỗi trang không quan trọng vì nội dung hiển thị lấy từ chính file template PHP (`page-*.php`) — chỉ cần **slug** đúng tuyệt đối.
- 8 trang "Ngành nghề" dùng CHUNG một template (`page-nganh-nghe.php`); nó tự nhận biết nội dung nào hiển thị dựa trên slug của trang.
- Trang `product` không cần nội dung gì cả, vì nội dung sản phẩm đọc trực tiếp từ URL (`/mirka-{model}/`) qua JavaScript, không phải từ nội dung Trang.
- **Trang chủ KHÔNG cần tạo** — theme tự nhận `front-page.php` làm trang chủ mặc định, không cần cấu hình gì thêm ở Settings → Reading.

## 4. Kiểm tra URL sản phẩm (SEO-friendly)

Theme có rewrite rule tự đăng ký: `/mirka-{model}/` → trang `product`. Sau khi tạo xong 15 trang ở bước 3, vào lại **Settings → Permalinks** và bấm **Save Changes** một lần nữa để WordPress nạp lại rewrite rule mới nhất.

Kiểm tra thử: `https://mirka.nhatquan.vn/mirka-deros-ii-625/` phải hiển thị đúng trang chi tiết sản phẩm DEROS II 625, không phải lỗi 404.

## 5. Các phần đã được cấu hình sẵn trong theme (không cần làm gì thêm)

- **Google Analytics** (`G-N2BC37WDGF`) — tự chèn vào mọi trang qua `wp_head`.
- **Favicon** — logo Nhất Quán, tự chèn qua `wp_head`.
- **Form Liên hệ** — gửi thẳng qua Web3Forms (access key đã gắn sẵn trong `functions.php`), không cần cấu hình SMTP.
- **Form Đăng ký bảo hành / Đăng ký nhận tin** — gửi qua `wp_mail()` tới `nhatquanjsc18@gmail.com`.

> Lưu ý về `wp_mail()`: hosting dùng hàm `mail()` mặc định của PHP, nhiều khi bị nhà cung cấp email (Gmail) đánh dấu spam hoặc chặn. Nếu test gửi form Đăng ký bảo hành mà không thấy email đến, cài plugin **WP Mail SMTP** (miễn phí) và cấu hình gửi qua Gmail SMTP (dùng cùng tài khoản `nhatquanjsc18@gmail.com` và App Password đã tạo trước đó cho bản Node.js) để đảm bảo gửi được ổn định.

## 6. Kiểm tra sau khi deploy

- Trang chủ, trang sản phẩm (`/san-pham/`), một sản phẩm cụ thể (`/mirka-deros-ii-625/`), trang Liên hệ, trang Nhà phân phối Mirka — load đúng, không lỗi console, ảnh hiển thị đầy đủ.
- Gửi thử form Liên hệ — xác nhận hiện thông báo thành công.
- Gửi thử form Đăng ký bảo hành — kiểm tra email có đến `nhatquanjsc18@gmail.com` không (xem lưu ý SMTP ở trên nếu không thấy).
- Bật SSL miễn phí (Let's Encrypt) trong hPanel nếu domain mới trỏ vào, đảm bảo `https://` hoạt động.

## 7. Cập nhật theme sau này

Mỗi khi theme được chỉnh sửa và đóng gói lại thành `wp-theme-mirka-vn.zip` mới:
1. **Appearance → Themes** → xoá theme cũ (Delete) hoặc dùng plugin cập nhật theme thủ công.
2. Upload lại file zip mới qua **Add New Theme → Upload Theme**, Activate lại.
3. Vào **Settings → Permalinks** bấm **Save Changes** một lần nữa nếu có trang mới được thêm.

Dữ liệu sản phẩm, bài viết, trang nội dung đều nằm trong các file PHP/JS của theme (không lưu trong database), nên cập nhật theme không ảnh hưởng tới Trang/Bài viết đã tạo trong WordPress.

# Mirka Việt Nam — Website

Website catalogue sản phẩm phân phối Mirka tại Việt Nam (Nhất Quán JSC). Dữ liệu và hình ảnh sản phẩm tham khảo từ mirka.com — trang trình bày minh họa, không phải trang chính thức của Mirka.

Chạy bằng **Node.js/Express**, kiến trúc data-driven (không hard-code sản phẩm vào HTML):

- `products-data.js` … `products-data-6.js` — mảng `PRODUCTS` toàn cục, mỗi file một đợt bổ sung sản phẩm.
- `catalog.js` — render lưới sản phẩm + tìm kiếm + lọc danh mục trên `san-pham.html` và khối "sản phẩm nổi bật" ở trang chủ.
- `product-detail.js` — render trang chi tiết sản phẩm (`product.html`) từ URL `/mirka-{model}`.
- `server.js` — server Express: phục vụ file tĩnh + rewrite URL sản phẩm SEO-friendly.

## Chạy local

```bash
npm install
npm start
```

Mặc định chạy ở `http://localhost:3000`.

## Deploy

Xem hướng dẫn chi tiết deploy lên Hostinger (Node.js App) tại [DEPLOY.md](DEPLOY.md).

## Cấu trúc URL

| Trang | URL |
|---|---|
| Trang chủ | `/` |
| Danh mục sản phẩm | `/san-pham.html?cat={dien\|khinen\|robot\|pin\|mai\|danhbong\|hutbui\|phukien}` |
| Chi tiết sản phẩm | `/mirka-{model}` (vd: `/mirka-deros-ii-625`) |
| Bài viết & kiến thức | `/bai-viet.html` |
| Bài viết theo ngành | `/nganh-{ten-nganh}.html` |
| Liên hệ | `/lien-he.html` |

## Ghi chú

Thư mục `wp-theme-mirka-vn/` là bản theme WordPress **riêng biệt** (dùng nếu deploy lên hosting WordPress thay vì Node.js) — không liên quan đến `server.js`.

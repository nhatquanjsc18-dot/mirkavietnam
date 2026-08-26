---
name: copy-web
description: Xây dựng website bán hàng (thường tiếng Việt) bằng cách sao chép dữ liệu sản phẩm — tên, ảnh, thông số — từ một website nguồn (ví dụ trang hãng sản xuất nước ngoài như mirka.com) sang một website đích có layout/thương hiệu riêng do người dùng chỉ định. LUÔN dùng skill này khi người dùng yêu cầu "copy sản phẩm từ trang X", "lấy dữ liệu từ website nguồn", "cập nhật/bổ sung sản phẩm còn thiếu từ link Y vào danh mục Z", "tạo danh mục mới đặt cạnh danh mục A", hoặc bất kỳ yêu cầu nào liên quan tới việc nhân bản catalogue sản phẩm của một trang thương mại điện tử/nhà sản xuất sang trang web của người dùng. Cũng dùng khi người dùng phàn nàn ảnh sản phẩm bị lỗi/vỡ trên trang đã dựng theo quy trình này.
---

# Copy Web — sao chép catalogue sản phẩm từ trang nguồn sang trang đích

Quy trình này dựng một website bán hàng data-driven bằng cách trích xuất sản phẩm (tên + ảnh + thông số) từ một website nguồn, viết lại mô tả bằng ngôn ngữ đích (không sao chép nguyên văn), và tổ chức thành catalogue có danh mục/lọc/trang chi tiết. Đây là quy trình đã được kiểm chứng qua một phiên xây dựng thực tế nhiều vòng lặp — làm đúng thứ tự bên dưới sẽ tránh phần lớn lỗi hay gặp.

## Bước 0 — Dựng layout trước, duyệt trước khi mở rộng

Trước khi cào dữ liệu hàng loạt, dựng layout trang đích (header, hero, danh mục, footer, trang sản phẩm mẫu...) theo **cấu trúc/phong cách** của trang nguồn nhưng dùng **bảng màu và thương hiệu riêng** mà người dùng chỉ định. Đưa 8–10 sản phẩm mẫu vào để người dùng duyệt layout trước. Đừng mở rộng ra hàng chục/hàng trăm sản phẩm khi layout còn chưa được chốt — sẽ phải viết lại nhiều lần rất tốn công.

## Bước 1 — Thu thập dữ liệu từ trang nguồn bằng trình duyệt (không dùng WebFetch)

WebFetch không trả về ảnh và thường tóm tắt/mất thông tin. Luôn dùng công cụ trình duyệt (navigate + javascript_exec) để lấy dữ liệu thô chính xác.

**Kỹ thuật trích xuất cặp tên + ảnh** — đáng tin cậy hơn nhiều so với đọc text trang rồi đoán ảnh tương ứng:

```javascript
(function(){
  var imgs = Array.from(document.querySelectorAll('img')).filter(function(i){
    var s = i.currentSrc || i.src;
    return s && s.indexOf('DOMAIN_ANH_TRANG_NGUON') !== -1; // vd img.mirka.com
  });
  var out = imgs.map(function(img){
    var el = img; var text = '';
    for (var depth = 0; depth < 6 && el; depth++) {
      el = el.parentElement;
      if (!el) break;
      var h = el.querySelector('h3,h4,h5');
      if (h && h.innerText.trim()) { text = h.innerText.trim(); break; }
    }
    return {name: text, img: img.currentSrc || img.src};
  }).filter(function(x){return x.name;});
  var seen={}, uniq=[];
  out.forEach(function(x){ if(!seen[x.name]){seen[x.name]=1; uniq.push(x);} });
  return JSON.stringify(uniq, null, 2);
})();
```

Ý tưởng: với mỗi `<img>` thuộc domain ảnh của trang nguồn, đi ngược lên tối đa ~6 cấp DOM cha để tìm heading (`h3/h4/h5`) gần nhất — đó gần như luôn là tên sản phẩm đi kèm ảnh đó trong một product card.

**Xử lý phân trang:** hầu hết trang catalogue có nút số trang ("1 2 3..."). Tìm và click nút tiếp theo, chạy lại đúng script trên, gộp kết quả:

```javascript
(function(){
  var btn = Array.from(document.querySelectorAll('button, a, [role="button"]'))
    .find(function(el){ return el.textContent.trim() === '2' && el.offsetParent !== null; });
  if (btn) { btn.click(); return 'clicked'; }
  return 'not found';
})();
```

So khớp tổng "N results" hiển thị trên trang với tổng số đã gom được sau khi duyệt hết các trang — đây là cách duy nhất để biết chắc đã lấy đủ, không bỏ sót trang cuối.

**⚠️ Quy tắc quan trọng nhất của cả quy trình: không bao giờ gõ tay lại URL ảnh.** URL ảnh của các trang thương mại thường rất dài và chứa token base64 (ví dụ `?context=bWFzdGVy...`). Gõ tay dù chỉ sai 1 ký tự sẽ khiến ảnh 404 mà rất khó phát hiện bằng mắt. Luôn copy nguyên văn chuỗi từ kết quả tool (browser hoặc grep) vào code — không đánh máy lại. Nếu cần sửa một ký tự trong một URL đã có sẵn trong file, dùng `Edit` với `old_string` lấy trực tiếp từ `grep -o` của chính file đó (không phải gõ lại từ trí nhớ).

## Bước 2 — Xác định phạm vi trước khi cào hàng loạt

Nếu danh mục nguồn có thể rất lớn (vài trăm sản phẩm), **hỏi người dùng trước** bằng AskUserQuestion để chọn mức độ, thay vì tự quyết rồi báo "xong" một phần:
- Đại diện chọn lọc (vài chục sản phẩm phủ đủ các dòng)
- Toàn bộ (cào hết mọi trang, mọi biến thể)
- Theo dòng sản phẩm cụ thể người dùng chỉ định

Nếu người dùng nói rõ "phải đầy đủ, không được bỏ qua" cho một nhóm cụ thể (ví dụ "Interface, Backing Pad phải cập nhật hết") — coi đó là yêu cầu bắt buộc lấy 100%, kiểm tra bằng số "N results" của từng trang phân trang, không được lấy đại diện rồi báo là xong.

## Bước 3 — Tổ chức dữ liệu dạng data-driven, chia nhiều file nhỏ

Không hard-code sản phẩm vào HTML. Dùng một mảng `PRODUCTS` toàn cục nạp từ nhiều file `<script>`:

- `products-data.js` — file gốc: `var PRODUCTS = [ {...}, {...} ];` và `var CATEGORIES = [ {key, label}, ... ];`
- `products-data-2.js`, `products-data-3.js`, ... — mỗi lần bổ sung một nhóm sản phẩm mới, tạo file mới dạng IIFE nối vào mảng chung, **không sửa trực tiếp file gốc lớn**:

```javascript
(function () {
  var list = [ /* sản phẩm mới */ ];
  window.PRODUCTS = (window.PRODUCTS || []).concat(list);
})();
```

Tách file nhỏ theo từng đợt bổ sung giúp: (a) tránh phải Edit vào một file khổng lồ dễ gây lỗi cú pháp hoặc mất dữ liệu ở giữa file, (b) dễ rollback một đợt nếu có lỗi, (c) mỗi lần chỉ cần thêm 1 dòng `<script src="products-data-N.js"></script>` vào các trang HTML dùng chung.

**Schema mỗi sản phẩm** (giữ nhất quán xuyên suốt):
```javascript
{
  slug, name, seoKeyword,           // seoKeyword mặc định = name nếu không cần khác
  category, categoryLabel,           // danh mục lớn, vd "dien" / "Máy chà nhám điện"
  subCat, subCatLabel,               // danh mục con để lọc chip phụ
  img,                               // URL ảnh gốc, COPY nguyên văn — xem quy tắc ở Bước 1
  shortDesc,                         // 1 câu, hiện trên card catalogue
  lead,                              // đoạn mở đầu trang chi tiết
  features: [["emoji","mô tả"], ...],
  specs: {"Tên thông số": "Giá trị", ...},
  applications: ["Ứng dụng 1", ...],
  why                                // đoạn "vì sao chọn sản phẩm này"
}
```

**Viết mô tả gốc, không dịch/sao chép nguyên văn mô tả tiếng Anh của trang nguồn.** Dùng thông số thật (kích thước, tốc độ, công suất...) làm nguyên liệu, nhưng câu văn phải tự viết lại bằng ngôn ngữ đích.

**Khi có nhiều biến thể cùng dòng** (ví dụ 30+ máy cùng họ chỉ khác kích thước/tốc độ), viết một **hàm factory JS** sinh nội dung theo tham số thay vì gõ tay từng khối lặp lại:

```javascript
function mayChaNhamKhiNen(opts) {
  return {
    slug: opts.slug, name: opts.name,
    lead: "Mirka® " + opts.model + " là máy chà nhám khí nén Ø" + opts.dia + "mm, biên độ " + opts.orbit + "mm...",
    // ...các field còn lại suy ra từ opts
  };
}
```
Vẫn đảm bảo mỗi sản phẩm có nội dung thật, không phải bản sao rập khuôn — chỉ là bộ khung câu được tái sử dụng hợp lý.

## Bước 4 — Đồng bộ danh mục ở MỌI nơi hiển thị, không chỉ 1 chỗ

Danh mục (category/subCat) thường xuất hiện lặp lại ở nhiều nơi: mảng `CATEGORIES`, tab lọc trên trang catalogue, menu overlay (accordion), và footer — trên **mọi trang HTML** dùng chung các thành phần này (trang chủ, catalogue, trang chi tiết sản phẩm, trang bài viết...).

Khi thêm 1 danh mục mới, phải sửa đủ cả 4-5 nơi này trên **tất cả** các trang HTML liên quan. Cách nhanh và ít sai sót nhất là dùng `sed` lặp qua danh sách file:

```bash
for f in index.html san-pham.html product.html bai-viet.html; do
  sed -i 's|<a href="san-pham.html?cat=A">Danh mục A</a>|<a href="san-pham.html?cat=A">Danh mục A</a>\n        <a href="san-pham.html?cat=MOI">Danh mục mới</a>|' "$f"
done
```

**Khi người dùng yêu cầu "đặt cạnh danh mục X"**: phải chèn đúng vị trí ngay sau X trong TẤT CẢ danh sách trên (không phải chỉ thêm vào cuối danh sách) — dùng `sed` với anchor là dòng chứa danh mục X để chèn ngay sau nó, như ví dụ trên.

## Bước 5 — Trang chi tiết dùng chung 1 template, không tạo N file HTML

Một file `product.html` duy nhất đọc query param `?slug=...`, tìm trong `PRODUCTS`, và render vào các phần tử theo id: breadcrumb, ảnh, tên, mô tả ngắn, tab "MÔ TẢ / ĐÁNH GIÁ", danh sách đặc điểm nổi bật, bảng thông số kỹ thuật, danh sách ứng dụng, đoạn "vì sao chọn sản phẩm này", khối "vì sao chọn công ty" (nội dung cố định, không đổi theo sản phẩm), và lưới "sản phẩm tương tự" (lọc theo cùng `category`, loại trừ chính nó).

Trang catalogue (`san-pham.html`) và khối "sản phẩm nổi bật" ở trang chủ dùng chung một `catalog.js` để render lưới sản phẩm + ô tìm kiếm + tab danh mục + chip lọc nhóm con — tất cả tính động từ `PRODUCTS`, không hard-code danh sách sản phẩm trong HTML.

## Bước 6 — Chạy local server để kiểm thử

Nếu máy không có Python/Node sẵn (kiểm tra bằng `node --version` / `python --version` trước), dùng PowerShell `HttpListener` làm static server tối thiểu — xem `scripts/serve.ps1` đi kèm skill này.

**Lưu ý quan trọng khi đường dẫn dự án chứa ký tự Unicode** (tiếng Việt có dấu): PowerShell 5.1 đọc file `.ps1` theo codepage hệ thống nếu không có BOM, khiến đường dẫn Unicode trong script bị đọc sai → server báo 404 dù file tồn tại. Luôn ghi lại script bằng UTF-8 **có BOM**:
```powershell
[System.IO.File]::WriteAllText($scriptPath, $content, [System.Text.Encoding]::UTF8)
```
(`Encoding.UTF8` tĩnh của .NET mặc định ghi kèm BOM.)

Sau đó dùng `preview_start` với launch.json trỏ vào server đó (không dùng `file://` trực tiếp — nhiều trình duyệt preview coi file ngoài thư mục dự án là snapshot tĩnh, không chạy JS thật).

## Bước 7 — Checklist kiểm thử bắt buộc sau MỌI lần thêm/sửa dữ liệu

Không được coi "Edit thành công" là đã xong — luôn xác minh bằng dữ liệu thật:

1. Mở trang bằng `navigate`, kiểm tra `read_console_messages` không có lỗi JS thật sự (phân biệt với lỗi 404 ảnh — xem mục 4).
2. Đếm tổng sản phẩm và kiểm tra không trùng: `PRODUCTS.length - new Set(PRODUCTS.map(p=>p.slug)).size === 0`.
3. Đếm số lượng theo từng `category`/`subCat` và so với con số kỳ vọng (vd "phải có đúng 39 sản phẩm nhóm X"). **Đây là bước phát hiện mất dữ liệu quan trọng nhất** — một lần `Edit` chèn nội dung mới từng vô tình làm biến mất 4 sản phẩm cũ ở giữa file (do `old_string` khớp nhầm vị trí) mà không có thông báo lỗi nào; chỉ việc đếm lại theo subCat mới lộ ra.
4. Kiểm tra ảnh lỗi bằng cách preload đồng loạt:
   ```javascript
   var candidates = PRODUCTS.filter(p => p.category === 'X');
   var results = []; var pending = candidates.length;
   new Promise(resolve => candidates.forEach(p => {
     var img = new Image();
     img.onload = () => { pending--; if (!pending) resolve(results); };
     img.onerror = () => { results.push(p.slug); pending--; if (!pending) resolve(results); };
     img.src = p.img;
   }));
   ```
   **Cảnh báo false positive:** preload hàng chục ảnh cùng lúc dễ bị trình duyệt giới hạn số kết nối đồng thời, báo lỗi giả. Không kết luận ảnh hỏng chỉ từ bước này — xác minh lại bằng `curl -s -o /dev/null -w "%{http_code}" "$url"` cho từng ảnh nghi ngờ, tốt nhất chạy tuần tự có `sleep 0.3` giữa các request (một số CDN chặn/từ chối tạm thời nếu gửi quá nhiều request liên tiếp quá nhanh, gây 404 giả dù ảnh vẫn tồn tại).
5. Chỉ khi `curl` có độ trễ vẫn xác nhận 404 thật, mới quay lại trang nguồn lấy URL ảnh mới nhất (token trong URL có thể hết hạn theo thời gian) và thay bằng `Edit` — copy nguyên văn từ kết quả tool, không gõ tay.

## Lỗi hay gặp và cách phòng tránh

| Lỗi | Nguyên nhân | Cách tránh |
|---|---|---|
| Ảnh 404 rải rác | Gõ tay lại URL base64 dài, sai 1 ký tự | Luôn copy nguyên văn từ tool output, không đánh máy |
| File JS lỗi cú pháp, trang trắng | 1 lần `Edit` lỡ chèn text thừa (vd cụm ghi chú đặt nhầm chỗ) | Sau mỗi `Edit` vào file `.js` lớn: `curl` trang dùng file đó xem có lỗi 500 không, `grep` tìm nội dung lạ vừa nghi ngờ chèn nhầm |
| Mất sản phẩm cũ sau khi thêm sản phẩm mới | `old_string` của `Edit` khớp nhầm vị trí trong file dài | Đếm lại tổng số + số theo subCat NGAY sau mỗi `Edit` lớn |
| Báo "đã cập nhật đầy đủ" nhưng thực ra chỉ lấy một phần | Không đối chiếu số "N results" của trang nguồn với số đã lấy được | Luôn so khớp tổng số trước khi báo hoàn tất, đặc biệt khi người dùng nhấn mạnh "không được bỏ qua" |
| Không mở được bằng `file://` | Trình duyệt preview coi file ngoài thư mục dự án là ảnh tĩnh | Luôn chạy qua local server (Bước 6) |

## Tài nguyên đi kèm

- `scripts/serve.ps1` — static server tối thiểu bằng PowerShell HttpListener, xử lý đúng đường dẫn Unicode. Sửa biến `$root` ở đầu file trỏ đến thư mục dự án, chạy nền bằng `Start-Process`.

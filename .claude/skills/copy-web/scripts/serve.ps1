# Static file server tối thiểu cho việc kiểm thử local khi xây site theo skill copy-web.
# Dùng khi máy không có sẵn Python/Node để chạy "python -m http.server" hay "npx serve".
#
# CÁCH DÙNG:
# 1. Sửa biến $root bên dưới trỏ đúng thư mục dự án (thư mục chứa index.html).
# 2. File NÀY phải được lưu bằng UTF-8 có BOM nếu $root chứa ký tự Unicode (tiếng Việt có dấu),
#    nếu không PowerShell 5.1 sẽ đọc sai đường dẫn và mọi request trả về 404 dù file có tồn tại.
#    Nếu bạn copy nội dung này sang file mới, hãy ghi bằng:
#      [System.IO.File]::WriteAllText($path, $content, [System.Text.Encoding]::UTF8)
# 3. Chạy nền bằng Start-Process để không block terminal, ví dụ:
#      $script = "duong-dan-toi\serve.ps1"
#      $argStr = "-NoProfile -ExecutionPolicy Bypass -File `"$script`""
#      Start-Process powershell -ArgumentList $argStr -WindowStyle Hidden
# 4. Kiểm tra server đã chạy: netstat -ano | Select-String ":8791"
# 5. Trỏ preview_start vào cấu hình launch.json có "url": "http://localhost:8791"
#    (tool preview không hiểu localhost URL có path/query, chỉ origin thuần).

$root = "D:\OneDrive\1 2026\Tạo web bằng AI\Web AI mirka"   # <-- SỬA ĐƯỜNG DẪN NÀY
$port = 8791

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()
Write-Host "Serving $root on http://localhost:$port/"

$mime = @{
  ".html"="text/html"; ".css"="text/css"; ".js"="application/javascript";
  ".svg"="image/svg+xml"; ".png"="image/png"; ".jpg"="image/jpeg"; ".jpeg"="image/jpeg"
}

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  $path = $ctx.Request.Url.LocalPath
  if ($path -eq "/") { $path = "/index.html" }

  # URL sản phẩm SEO-friendly /mirka-{slug} (không có file thật trùng tên) ->
  # phục vụ nội dung product.html, giữ nguyên URL hiển thị trên trình duyệt.
  # product-detail.js tự đọc model từ location.pathname để render đúng sản phẩm.
  if ($path -match '^/mirka-[a-z0-9-]+/?$') {
    $path = "/product.html"
  }

  $file = Join-Path $root ($path.TrimStart("/"))

  if (Test-Path $file -PathType Leaf) {
    $ext = [System.IO.Path]::GetExtension($file)
    $ctype = $mime[$ext]
    if (-not $ctype) { $ctype = "application/octet-stream" }
    $bytes = [System.IO.File]::ReadAllBytes($file)
    $ctx.Response.ContentType = $ctype
    $ctx.Response.ContentLength64 = $bytes.Length
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
  }
  $ctx.Response.OutputStream.Close()
}

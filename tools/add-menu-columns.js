// Thêm 2 cột vào mega-menu "Sản phẩm" trên các trang HTML tĩnh:
//   - "Sản phẩm mới": link thẳng tới các model mới
//   - "Phụ kiện": nhóm Phụ kiện
// Chạy một lần: node tools/add-menu-columns.js   (bỏ qua file đã có cột này)
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const NEW_PRODUCTS = [
  ['deros-ii-650', 'DEROS II 650 EU'],
  ['polaros-rp600', 'POLAROS RP 600 EU'],
  ['dexos-1217', 'DEXOS 1217 M AFC'],
  ['abranet-ace-hd-150', 'Abranet Ace HD Ø 150'],
  ['fbs-b-10x330', 'FBS-B máy chà băng pin'],
];

function block(prefix) {
  const sp = prefix + 'san-pham.html';
  const news = NEW_PRODUCTS.map(([s, n]) => `              <a href="${prefix}mirka-${s}">${n}</a>`).join('\n');
  return `
            <div class="mega-col">
              <h4><a href="${sp}">Sản phẩm mới</a></h4>
${news}
            </div>
            <div class="mega-col">
              <h4><a href="${sp}?cat=phukien">Phụ kiện</a></h4>
              <a href="${sp}?cat=phukien&amp;sub=de-lot">Đế lót (Backing Pad)</a>
              <a href="${sp}?cat=phukien&amp;sub=interface-lo">Interface có lỗ hút bụi</a>
              <a href="${sp}?cat=phukien&amp;sub=pad-saver">Miếng bảo vệ đế</a>
              <a href="${sp}?cat=phukien&amp;sub=vacuum-block">Đĩa chặn hút</a>
            </div>`;
}

let done = 0;
for (const f of fs.readdirSync(ROOT).filter((x) => x.endsWith('.html'))) {
  const p = path.join(ROOT, f);
  let t = fs.readFileSync(p, 'utf8');
  if (t.includes('?cat=phukien">Phụ kiện</a></h4>')) { console.log('đã có  ', f); continue; }
  // Cột cuối của mega-menu là "Đánh bóng": chèn ngay sau nó.
  const re = /(Hoá chất đánh bóng<\/a>\r?\n\s*<\/div>)(\r?\n\s*<\/div>\r?\n\s*<\/div>)/;
  if (!re.test(t)) { console.log('KHÔNG KHỚP', f); continue; }
  const prefix = /href="\/san-pham\.html/.test(t) ? '/' : '';
  const nl = t.includes('\r\n') ? '\r\n' : '\n';
  const b = block(prefix).replace(/\n/g, nl);
  t = t.replace(re, (m, a, c) => a + b + c);
  fs.writeFileSync(p, t, 'utf8');
  console.log('OK     ', f, prefix ? '(đường dẫn tuyệt đối)' : '');
  done++;
}
console.log('Đã sửa', done, 'file');

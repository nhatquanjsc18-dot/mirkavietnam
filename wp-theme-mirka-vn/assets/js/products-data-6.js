// Danh mục mới: Robot & Tự động hóa (Robotics and Automation)
// Nguồn: https://www.mirka.com/en/products/robotics-and-automation/ — 43 sản phẩm trên trang nguồn.
// 42 sản phẩm được thêm mới ở đây; 1 sản phẩm (Backing Pad for AIROS Ø150mm)
// đã tồn tại sẵn trong danh mục "Phụ kiện & Hút bụi" (products-data-5.js) nên
// không nhân đôi — vẫn xem là đã phủ đủ 43/43 trên toàn catalogue.
// Đặt cạnh "Máy chà nhám khí nén" trong điều hướng.

(function () {

  function robotProduct(opts) {
    return {
      slug: opts.slug,
      name: opts.name,
      seoKeyword: opts.name,
      category: "robot", categoryLabel: "Robot & Tự động hóa",
      subCat: opts.subCat, subCatLabel: opts.subCatLabel,
      img: opts.img,
      shortDesc: opts.shortDesc,
      lead: opts.lead,
      features: opts.features,
      specs: opts.specs,
      applications: opts.applications,
      why: opts.why
    };
  }

  var DAU = "dau-robot", DAU_L = "Đầu chà nhám & đánh bóng robot";
  var KITUR = "kit-ur", KITUR_L = "Bộ lắp đặt cho robot UR";
  var KITABB = "kit-abb", KITABB_L = "Bộ lắp đặt cho robot ABB";
  var DIEUKHIEN = "tu-dieu-khien", DIEUKHIEN_L = "Tủ điều khiển & giao thức truyền thông";
  var AUTOCHANGER = "autochanger", AUTOCHANGER_L = "Bộ đổi đầu mài tự động (AutoChanger)";
  var TOOLCHANGER = "toolchanger", TOOLCHANGER_L = "Bộ đổi dụng cụ (ToolChanger)";
  var PHUKIEN = "phukien-robot", PHUKIEN_L = "Phụ kiện robot khác";

  var list = [

    // ===== Đầu chà nhám & đánh bóng robot (8) =====
    robotProduct({
      slug: "airos-550s", name: "Mirka® AIROS 550S Ø 125 mm",
      subCat: DAU, subCatLabel: DAU_L,
      img: "https://img.mirka.com/medias/AIROS-550CV.jpg?context=bWFzdGVyfGltYWdlc3wyMTUwNzF8aW1hZ2UvanBlZ3xhREZoTDJnMk9TODVNRGMwT0Rnek16TXdNRGM0TDBGSlVrOVRYelUxTUVOV0xtcHdad3xjNTlhN2RjNDA2Mjc1NWUzMTI0ZGEwNzE1OGJhNDdjZjAwN2I3OTAxNmZkOGE0OGQwNDE4YTY5MWFkMDM4YTcx&tr=w-960",
      shortDesc: "Đầu chà nhám ly tâm tự động cho robot công nghiệp, pad Ø125mm, hút bụi trung tâm.",
      lead: "Mirka® AIROS 550S là đầu chà nhám ly tâm (random orbital) tích hợp sẵn cho cánh tay robot công nghiệp, pad Ø125mm kết nối hệ thống hút bụi trung tâm — chuẩn hóa chất lượng chà nhám trên dây chuyền tự động.",
      features: [
        ["🤖","Tích hợp trực tiếp lên cánh tay robot công nghiệp"],
        ["📏","Pad Ø125mm, phù hợp diện tích thi công vừa và lớn"],
        ["💨","Kết nối hút bụi trung tâm, môi trường làm việc sạch"],
        ["🔁","Chuyển động ly tâm cho bề mặt hoàn thiện đồng đều"],
        ["⚙️","Tương thích các kit lắp đặt UR/ABB có sẵn"]
      ],
      specs: {"Đường kính đầu mài":"125 mm","Loại chuyển động":"Ly tâm (Random Orbital)","Hệ thống hút bụi":"Trung tâm (Central vacuum)","Ứng dụng":"Tự động hóa công nghiệp"},
      applications: ["Dây chuyền chà nhám tự động trong nhà máy ô tô, gỗ, kim loại","Quy trình cần độ lặp lại cao, giảm phụ thuộc tay nghề thợ","Tích hợp cùng robot UR hoặc ABB qua kit lắp đặt tương ứng"],
      why: "AIROS 550S là lựa chọn tiêu chuẩn khi cần một đầu chà nhám robot đa dụng, cân bằng giữa diện tích pad và khả năng kiểm soát bụi cho dây chuyền sản xuất liên tục."
    }),
    robotProduct({
      slug: "airos-350s", name: "Mirka® AIROS 350S Ø 77 mm",
      subCat: DAU, subCatLabel: DAU_L,
      img: "https://img.mirka.com/medias/MIA3502012-001.jpg?context=bWFzdGVyfGltYWdlc3w1NjE0NTB8aW1hZ2UvanBlZ3xhR1V5TDJoa015OHhNalE1T1RjMk16UXlPVFF3Tmk5TlNVRXpOVEF5TURFeVh6QXdNUzVxY0djfDI4YTZkMDQ0NzRmOTE3ODA5MjIzZGRlN2EwNzdmNjNiYjk0YWI0NmUyMDc0Njk1ZjFlMDAxYTVmNTU2MzU5Njc&tr=w-960",
      shortDesc: "Đầu chà nhám ly tâm tự động cho robot, pad Ø77mm nhỏ gọn, hút bụi trung tâm.",
      lead: "Mirka® AIROS 350S mang thiết kế nhỏ gọn hơn với pad Ø77mm, phù hợp các chi tiết vừa và nhỏ trên dây chuyền robot cần độ linh hoạt cao khi tiếp cận góc cạnh.",
      features: [
        ["🤖","Tích hợp trực tiếp lên cánh tay robot công nghiệp"],
        ["📏","Pad Ø77mm nhỏ gọn, linh hoạt khi tiếp cận chi tiết"],
        ["💨","Kết nối hút bụi trung tâm"],
        ["🔁","Chuyển động ly tâm, hạn chế vệt xoáy"],
        ["⚙️","Có kit lắp đặt UR và ABB riêng"]
      ],
      specs: {"Đường kính đầu mài":"77 mm","Loại chuyển động":"Ly tâm (Random Orbital)","Hệ thống hút bụi":"Trung tâm (Central vacuum)","Ứng dụng":"Tự động hóa công nghiệp"},
      applications: ["Chà nhám chi tiết nhỏ, đường cong phức tạp","Dây chuyền cần thao tác chính xác ở không gian hẹp","Tích hợp cùng robot UR hoặc ABB"],
      why: "Khi chi tiết gia công nhỏ và nhiều góc cạnh, AIROS 350S cho khả năng tiếp cận tốt hơn so với các đầu pad lớn mà vẫn giữ nguyên độ ổn định của chuyển động ly tâm."
    }),
    robotProduct({
      slug: "airos-353s", name: "Mirka® AIROS 353S 81 mm x 133 mm",
      subCat: DAU, subCatLabel: DAU_L,
      img: "https://img.mirka.com/medias/Mirka-Aios-353CV.jpg?context=bWFzdGVyfGltYWdlc3wxODYwNzh8aW1hZ2UvanBlZ3xhRFUxTDJnM055ODVNRGMwT0Rnek56ZzRPRE13TDAxcGNtdGhYMEZwYjNOZk16VXpRMVl1YW5CbnxmMjViYWE4YTg2NjVjMmY4YmEyMTdlYjMwNTMxZjQ4NDM0ODhlYjUzMmY1OGMzMjAwZmI0ZDNmMTM2N2YzZDU5&tr=w-960",
      shortDesc: "Đầu chà nhám robot pad chữ nhật 81x133mm, chuyên chà góc cạnh và bề mặt phẳng lớn.",
      lead: "Mirka® AIROS 353S dùng pad hình chữ nhật 81x133mm thay vì pad tròn, tối ưu cho việc chà nhám góc cạnh và các bề mặt phẳng diện tích lớn mà đầu tròn khó xử lý đều.",
      features: [
        ["📐","Pad chữ nhật 81x133mm, phủ diện tích rộng mỗi lượt"],
        ["🤖","Tự động hóa hoàn toàn trên cánh tay robot"],
        ["🔲","Tối ưu cho góc cạnh, mép chi tiết"],
        ["💨","Tương thích hệ thống hút bụi trung tâm"],
        ["⚙️","Có kit lắp đặt UR và ABB riêng"]
      ],
      specs: {"Kích thước đầu mài":"81 x 133 mm","Hình dạng pad":"Chữ nhật","Loại chuyển động":"Tự động (Automated Industrial Orbital)","Ứng dụng":"Tự động hóa công nghiệp"},
      applications: ["Chà nhám góc cạnh sản phẩm gỗ, nội thất","Bề mặt phẳng diện tích lớn cần năng suất cao","Kết hợp robot UR/ABB trong dây chuyền sản xuất"],
      why: "Pad chữ nhật giúp AIROS 353S xử lý các cạnh thẳng và góc vuông hiệu quả hơn hẳn pad tròn thông thường — đây là lựa chọn phổ biến cho ngành sản xuất đồ gỗ tự động hóa."
    }),
    robotProduct({
      slug: "airos-150s", name: "Mirka® AIROS 150S Ø 32mm",
      subCat: DAU, subCatLabel: DAU_L,
      img: "https://img.mirka.com/medias/Mirka-Airos-150-NV.jpg?context=bWFzdGVyfGltYWdlc3w5OTQzOHxpbWFnZS9qcGVnfGFEQTNMMmhqTmk4NU1EYzBPRGcxTWprMk1UVTRMMDFwY210aFgwRnBjbTl6WHpFMU1GOU9WaTVxY0djfGNlYzYyNDU4M2FhMWFjYTNlYWI0ODQ2MDY3Yzc3YTllYjkxYmQ4ZmJlY2Q0YWQxZTkwNTAxNDA1MjlmOWZlNWQ&tr=w-960",
      shortDesc: "Đầu chà nhám robot siêu nhỏ Ø32mm, không hút bụi, cho chi tiết mini.",
      lead: "Mirka® AIROS 150S là đầu chà nhám robot cỡ nhỏ nhất trong dòng AIROS, pad Ø32mm không tích hợp hút bụi, dành cho các thao tác chi tiết đòi hỏi độ chính xác cao.",
      features: [
        ["🔬","Pad Ø32mm — nhỏ gọn cho chi tiết mini"],
        ["🤖","Tích hợp trực tiếp lên cánh tay robot"],
        ["⚡","Thiết kế non-vacuum, gọn nhẹ hơn"],
        ["🎯","Phù hợp thao tác đòi hỏi độ chính xác cao"],
        ["⚙️","Có kit lắp đặt UR và ABB riêng"]
      ],
      specs: {"Đường kính đầu mài":"32 mm","Loại chuyển động":"Ly tâm (Random Orbital)","Hệ thống hút bụi":"Không (Non-vacuum)","Ứng dụng":"Tự động hóa công nghiệp"},
      applications: ["Sửa lỗi cục bộ (spot repair) trên dây chuyền tự động","Chi tiết nhỏ, không gian thao tác hạn chế","Công đoạn hoàn thiện tinh trước sơn/đánh bóng"],
      why: "Với kích thước nhỏ gọn nhất dòng AIROS, 150S phù hợp khi robot cần luồn vào các vị trí hẹp mà đầu pad lớn không tiếp cận được."
    }),
    robotProduct({
      slug: "airos-130s", name: "Mirka® AIROS 130S Ø 32 mm",
      subCat: DAU, subCatLabel: DAU_L,
      img: "https://img.mirka.com/medias/Mirka-Aios-130NV.jpg?context=bWFzdGVyfGltYWdlc3wxMDY3ODF8aW1hZ2UvanBlZ3xhREJoTDJoa01DODVNRGMwT0RnME1qZ3dNelV3TDAxcGNtdGhYMEZwYjNOZk1UTXdUbFl1YW5CbnwxZDQ1Njc0ZWEzNGI0YzhmZWI0OTZkYTgzNzNkOWU3YTk2NThiN2YxOWYyMjI0YzQyM2IyMWExZWNhN2YzMTIw&tr=w-960",
      shortDesc: "Đầu chà nhám robot Ø32mm cho không gian hẹp, hoàn thiện tinh và spot repair.",
      lead: "Mirka® AIROS 130S được thiết kế riêng cho không gian làm việc hạn chế, chuyên các tác vụ hoàn thiện tinh (finessing) và sửa lỗi cục bộ (spot repair) trên dây chuyền robot.",
      features: [
        ["📦","Kích thước nhỏ gọn, luồn vào không gian hẹp"],
        ["🤖","Tự động hóa hoàn toàn trên robot công nghiệp"],
        ["🎯","Chuyên cho spot repair và hoàn thiện tinh"],
        ["⚙️","Có kit lắp đặt UR và ABB riêng"],
        ["🔁","Chuyển động ổn định, ít vệt xoáy"]
      ],
      specs: {"Đường kính đầu mài":"32 mm","Loại chuyển động":"Tự động (Automated Industrial Orbital)","Ứng dụng chính":"Confined spaces, finessing, spot repair"},
      applications: ["Sửa lỗi cục bộ trên bề mặt sơn, composite","Không gian làm việc chật hẹp trong khoang máy, góc khuất","Công đoạn hoàn thiện tinh trước bàn giao"],
      why: "AIROS 130S bù đắp cho những vị trí mà các đầu chà nhám robot cỡ lớn không thể tiếp cận, giữ cho toàn bộ quy trình vẫn tự động hóa 100% thay vì phải can thiệp thủ công."
    }),
    robotProduct({
      slug: "airos-312p", name: "Mirka® AIROS 312P Ø 77 mm",
      subCat: DAU, subCatLabel: DAU_L,
      img: "https://img.mirka.com/medias/MIA3121011-001.jpg?context=bWFzdGVyfGltYWdlc3w1MDUwOTB8aW1hZ2UvanBlZ3xhR000TDJnNE9DOHhNalE1T1RVNE9ETTRNamMxTUM5TlNVRXpNVEl4TURFeFh6QXdNUzVxY0djfDRiYTQzZmEzNTVlYjc1MGM4YzRiMjYyNjExYmE4OGRhMmU2ZjljZmFmNWM5YTY1ZGQ3YjhhZGJmZTAyMWJjNTE&tr=w-960",
      shortDesc: "Đầu đánh bóng tự động cho robot công nghiệp, pad Ø77mm.",
      lead: "Mirka® AIROS 312P là đầu đánh bóng ly tâm tự động (Automated Industrial Random Orbital Polisher) tích hợp cho robot, pad Ø77mm, dành cho công đoạn đánh bóng cuối trên dây chuyền tự động.",
      features: [
        ["✨","Chuyên đánh bóng tự động trên robot công nghiệp"],
        ["📏","Pad Ø77mm phù hợp diện tích đánh bóng vừa"],
        ["🤖","Tích hợp trực tiếp cánh tay robot"],
        ["🔁","Chuyển động ly tâm cho độ bóng đồng đều"],
        ["⚙️","Có kit lắp đặt UR và ABB riêng"]
      ],
      specs: {"Đường kính đầu mài":"77 mm","Loại chuyển động":"Ly tâm (Random Orbital)","Chức năng":"Đánh bóng (Polisher)","Ứng dụng":"Tự động hóa công nghiệp"},
      applications: ["Đánh bóng lớp sơn hoàn thiện trên dây chuyền ô tô","Đánh bóng bề mặt composite, gelcoat tự động","Thay thế thao tác đánh bóng tay ở công đoạn cuối"],
      why: "AIROS 312P giúp chuẩn hóa chất lượng đánh bóng — vốn phụ thuộc nhiều vào tay nghề thợ khi làm thủ công — thành một quy trình lặp lại chính xác trên robot."
    }),
    robotProduct({
      slug: "airos-300p", name: "Mirka® AIROS 300P Ø 77 mm",
      subCat: DAU, subCatLabel: DAU_L,
      img: "https://img.mirka.com/medias/MIA3001011-001.jpg?context=bWFzdGVyfGltYWdlc3w1NDAzMjB8aW1hZ2UvanBlZ3xhR0k1TDJobU5DOHhNakl4Tmprd01qTTROVFk1TkM5TlNVRXpNREF4TURFeFh6QXdNUzVxY0djfDU4NzgwZGU3OTI1OGQ0YjhiNmIyNDFhMDI5ZDhiOTkyN2I2YmU1YzQwM2RhNTZlN2RlYjBmYWQ1ZDE3ZjkxOTI&tr=w-960",
      shortDesc: "Đầu đánh bóng tự động cho robot, pad Ø77mm, phiên bản compact trong dòng AIROS Polisher.",
      lead: "Mirka® AIROS 300P là phiên bản đầu đánh bóng tự động compact trong dòng AIROS, pad Ø77mm, phù hợp các dây chuyền cần đầu đánh bóng robot gọn nhẹ hơn.",
      features: [
        ["✨","Đầu đánh bóng tự động chuyên dụng cho robot"],
        ["📏","Pad Ø77mm"],
        ["🤖","Tích hợp trực tiếp cánh tay robot"],
        ["⚙️","Có kit lắp đặt UR và ABB riêng"],
        ["🔁","Chuyển động ly tâm ổn định"]
      ],
      specs: {"Đường kính đầu mài":"77 mm","Loại chuyển động":"Ly tâm (Random Orbital)","Chức năng":"Đánh bóng (Polisher)","Ứng dụng":"Tự động hóa công nghiệp"},
      applications: ["Đánh bóng tự động trên dây chuyền sản xuất","Công đoạn hoàn thiện cuối trước xuất xưởng","Kết hợp robot UR/ABB tùy hệ thống có sẵn"],
      why: "AIROS 300P là lựa chọn thay thế linh hoạt cho 312P khi hệ thống robot hoặc bố cục dây chuyền yêu cầu một đầu đánh bóng có thông số lắp đặt khác."
    }),
    robotProduct({
      slug: "airos-650s", name: "Mirka® AIROS 650S Ø 150 mm",
      subCat: DAU, subCatLabel: DAU_L,
      img: "https://img.mirka.com/medias/Airos-650CV.jpg?context=bWFzdGVyfGltYWdlc3wyNDI4Mzd8aW1hZ2UvanBlZ3xhREptTDJoalpDODVNRGMwT0RnMU1EWTJOemd5TDBGcGNtOXpYelkxTUVOV0xtcHdad3w4NGU2NTEzOGZkODkyM2M2MDU4OGE4ZDM5NWY0ZTdkODBkZjQ3NzI4ZTU1NWZkNTViZjMyYjA1MjM3N2FmOWU5&tr=w-960",
      shortDesc: "Đầu chà nhám robot lớn nhất dòng AIROS, pad Ø150mm cho diện tích rộng.",
      lead: "Mirka® AIROS 650S là đầu chà nhám ly tâm lớn nhất trong dòng AIROS, pad Ø150mm, tối ưu năng suất khi chà nhám các bề mặt diện tích lớn trên dây chuyền tự động.",
      features: [
        ["📏","Pad Ø150mm — lớn nhất dòng AIROS"],
        ["🚀","Năng suất cao trên diện tích rộng"],
        ["🤖","Tích hợp trực tiếp cánh tay robot"],
        ["💨","Tương thích hệ thống hút bụi trung tâm"],
        ["⚙️","Có kit lắp đặt UR và ABB riêng"]
      ],
      specs: {"Đường kính đầu mài":"150 mm","Loại chuyển động":"Ly tâm (Random Orbital)","Hệ thống hút bụi":"Trung tâm (Central vacuum)","Ứng dụng":"Tự động hóa công nghiệp"},
      applications: ["Chà nhám bề mặt lớn: thân xe, vỏ tàu, tấm composite","Dây chuyền cần rút ngắn thời gian chu kỳ (cycle time)","Xả nhám thô diện rộng trước các bước hoàn thiện tinh"],
      why: "Khi diện tích bề mặt cần xử lý lớn, AIROS 650S giảm đáng kể số lượt di chuyển của robot so với các đầu pad nhỏ hơn, rút ngắn thời gian chu kỳ sản xuất."
    }),

    // ===== Bộ lắp đặt cho robot UR (8) =====
    robotProduct({
      slug: "airos-130s-ur-kit", name: "Mirka® AIROS 130S 32mm UR kit EU",
      subCat: KITUR, subCatLabel: KITUR_L,
      img: "https://img.mirka.com/medias/KITAIOS32-AIOS130NV.jpg?context=bWFzdGVyfGltYWdlc3wxMjQxMTB8aW1hZ2UvanBlZ3xhRGd6TDJobVpDODVNRFl6TmpFeU9UY3pNRGcyTDB0SlZFRkpUMU16TWw5QlNVOVRNVE13VGxZdWFuQm58MzFmMmNmMThiYTNkYWZhODk3MjdkZjMyODkxMTRjZmMxYTlmZmI5YjlkMzM3OWIwNTIxN2Q2MzZmODlkNDQ4Ng&tr=w-960",
      shortDesc: "Bộ kit trọn gói lắp đầu chà nhám AIROS 130S lên cánh tay robot UR (Universal Robots).",
      lead: "Bộ kit đầy đủ để lắp đặt đầu chà nhám Mirka® AIROS 130S lên robot cộng tác (cobot) dòng UR — gồm toàn bộ phần cứng kết nối cần thiết, sẵn sàng tích hợp vào hệ thống UR có sẵn.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🤝","Tương thích trực tiếp robot cộng tác UR"],
        ["⚡","Rút ngắn thời gian tích hợp so với lắp rời từng phần"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 130S Ø32mm","Tương thích robot":"Universal Robots (UR)","Loại":"Complete kit"},
      applications: ["Nhà máy đã sở hữu cobot UR muốn bổ sung trạm chà nhám tự động","Tích hợp AIROS 130S nhanh chóng, giảm rủi ro lắp sai"],
      why: "Mua trọn kit theo đúng model robot giúp tránh sai lệch phần cứng kết nối — vấn đề thường gặp khi tự tìm mua rời từng chi tiết lắp đặt."
    }),
    robotProduct({
      slug: "airos-353s-ur-kit", name: "Mirka® AIROS 353S 81x133mm UR kit EU",
      subCat: KITUR, subCatLabel: KITUR_L,
      img: "https://img.mirka.com/medias/KITAIOS81X133-AIOS353CV.jpg?context=bWFzdGVyfGltYWdlc3wxNDI2ODZ8aW1hZ2UvanBlZ3xhR0prTDJobVpTODVNRFl6TmpFeU9EUXlNREUwTDB0SlZFRkpUMU00TVZneE16TmZRVWxQVXpNMU0wTldMbXB3Wnd8MzZiNDRiYTllZDljZjgyN2YyM2ZkNzVjYzQ2MTRmYWQ1MGRlMTM3NjdmNmIwMGNjZmZhODNiOTMxYzEzYWMwYg&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 353S (pad chữ nhật) lên robot UR.",
      lead: "Bộ kit trọn gói giúp lắp đặt đầu chà nhám pad chữ nhật Mirka® AIROS 353S lên cobot UR, phù hợp dây chuyền chà nhám góc cạnh tự động hóa.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🤝","Tương thích trực tiếp robot cộng tác UR"],
        ["🔲","Dành riêng cho đầu pad chữ nhật 353S"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 353S 81x133mm","Tương thích robot":"Universal Robots (UR)","Loại":"Complete kit"},
      applications: ["Tích hợp AIROS 353S vào cobot UR cho chà nhám góc cạnh","Dây chuyền sản xuất gỗ nội thất tự động hóa"],
      why: "Kit riêng cho từng model đầu chà nhám đảm bảo độ chính xác cơ khí khi lắp lên robot, tránh rung lắc ảnh hưởng chất lượng bề mặt."
    }),
    robotProduct({
      slug: "airos-550s-ur-kit", name: "Mirka® AIROS 550S 125 mm UR kit EU",
      subCat: KITUR, subCatLabel: KITUR_L,
      img: "https://img.mirka.com/medias/KITAIROS125.jpg?context=bWFzdGVyfGltYWdlc3wxNTI3MTM5fGltYWdlL2pwZWd8YURNeEwyZzFNeTg1TURZMU9UTTRNemcyT1RjMEwwdEpWRUZKVWs5VE1USTFMbXB3Wnd8MDlmNTFiMzc5OTFjYzZhZDBiNTM4MzgxODE1YWNmYTJjOTc2OTE5Y2QwMjAzNmZlNjQzZTQ1NGU0NTA0MjA4Ng&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 550S Ø125mm lên robot UR.",
      lead: "Bộ kit trọn gói cho phép tích hợp đầu chà nhám AIROS 550S — model phổ biến nhất dòng AIROS — lên cobot UR, sẵn sàng vận hành ngay sau lắp đặt.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🤝","Tương thích trực tiếp robot cộng tác UR"],
        ["⭐","Dành cho model AIROS 550S phổ biến nhất"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 550S Ø125mm","Tương thích robot":"Universal Robots (UR)","Loại":"Complete kit"},
      applications: ["Trạm chà nhám tự động dùng cobot UR trong nhà máy vừa và nhỏ","Nâng cấp dây chuyền thủ công lên bán tự động"],
      why: "550S là model AIROS được dùng phổ biến nhất, nên kit UR đi kèm luôn là lựa chọn đầu tiên khi doanh nghiệp mới bắt đầu tự động hóa công đoạn chà nhám."
    }),
    robotProduct({
      slug: "airos-150s-ur-kit", name: "Mirka® AIROS 150S 32mm UR kit EU",
      subCat: KITUR, subCatLabel: KITUR_L,
      img: "https://img.mirka.com/medias/KITAIROS32-AIROS150NV.jpg?context=bWFzdGVyfGltYWdlc3wxMjQ2NDV8aW1hZ2UvanBlZ3xhR0pqTDJnNU5DODVNRFl6TmpFeE9ESTJNakEyTDB0SlZFRkpVazlUTXpKZlFVbFNUMU14TlRCT1ZpNXFjR2N8ZmQ1Nzg3ZjIwY2FmYzI4NmI1ZmFlZjI4ZjBlZmQxOWY1YTc2MjBlNjdlN2IxOTBmMzA3MzRjY2QwYzczMWVjOQ&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 150S Ø32mm lên robot UR.",
      lead: "Bộ kit trọn gói tích hợp đầu chà nhám cỡ nhỏ AIROS 150S lên cobot UR, phù hợp trạm robot xử lý chi tiết nhỏ và thao tác chính xác.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🤝","Tương thích trực tiếp robot cộng tác UR"],
        ["🔬","Dành riêng cho đầu mài mini 150S"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 150S Ø32mm","Tương thích robot":"Universal Robots (UR)","Loại":"Complete kit"},
      applications: ["Trạm robot UR xử lý chi tiết nhỏ, độ chính xác cao","Kết hợp cùng các trạm AIROS lớn hơn trong cùng dây chuyền"],
      why: "Khi dây chuyền cần cả xử lý thô lẫn chi tiết nhỏ, kit UR cho 150S giúp bổ sung trạm robot chuyên biệt mà không phải thay đổi cấu hình cobot hiện có."
    }),
    robotProduct({
      slug: "airos-312p-ur-kit", name: "Mirka® AIROS 312P 77mm UR kit EU",
      subCat: KITUR, subCatLabel: KITUR_L,
      img: "https://img.mirka.com/medias/KITAIROP77-AIROP312NV.jpg?context=bWFzdGVyfGltYWdlc3wxMzM0NTZ8aW1hZ2UvanBlZ3xhR1UyTDJnNU9DODVNRFl6TmpFeE9Ua3dNRFEyTDB0SlZFRkpVazlRTnpkZlFVbFNUMUF6TVRKT1ZpNXFjR2N8YzFiMGU4M2QzYzU3M2Q2ODRjNDJiZGNlYzEwZjc3MjU1ZmU2N2UwNmUwYzZlNTFmOWI2YWY4ZDEyMDVmY2NiZA&tr=w-960",
      shortDesc: "Bộ kit lắp đầu đánh bóng AIROS 312P lên robot UR.",
      lead: "Bộ kit trọn gói giúp tích hợp đầu đánh bóng tự động AIROS 312P lên cobot UR, phục vụ công đoạn đánh bóng cuối trong dây chuyền tự động hóa.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🤝","Tương thích trực tiếp robot cộng tác UR"],
        ["✨","Dành riêng cho đầu đánh bóng 312P"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 312P Ø77mm","Tương thích robot":"Universal Robots (UR)","Loại":"Complete kit"},
      applications: ["Trạm đánh bóng tự động cuối dây chuyền dùng cobot UR","Chuẩn hóa chất lượng đánh bóng, giảm phụ thuộc tay nghề"],
      why: "Đánh bóng thủ công cho kết quả không đồng đều giữa các ca làm việc — kit UR cho 312P giúp cố định quy trình thành một thao tác robot lặp lại chính xác."
    }),
    robotProduct({
      slug: "airos-350s-ur-kit", name: "Mirka® AIROS 350S 77 mm UR kit EU",
      subCat: KITUR, subCatLabel: KITUR_L,
      img: "https://img.mirka.com/medias/KITAIROS77-001.jpg?context=bWFzdGVyfGltYWdlc3wzNjg2MzR8aW1hZ2UvanBlZ3xhRE0xTDJobE1pOHhNalV4TlRrek1EQTNPVEkyTWk5TFNWUkJTVkpQVXpjM1h6QXdNUzVxY0djfDlkYzAxOGRmYjQwMjRhNDljN2Q2MDM5YmI3OWJkNjcyZGU4ZDJiMzEyOTA1M2ZlMzYzYTMyMzQzMTRkYTBiZjE&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 350S Ø77mm lên robot UR.",
      lead: "Bộ kit trọn gói tích hợp đầu chà nhám AIROS 350S — pad Ø77mm nhỏ gọn — lên cobot UR, cho dây chuyền cần linh hoạt tiếp cận chi tiết.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🤝","Tương thích trực tiếp robot cộng tác UR"],
        ["📏","Dành riêng cho đầu mài Ø77mm"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 350S Ø77mm","Tương thích robot":"Universal Robots (UR)","Loại":"Complete kit"},
      applications: ["Trạm robot UR xử lý chi tiết vừa, cần tiếp cận góc cạnh","Kết hợp linh hoạt trong dây chuyền đa công đoạn"],
      why: "Kit đúng model giúp việc lắp đặt AIROS 350S lên cobot UR diễn ra nhanh, không cần gia công thêm phần cứng kết nối."
    }),
    robotProduct({
      slug: "airos-650s-ur-kit", name: "Mirka® AIROS 650S 150 mm UR kit EU",
      subCat: KITUR, subCatLabel: KITUR_L,
      img: "https://img.mirka.com/medias/KITAIROS150.jpg?context=bWFzdGVyfGltYWdlc3wxMjIzOTZ8aW1hZ2UvanBlZ3xhREZtTDJobFpTODVNRFl6TmpFeU16Z3pNall5TDB0SlZFRkpVazlUTVRVd0xtcHdad3xhYzAwMzJlODlkZGY2NmUxZmJhMDUxOWJhNWQ0NTJlNTMyYmYyYjc5MGIyOTI2NDI0ODg0YTQ4ZTM3M2E1OTBi&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 650S Ø150mm lên robot UR.",
      lead: "Bộ kit trọn gói tích hợp đầu chà nhám lớn nhất dòng AIROS — 650S pad Ø150mm — lên cobot UR, tối ưu cho dây chuyền cần năng suất chà nhám cao.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🤝","Tương thích trực tiếp robot cộng tác UR"],
        ["🚀","Dành riêng cho đầu mài lớn nhất 650S"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 650S Ø150mm","Tương thích robot":"Universal Robots (UR)","Loại":"Complete kit"},
      applications: ["Trạm robot UR chà nhám diện tích lớn, năng suất cao","Xả nhám thô tự động trước các bước hoàn thiện"],
      why: "Khi cần xử lý bề mặt lớn với cobot UR, kit cho 650S giúp tận dụng tối đa năng suất của đầu mài Ø150mm mà không cần lắp đặt thủ công phức tạp."
    }),
    robotProduct({
      slug: "airos-300p-ur-kit", name: "Mirka® AIROS 300P 77 mm UR kit EU",
      subCat: KITUR, subCatLabel: KITUR_L,
      img: "https://img.mirka.com/assets/AC5MPZCA/at/w879gc7h8qgqfc9mbh93fnb/KITAIRP77_AIRP300_1.jpg",
      shortDesc: "Bộ kit lắp đầu đánh bóng AIROS 300P lên robot UR.",
      lead: "Bộ kit trọn gói giúp tích hợp đầu đánh bóng compact AIROS 300P lên cobot UR, phù hợp các dây chuyền đánh bóng tự động quy mô vừa.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🤝","Tương thích trực tiếp robot cộng tác UR"],
        ["✨","Dành riêng cho đầu đánh bóng 300P"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 300P Ø77mm","Tương thích robot":"Universal Robots (UR)","Loại":"Complete kit"},
      applications: ["Trạm đánh bóng tự động dùng cobot UR","Bổ sung công đoạn đánh bóng vào dây chuyền có sẵn"],
      why: "Kit UR cho 300P là lựa chọn thay thế khi hệ thống đã có sẵn cobot UR nhưng cần một đầu đánh bóng với thông số lắp đặt khác 312P."
    }),

    // ===== Bộ lắp đặt cho robot ABB (8) =====
    robotProduct({
      slug: "airos-650s-abb-kit", name: "Mirka® AIROS 650S 150mm ABB kit EU",
      subCat: KITABB, subCatLabel: KITABB_L,
      img: "https://img.mirka.com/medias/KITAIROS650ABB.jpg?context=bWFzdGVyfGltYWdlc3w0NzE5NzF8aW1hZ2UvanBlZ3xhREEzTDJoaU1TOHhNalV3TXpZNU1ERXhOekUxTUM5TFNWUkJTVkpQVXpZMU1FRkNRaTVxY0djfDlhNDc0MjY4NjhkMTkzMzdmNTVkMDBmMjg4MDk1NWI1OTRmYWQ5MzQyNGI5YTY2OTEwMWJhYmFmMjQ3YjNiYjA&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 650S Ø150mm lên robot công nghiệp ABB.",
      lead: "Bộ kit trọn gói tích hợp đầu chà nhám AIROS 650S lên robot công nghiệp ABB, dành cho các dây chuyền sản xuất quy mô lớn sử dụng nền tảng robot ABB.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🏭","Tương thích trực tiếp robot công nghiệp ABB"],
        ["🚀","Dành riêng cho đầu mài lớn nhất 650S"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 650S Ø150mm","Tương thích robot":"ABB","Loại":"Complete kit"},
      applications: ["Dây chuyền sản xuất công nghiệp quy mô lớn dùng robot ABB","Chà nhám bề mặt diện tích rộng với năng suất cao"],
      why: "Robot ABB phổ biến trong các nhà máy quy mô lớn — kit này giúp tích hợp AIROS 650S đúng chuẩn cơ khí và điện của nền tảng ABB."
    }),
    robotProduct({
      slug: "airos-312p-abb-kit", name: "Mirka® AIROS 312P 77mm ABB kit EU",
      subCat: KITABB, subCatLabel: KITABB_L,
      img: "https://img.mirka.com/medias/KITAIROS312ABB.jpg?context=bWFzdGVyfGltYWdlc3w0MDMxMTF8aW1hZ2UvanBlZ3xhRGMzTDJneVpDOHhNalV3TXpZNU1qUTNOalEwTmk5TFNWUkJTVkpQVXpNeE1rRkNRaTVxY0djfGFlMGZhMWRjNzhkNWMzZjMwMDhhOTk3MjhkNzlkZmVlYTY5YzE2MmY1OWM5MzE4NTYzYWYzMWUyNTM5MjEzOTI&tr=w-960",
      shortDesc: "Bộ kit lắp đầu đánh bóng AIROS 312P lên robot công nghiệp ABB.",
      lead: "Bộ kit trọn gói giúp tích hợp đầu đánh bóng tự động AIROS 312P lên robot ABB, phục vụ công đoạn đánh bóng cuối trong nhà máy quy mô công nghiệp.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🏭","Tương thích trực tiếp robot công nghiệp ABB"],
        ["✨","Dành riêng cho đầu đánh bóng 312P"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 312P Ø77mm","Tương thích robot":"ABB","Loại":"Complete kit"},
      applications: ["Trạm đánh bóng công nghiệp dùng robot ABB","Dây chuyền sản xuất ô tô, đồ gia dụng quy mô lớn"],
      why: "Kit ABB cho 312P phù hợp môi trường sản xuất công nghiệp nặng, nơi độ bền và độ chính xác lặp lại của robot ABB được ưu tiên hàng đầu."
    }),
    robotProduct({
      slug: "airos-300p-abb-kit", name: "Mirka® AIROS 300P 77mm ABB kit EU",
      subCat: KITABB, subCatLabel: KITABB_L,
      img: "https://img.mirka.com/medias/KITAIROS300ABB.jpg?context=bWFzdGVyfGltYWdlc3w0NDMyMTZ8aW1hZ2UvanBlZ3xhREk1TDJnNE9TOHhNalV3TXpZNU16QXpNelV3TWk5TFNWUkJTVkpQVXpNd01FRkNRaTVxY0djfDczZWYyZTg2Zjk2NmQyODdlMWI4NzY0ZGU3YjAyNDc4YjVlNzEyZmRiZjdhMjZjOWMwNmVmZmU5Yzc1YTZkZTk&tr=w-960",
      shortDesc: "Bộ kit lắp đầu đánh bóng AIROS 300P lên robot công nghiệp ABB.",
      lead: "Bộ kit trọn gói tích hợp đầu đánh bóng compact AIROS 300P lên robot ABB, phù hợp nhà máy đã đầu tư nền tảng robot ABB cho công đoạn hoàn thiện.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🏭","Tương thích trực tiếp robot công nghiệp ABB"],
        ["✨","Dành riêng cho đầu đánh bóng 300P"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 300P Ø77mm","Tương thích robot":"ABB","Loại":"Complete kit"},
      applications: ["Trạm đánh bóng công nghiệp dùng robot ABB","Bổ sung công đoạn đánh bóng tự động vào dây chuyền có sẵn"],
      why: "300P ABB kit là lựa chọn thay thế khi cấu hình lắp đặt của 312P không phù hợp với bố trí robot ABB hiện có tại nhà máy."
    }),
    robotProduct({
      slug: "airos-130s-abb-kit", name: "Mirka® AIROS 130S 32mm ABB kit EU",
      subCat: KITABB, subCatLabel: KITABB_L,
      img: "https://img.mirka.com/medias/KITAIROS130ABB-001.jpg?context=bWFzdGVyfGltYWdlc3w0Mjc4Nzl8aW1hZ2UvanBlZ3xhREUwTDJneE55OHhNalV5TXpreU1UWXpOelF3Tmk5TFNWUkJTVkpQVXpFek1FRkNRbDh3TURFdWFuQm58YWVhNzQ4MDM2YjM1ZTM0MDk2OGU3MDdjOTE1ZTI5ZDc0MzM1NjMwZTBmOTMyNzIwYWZlNWMwMDhmNjBhM2QxZg&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 130S Ø32mm lên robot công nghiệp ABB.",
      lead: "Bộ kit trọn gói tích hợp đầu chà nhám mini AIROS 130S lên robot ABB, phục vụ các trạm spot repair và hoàn thiện tinh trong nhà máy quy mô lớn.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🏭","Tương thích trực tiếp robot công nghiệp ABB"],
        ["🎯","Dành riêng cho đầu mài mini 130S"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 130S Ø32mm","Tương thích robot":"ABB","Loại":"Complete kit"},
      applications: ["Trạm spot repair tự động trong nhà máy quy mô lớn","Hoàn thiện tinh chi tiết nhỏ trên dây chuyền robot ABB"],
      why: "Ngay cả trong nhà máy sản xuất quy mô lớn dùng robot ABB, vẫn cần các trạm xử lý chi tiết nhỏ — 130S ABB kit đáp ứng đúng nhu cầu này."
    }),
    robotProduct({
      slug: "airos-550s-abb-kit", name: "Mirka® AIROS 550S 125mm ABB kit EU",
      subCat: KITABB, subCatLabel: KITABB_L,
      img: "https://img.mirka.com/medias/KITAIROS550ABB.jpg?context=bWFzdGVyfGltYWdlc3w0MzAxNjd8aW1hZ2UvanBlZ3xhRFF4TDJnNU9TOHhNalV3TXpZNU1EZ3dOVEkzT0M5TFNWUkJTVkpQVXpVMU1FRkNRaTVxY0djfGEyNTM4NjBiNDZlMWY1OWE2MDI3ZTEyYjljMDUwNGQ1MGVlODkzMDVhNGYyZTdkMzQ0YjcxMTNlMDVlNWU3YWE&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 550S Ø125mm lên robot công nghiệp ABB.",
      lead: "Bộ kit trọn gói tích hợp đầu chà nhám phổ biến nhất — AIROS 550S — lên robot ABB, dành cho các dây chuyền sản xuất công nghiệp cần trạm chà nhám tự động chủ lực.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🏭","Tương thích trực tiếp robot công nghiệp ABB"],
        ["⭐","Dành cho model AIROS 550S phổ biến nhất"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 550S Ø125mm","Tương thích robot":"ABB","Loại":"Complete kit"},
      applications: ["Trạm chà nhám tự động chủ lực trong nhà máy dùng robot ABB","Dây chuyền sản xuất ô tô, đồ gỗ, kim loại quy mô công nghiệp"],
      why: "550S ABB kit là cấu hình được lựa chọn phổ biến nhất khi doanh nghiệp đầu tư trạm chà nhám tự động đầu tiên trên nền tảng robot ABB."
    }),
    robotProduct({
      slug: "airos-353s-abb-kit", name: "Mirka® AIROS 353S 81x133mm ABB kit EU",
      subCat: KITABB, subCatLabel: KITABB_L,
      img: "https://img.mirka.com/medias/KITAIROS353ABB.jpg?context=bWFzdGVyfGltYWdlc3wzOTUwMTJ8aW1hZ2UvanBlZ3xhRGd4TDJneVlpOHhNalV3TXpZNU1UazFNakUxT0M5TFNWUkJTVkpQVXpNMU0wRkNRaTVxY0djfDNiYjYyZDMxMzZhZmU0MzY0YWM3N2MzOTk1Y2ZkM2VlNTEwYjViYzE5ZGRmZmY3YjczYmIwZDExOGMxMGQ4MzM&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 353S (pad chữ nhật) lên robot công nghiệp ABB.",
      lead: "Bộ kit trọn gói tích hợp đầu chà nhám pad chữ nhật AIROS 353S lên robot ABB, cho dây chuyền chà nhám góc cạnh quy mô công nghiệp.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🏭","Tương thích trực tiếp robot công nghiệp ABB"],
        ["🔲","Dành riêng cho đầu pad chữ nhật 353S"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 353S 81x133mm","Tương thích robot":"ABB","Loại":"Complete kit"},
      applications: ["Dây chuyền công nghiệp chà nhám góc cạnh, mép chi tiết","Sản xuất nội thất, panel gỗ quy mô lớn"],
      why: "Kit ABB cho 353S phù hợp khi nhà máy cần xử lý số lượng lớn chi tiết có nhiều góc cạnh trên nền tảng robot công nghiệp hạng nặng."
    }),
    robotProduct({
      slug: "airos-350s-abb-kit", name: "Mirka® AIROS 350S 77mm ABB kit EU",
      subCat: KITABB, subCatLabel: KITABB_L,
      img: "https://img.mirka.com/medias/KITAIROS350ABB-002.jpg?context=bWFzdGVyfGltYWdlc3w0NTk5MjZ8aW1hZ2UvanBlZ3xhRGxqTDJoa09DOHhNalV4TURJeU1URXpPVGs1T0M5TFNWUkJTVkpQVXpNMU1FRkNRbDh3TURJdWFuQm58ZDVjMzcyYjVhNWNjYWQxNzUzN2Q4ODc3ZWJjNTczNzk3YjVjNWUxZjM5OThhYWE5NTdlMjA4ZmVkNDlkYWQ0Nw&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 350S Ø77mm lên robot công nghiệp ABB.",
      lead: "Bộ kit trọn gói tích hợp đầu chà nhám AIROS 350S lên robot ABB, phù hợp dây chuyền công nghiệp cần đầu mài cỡ vừa cho chi tiết đa dạng.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🏭","Tương thích trực tiếp robot công nghiệp ABB"],
        ["📏","Dành riêng cho đầu mài Ø77mm"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 350S Ø77mm","Tương thích robot":"ABB","Loại":"Complete kit"},
      applications: ["Dây chuyền công nghiệp xử lý chi tiết đa dạng kích thước","Kết hợp cùng các trạm AIROS khác trong cùng nhà máy"],
      why: "350S ABB kit bổ sung linh hoạt cho dây chuyền robot ABB khi cần một đầu mài cỡ trung bên cạnh các đầu lớn/nhỏ đã có."
    }),
    robotProduct({
      slug: "airos-150s-abb-kit", name: "Mirka® AIROS 150S 32mm ABB kit EU",
      subCat: KITABB, subCatLabel: KITABB_L,
      img: "https://img.mirka.com/medias/KITAIROS150ABB-001.jpg?context=bWFzdGVyfGltYWdlc3wzODk3MDh8aW1hZ2UvanBlZ3xhR1kwTDJnME5DOHhNalV5TXpreU1qSXlOekl6TUM5TFNWUkJTVkpQVXpFMU1FRkNRbDh3TURFdWFuQm58MDE1N2M1MWVkOGZmYWQwNDEzZGYzZWNjMDRjODk2MTk2NTI5MTc5MGNhZmJlNzI3NmJhZmZkZGM5MjlkYzQ2Nw&tr=w-960",
      shortDesc: "Bộ kit lắp đầu chà nhám AIROS 150S Ø32mm lên robot công nghiệp ABB.",
      lead: "Bộ kit trọn gói tích hợp đầu chà nhám mini AIROS 150S lên robot ABB, dành cho các trạm xử lý chi tiết nhỏ trong nhà máy quy mô công nghiệp.",
      features: [
        ["📦","Kit trọn gói, đầy đủ phần cứng lắp đặt"],
        ["🏭","Tương thích trực tiếp robot công nghiệp ABB"],
        ["🔬","Dành riêng cho đầu mài mini 150S"],
        ["🔧","Đi kèm hướng dẫn lắp đặt tiêu chuẩn Mirka"]
      ],
      specs: {"Tương thích đầu mài":"AIROS 150S Ø32mm","Tương thích robot":"ABB","Loại":"Complete kit"},
      applications: ["Trạm xử lý chi tiết nhỏ trong nhà máy dùng robot ABB","Kết hợp đa trạm AIROS trong cùng dây chuyền công nghiệp"],
      why: "150S ABB kit cho phép nhà máy dùng nền tảng ABB vẫn xử lý được các chi tiết nhỏ đòi hỏi độ chính xác cao mà không cần thêm hệ thống robot riêng."
    }),

    // ===== Tủ điều khiển & giao thức truyền thông (7) =====
    robotProduct({
      slug: "tu-dong-co-profinet", name: "Mirka® motor drive cabinet for PROFINET",
      subCat: DIEUKHIEN, subCatLabel: DIEUKHIEN_L,
      img: "https://img.mirka.com/medias/MIA6514212-001.jpg?context=bWFzdGVyfGltYWdlc3wxMTk5MDU4fGltYWdlL2pwZWd8YUdRM0wyaGxaaTg1TXpVNU1ESTJOVEl3TURrMEwwMUpRVFkxTVRReU1USmZNREF4TG1wd1p3fGE1ZjEzMWMwOGI4NjRmMjViMzdmYTMyMDlkMDc3YTVhYTM0YjJiZWE2NDAyNzEzYThiOWNlYzlmOWU2NmUzMWQ&tr=w-960",
      shortDesc: "Tủ điều khiển động cơ kết nối dụng cụ robot Mirka qua giao thức truyền thông PROFINET.",
      lead: "Tủ điều khiển động cơ (motor drive cabinet) cho phép kết hợp các dụng cụ robot Mirka với hệ thống điều khiển nhà máy qua giao thức PROFINET — chuẩn truyền thông công nghiệp phổ biến trong dây chuyền tự động.",
      features: [
        ["🔌","Giao thức truyền thông công nghiệp PROFINET"],
        ["⚙️","Điều khiển tập trung các dụng cụ robot Mirka"],
        ["🏭","Tích hợp trực tiếp vào hệ thống điều khiển nhà máy (PLC)"],
        ["🛡️","Thiết kế dạng tủ, bảo vệ linh kiện điện tử"]
      ],
      specs: {"Giao thức":"PROFINET","Chức năng":"Điều khiển động cơ dụng cụ robot","Loại":"Tủ điều khiển (Cabinet)"},
      applications: ["Nhà máy dùng hệ thống PLC/SCADA giao tiếp qua PROFINET","Tích hợp dụng cụ robot Mirka vào dây chuyền điều khiển tập trung"],
      why: "PROFINET là chuẩn phổ biến trong các nhà máy châu Âu — tủ điều khiển này giúp dụng cụ robot Mirka giao tiếp liền mạch với hệ thống điều khiển đã có sẵn."
    }),
    robotProduct({
      slug: "tu-dong-co-modbus", name: "Mirka® motor drive cabinet for Modbus RTU",
      subCat: DIEUKHIEN, subCatLabel: DIEUKHIEN_L,
      img: "https://img.mirka.com/medias/MIA6514212-001.jpg?context=bWFzdGVyfGltYWdlc3wxMTk5MDU4fGltYWdlL2pwZWd8YURNMkwyZzNZeTg1TXpVNU1ESXdOelV5T1RJMkwwMUpRVFkxTVRReU1USmZNREF4TG1wd1p3fGIyZTUxODlmZDZhZTdmNjUwMDE0NmNkOGY2ZmUxNGRjZDY0NDhmODI2ZGNhY2Q1MTE0MGMzMzIyYjczMGQ5ZmE&tr=w-960",
      shortDesc: "Tủ điều khiển động cơ kết nối dụng cụ robot Mirka qua giao thức Modbus RTU.",
      lead: "Tủ điều khiển động cơ cho phép kết hợp dụng cụ robot Mirka với hệ thống điều khiển qua giao thức Modbus RTU — lựa chọn phổ biến cho các hệ thống điều khiển công nghiệp đơn giản, chi phí hợp lý.",
      features: [
        ["🔌","Giao thức truyền thông công nghiệp Modbus RTU"],
        ["⚙️","Điều khiển tập trung các dụng cụ robot Mirka"],
        ["💰","Giải pháp giao thức chi phí hợp lý"],
        ["🛡️","Thiết kế dạng tủ, bảo vệ linh kiện điện tử"]
      ],
      specs: {"Giao thức":"Modbus RTU","Chức năng":"Điều khiển động cơ dụng cụ robot","Loại":"Tủ điều khiển (Cabinet)"},
      applications: ["Nhà máy dùng hệ thống điều khiển giao tiếp qua Modbus RTU","Giải pháp tự động hóa vừa và nhỏ cần chi phí tối ưu"],
      why: "Modbus RTU đơn giản, dễ tích hợp và tiết kiệm chi phí hơn so với các giao thức công nghiệp phức tạp — phù hợp doanh nghiệp mới bắt đầu tự động hóa."
    }),
    robotProduct({
      slug: "tu-dong-co-ethernet-ip", name: "Mirka® motor drive cabinet for Ethernet/IP",
      subCat: DIEUKHIEN, subCatLabel: DIEUKHIEN_L,
      img: "https://img.mirka.com/medias/MIA6514312-001.jpg?context=bWFzdGVyfGltYWdlc3w2NzUxMjV8aW1hZ2UvanBlZ3xhRFpqTDJoa1ppOHhNalF6TWpVeU1qVTNOVGt3TWk5TlNVRTJOVEUwTXpFeVh6QXdNUzVxY0djfGUxYTdiZDJjOTRlMjU0Nzc3ODNmY2Y3ZDA3NThkZTdkODU2OTBiZTUyOWJjNjM4ODU4ZDI3MGY5NDZkYWU0NWI",
      shortDesc: "Tủ điều khiển động cơ kết nối dụng cụ robot Mirka qua giao thức Ethernet/IP.",
      lead: "Tủ điều khiển động cơ cho phép kết hợp dụng cụ robot Mirka với hệ thống điều khiển qua giao thức Ethernet/IP — phổ biến trong các dây chuyền tự động hóa tại Bắc Mỹ và nhiều ngành công nghiệp hiện đại.",
      features: [
        ["🔌","Giao thức truyền thông công nghiệp Ethernet/IP"],
        ["⚙️","Điều khiển tập trung các dụng cụ robot Mirka"],
        ["🌐","Tốc độ truyền dữ liệu cao, phù hợp hệ thống hiện đại"],
        ["🛡️","Thiết kế dạng tủ, bảo vệ linh kiện điện tử"]
      ],
      specs: {"Giao thức":"Ethernet/IP","Chức năng":"Điều khiển động cơ dụng cụ robot","Loại":"Tủ điều khiển (Cabinet)"},
      applications: ["Nhà máy dùng hệ thống điều khiển giao tiếp qua Ethernet/IP","Dây chuyền tự động hóa hiện đại cần tốc độ truyền dữ liệu cao"],
      why: "Với các nhà máy đã đầu tư hạ tầng mạng Ethernet/IP, tủ điều khiển này giúp tích hợp dụng cụ robot Mirka mà không cần thêm lớp chuyển đổi giao thức."
    }),
    robotProduct({
      slug: "airos-profinet-preassembled", name: "Mirka® AIROS Profinet Pre-assembled Kit",
      subCat: DIEUKHIEN, subCatLabel: DIEUKHIEN_L,
      img: "https://img.mirka.com/medias/CMPT000519.jpg?context=bWFzdGVyfGltYWdlc3w4NDk1NHxpbWFnZS9qcGVnfGFHRTVMMmd5Wmk4NU1EY3pOelk1TWpFNE1EYzRMME5OVUZRd01EQTFNVGt1YW5Cbnw5ODI1MTY4NzU2ZmRjYmM5MWE0ODMxMDFmZmNjZDQwMWFlNmM4MWZjOWY1YjYyYmYyNmFiNTRkMTAyYmY2MmQz&tr=w-960",
      shortDesc: "Bộ tủ điều khiển Profinet lắp sẵn toàn bộ linh kiện, sẵn sàng sử dụng ngay.",
      lead: "Mirka® AIROS Profinet Pre-assembled Kit là tủ điều khiển Profinet đã được lắp sẵn toàn bộ linh kiện bên trong, giúp rút ngắn thời gian triển khai so với mua rời từng phần.",
      features: [
        ["✅","Lắp sẵn toàn bộ linh kiện trong tủ, sẵn sàng sử dụng"],
        ["⚡","Rút ngắn thời gian triển khai hệ thống"],
        ["🔌","Giao thức Profinet"],
        ["🔧","Giảm rủi ro sai sót khi tự lắp ráp"]
      ],
      specs: {"Giao thức":"Profinet","Tình trạng":"Lắp sẵn (Pre-assembled)","Loại":"Tủ điều khiển trọn gói"},
      applications: ["Dự án cần triển khai nhanh, không có nhân sự kỹ thuật lắp ráp tủ điện","Nhà máy mở rộng dây chuyền robot Profinet"],
      why: "Bản lắp sẵn phù hợp khi doanh nghiệp ưu tiên tốc độ triển khai và muốn giảm thiểu rủi ro kỹ thuật trong quá trình lắp đặt tủ điều khiển."
    }),
    robotProduct({
      slug: "airos-modbus-preassembled", name: "Mirka® AIROS Modbus Pre-assembled Kit",
      subCat: DIEUKHIEN, subCatLabel: DIEUKHIEN_L,
      img: "https://img.mirka.com/medias/CMPT000719.jpg?context=bWFzdGVyfGltYWdlc3w4NDk1NHxpbWFnZS9qcGVnfGFHVXhMMmd6T1M4NU1EY3pOelk1TlRFeU9Ua3dMME5OVUZRd01EQTNNVGt1YW5CbnwyMmJmZGJlYzNiOTNjZDc3MzE2NzRlOGI2ZjA0MGFlMjFlYWFhOTM3ZDI2ZDc0NDVlMTNhYzNlNzhiNDJjOTMx&tr=w-960",
      shortDesc: "Bộ tủ điều khiển Modbus lắp sẵn toàn bộ linh kiện, sẵn sàng sử dụng ngay.",
      lead: "Mirka® AIROS Modbus Pre-assembled Kit là tủ điều khiển Modbus đã lắp sẵn toàn bộ linh kiện, giải pháp nhanh gọn cho các dự án cần đưa vào vận hành sớm.",
      features: [
        ["✅","Lắp sẵn toàn bộ linh kiện trong tủ, sẵn sàng sử dụng"],
        ["⚡","Rút ngắn thời gian triển khai hệ thống"],
        ["🔌","Giao thức Modbus RTU"],
        ["🔧","Giảm rủi ro sai sót khi tự lắp ráp"]
      ],
      specs: {"Giao thức":"Modbus RTU","Tình trạng":"Lắp sẵn (Pre-assembled)","Loại":"Tủ điều khiển trọn gói"},
      applications: ["Dự án cần triển khai nhanh với giao thức Modbus","Doanh nghiệp vừa và nhỏ mới triển khai tự động hóa"],
      why: "Kết hợp chi phí hợp lý của Modbus RTU với sự tiện lợi của bản lắp sẵn, đây là lựa chọn kinh tế cho các dự án tự động hóa quy mô vừa."
    }),
    robotProduct({
      slug: "airos-profinet-components", name: "Mirka® AIROS Profinet Components Kit",
      subCat: DIEUKHIEN, subCatLabel: DIEUKHIEN_L,
      img: "https://img.mirka.com/medias/CMPT000619.jpg?context=bWFzdGVyfGltYWdlc3wxNDUxMjJ8aW1hZ2UvanBlZ3xhR1F3TDJnek5pODVNRGN6TnpZNU5EUTNORFUwTDBOTlVGUXdNREEyTVRrdWFuQm58ZWZmNWRlZWE0NDUxNTUwZDAxZWYxNjc5MjgwYTNmZmU0MWViMDY3ZWFjNDczODExYmM4YWI5Y2FhNzY3MTFlMQ&tr=w-960",
      shortDesc: "Bộ linh kiện rời để tự lắp ráp tủ điều khiển Profinet.",
      lead: "Mirka® AIROS Profinet Components Kit cung cấp đầy đủ linh kiện rời để đội ngũ kỹ thuật tự lắp ráp tủ điều khiển Profinet theo đúng yêu cầu bố trí riêng của nhà máy.",
      features: [
        ["🧩","Bộ linh kiện rời đầy đủ, tự lắp ráp theo nhu cầu"],
        ["🔌","Giao thức Profinet"],
        ["🛠️","Linh hoạt bố trí tủ điện theo không gian nhà máy"],
        ["📐","Phù hợp đội ngũ kỹ thuật có kinh nghiệm lắp ráp tủ điện"]
      ],
      specs: {"Giao thức":"Profinet","Tình trạng":"Linh kiện rời (Components)","Loại":"Bộ linh kiện tủ điều khiển"},
      applications: ["Nhà máy có đội kỹ thuật riêng, muốn tùy biến bố trí tủ điện","Dự án cần tích hợp thêm thiết bị khác cùng tủ điều khiển"],
      why: "Bản linh kiện rời phù hợp khi nhà máy muốn kiểm soát toàn bộ quá trình lắp ráp hoặc cần tùy chỉnh tủ điều khiển theo không gian đặc thù."
    }),
    robotProduct({
      slug: "airos-modbus-components", name: "Mirka® AIROS Modbus Components Kit",
      subCat: DIEUKHIEN, subCatLabel: DIEUKHIEN_L,
      img: "https://img.mirka.com/medias/CMPT000819.jpg?context=bWFzdGVyfGltYWdlc3wxNzIwMTl8aW1hZ2UvanBlZ3xhRE5pTDJnek55ODVNRGN6TnpZNU5EZ3dNakl5TDBOTlVGUXdNREE0TVRrdWFuQm58YjE3MTk4MzNmZGE2M2RiYjgzMjQ2NzU4NzE0MzkxMjNhN2QzMzAwMDU3OWNmYzBhNzNmY2Y1N2U3MmU0ZjMyNg&tr=w-960",
      shortDesc: "Bộ linh kiện rời để tự lắp ráp tủ điều khiển Modbus.",
      lead: "Mirka® AIROS Modbus Components Kit cung cấp đầy đủ linh kiện rời để tự lắp ráp tủ điều khiển Modbus RTU theo yêu cầu bố trí riêng của từng nhà máy.",
      features: [
        ["🧩","Bộ linh kiện rời đầy đủ, tự lắp ráp theo nhu cầu"],
        ["🔌","Giao thức Modbus RTU"],
        ["🛠️","Linh hoạt bố trí tủ điện theo không gian nhà máy"],
        ["📐","Phù hợp đội ngũ kỹ thuật có kinh nghiệm lắp ráp tủ điện"]
      ],
      specs: {"Giao thức":"Modbus RTU","Tình trạng":"Linh kiện rời (Components)","Loại":"Bộ linh kiện tủ điều khiển"},
      applications: ["Nhà máy có đội kỹ thuật riêng, muốn tùy biến bố trí tủ điện","Dự án tự động hóa chi phí tối ưu, tự lắp ráp"],
      why: "Khi ngân sách hoặc bố trí kỹ thuật đặc thù không phù hợp với bản lắp sẵn, bộ linh kiện rời Modbus cho phép nhà máy chủ động toàn bộ khâu lắp ráp."
    }),

    // ===== Bộ đổi đầu mài tự động - AutoChanger (4) =====
    robotProduct({
      slug: "autochanger-communication-kit", name: "Mirka® AutoChanger Communication Kit",
      subCat: AUTOCHANGER, subCatLabel: AUTOCHANGER_L,
      img: "https://img.mirka.com/medias/MAC1009141-001.jpg?context=bWFzdGVyfGltYWdlc3w3NTI4MDZ8aW1hZ2UvanBlZ3xhRE5rTDJoa1ppOHhNVEF6TXpRME1qUTFNVFE0Tmk5TlFVTXhNREE1TVRReFh6QXdNUzVxY0djfDY1NmFmMGJmMGRhMzMzMDUwYjFiYmRlZDZhZWMwYzgyYjRmNjE0M2VmMDlkZGY3ZjE4OGY1N2FmYmUyN2M5NjE",
      shortDesc: "Kit truyền thông kết nối hệ thống AutoChanger với robot và PLC nhà máy.",
      lead: "Mirka® AutoChanger Communication Kit cung cấp phần cứng và cáp kết nối để hệ thống đổi đầu mài tự động (AutoChanger) giao tiếp được với robot và PLC điều khiển của nhà máy.",
      features: [
        ["🔗","Kết nối AutoChanger với robot và hệ thống PLC"],
        ["🔌","Đầy đủ cáp và đầu nối tín hiệu"],
        ["🤖","Cho phép robot tự động chọn đầu mài phù hợp"],
        ["⚙️","Tương thích hệ sinh thái AutoChanger của Mirka"]
      ],
      specs: {"Chức năng":"Kết nối truyền thông cho AutoChanger","Loại":"Communication kit"},
      applications: ["Dây chuyền robot cần tự động thay đổi đầu mài theo công đoạn","Tích hợp AutoChanger vào hệ thống điều khiển nhà máy"],
      why: "Không có kit truyền thông này, hệ thống AutoChanger không thể giao tiếp với robot để thực hiện thao tác đổi đầu mài tự động."
    }),
    robotProduct({
      slug: "autochanger-remover", name: "Mirka® AutoChanger Remover",
      subCat: AUTOCHANGER, subCatLabel: AUTOCHANGER_L,
      img: "https://img.mirka.com/medias/MAC1003991-001.jpg?context=bWFzdGVyfGltYWdlc3w0OTcxODZ8aW1hZ2UvanBlZ3xhRE5tTDJoa1l5OHhNVEF6TXpRME1qVXhOekF5TWk5TlFVTXhNREF6T1RreFh6QXdNUzVxY0djfDRiYzllNGJhMjUxNWJkMjk5Mzk0MmIxMDMwMjJhYjRlNTgzMWVkZmU3YmUyN2Q2MzMyMTZhN2MwODBiNmIyODI",
      shortDesc: "Bộ phận tháo dỡ (remover) trong hệ thống đổi đầu mài tự động AutoChanger.",
      lead: "Mirka® AutoChanger Remover là bộ phận cơ khí đảm nhiệm việc tháo đầu mài đã qua sử dụng ra khỏi robot trong quy trình đổi đầu mài tự động.",
      features: [
        ["🔧","Tháo đầu mài tự động, không cần can thiệp thủ công"],
        ["🤖","Là một phần của hệ thống AutoChanger hoàn chỉnh"],
        ["⚡","Rút ngắn thời gian dừng máy giữa các công đoạn"],
        ["🛡️","Cơ cấu cơ khí bền, chịu tần suất hoạt động cao"]
      ],
      specs: {"Chức năng":"Tháo đầu mài tự động","Thuộc hệ thống":"AutoChanger","Loại":"Bộ phận cơ khí"},
      applications: ["Dây chuyền robot đổi đầu mài liên tục theo từng công đoạn","Sản xuất hàng loạt cần giảm tối đa thời gian dừng máy"],
      why: "Remover là mắt xích không thể thiếu để AutoChanger hoạt động hoàn toàn tự động — nếu thiếu bộ phận này, việc thay đầu mài vẫn phải làm thủ công."
    }),
    robotProduct({
      slug: "autochanger-pneumatic-kit", name: "Mirka® AutoChanger Pneumatic Kit",
      subCat: AUTOCHANGER, subCatLabel: AUTOCHANGER_L,
      img: "https://img.mirka.com/medias/AutoChanger-Pneumatic-Kit-001.jpg?context=bWFzdGVyfGltYWdlc3w0NjQxODB8aW1hZ2UvanBlZ3xhR1ppTDJoak1DOHhNVEl4TWpNM09ETXdPRFl6T0M5QmRYUnZRMmhoYm1kbGNpMVFibVYxYldGMGFXTXRTMmwwWHpBd01TNXFjR2N8Mzk1YjhjM2Y1ZjkwZGIxYmM0N2RjOGNkMzgyYjExMjJmZGU4Y2VlZDEwMjY2N2U5ODVjMmMxZGRkMmNkMGE1MA&tr=w-960",
      shortDesc: "Bộ kit khí nén vận hành cơ cấu chuyển động của hệ thống AutoChanger.",
      lead: "Mirka® AutoChanger Pneumatic Kit cung cấp hệ thống khí nén cần thiết để vận hành các cơ cấu chuyển động cơ khí trong AutoChanger — từ giữ, tháo đến gắn đầu mài mới.",
      features: [
        ["💨","Hệ thống khí nén vận hành cơ cấu AutoChanger"],
        ["⚙️","Đảm bảo lực kẹp/nhả chính xác, ổn định"],
        ["🤖","Thành phần lõi của hệ thống AutoChanger"],
        ["🔧","Dễ bảo trì, thay thế theo chu kỳ"]
      ],
      specs: {"Chức năng":"Cấp khí nén vận hành cơ cấu","Thuộc hệ thống":"AutoChanger","Loại":"Bộ kit khí nén"},
      applications: ["Hệ thống AutoChanger cần nguồn khí nén để vận hành","Bảo trì/nâng cấp hệ thống AutoChanger hiện có"],
      why: "Cơ cấu khí nén là nguồn lực chính giúp AutoChanger thực hiện các thao tác kẹp — nhả đầu mài nhanh và chính xác trong mỗi chu kỳ đổi dụng cụ."
    }),
    robotProduct({
      slug: "autochanger-magazine", name: "Mirka® AutoChanger Magazine",
      subCat: AUTOCHANGER, subCatLabel: AUTOCHANGER_L,
      img: "https://img.mirka.com/medias/AutoChangerMagazine-001.jpg?context=bWFzdGVyfGltYWdlc3w2Mzg0MDR8aW1hZ2UvanBlZ3xhR0l4TDJnMk9DOHhNVEl4TWpNM056ZzBPVGc0Tmk5QmRYUnZRMmhoYm1kbGNrMWhaMkY2YVc1bFh6QXdNUzVxY0djfGU5ZTU5Mjk1ZWEwMWJiZmYwMDdlN2I4N2JjNDIwNzlhMjk2NzI4NjAxNWRlZmNkMjRiOGM2YzBjMjI4Nzg1NGU",
      shortDesc: "Khay chứa (magazine) lưu trữ nhiều đầu mài cho hệ thống AutoChanger.",
      lead: "Mirka® AutoChanger Magazine là khay chứa cho phép lưu trữ sẵn nhiều đầu mài khác nhau, để robot tự động lựa chọn đầu mài phù hợp theo từng công đoạn mà không cần dừng dây chuyền.",
      features: [
        ["🗄️","Lưu trữ nhiều đầu mài cùng lúc, sẵn sàng cho robot lấy"],
        ["🔄","Cho phép chuyển đổi linh hoạt giữa các loại đầu mài"],
        ["🤖","Phối hợp với Remover và Communication Kit thành hệ thống hoàn chỉnh"],
        ["⚡","Giảm thời gian chết giữa các công đoạn khác nhau"]
      ],
      specs: {"Chức năng":"Lưu trữ đầu mài chờ thay thế","Thuộc hệ thống":"AutoChanger","Loại":"Khay chứa (Magazine)"},
      applications: ["Dây chuyền cần luân phiên nhiều loại đầu mài trong một chu trình","Sản xuất đa dạng sản phẩm trên cùng một trạm robot"],
      why: "Magazine là nơi robot có thể tiếp cận nhiều lựa chọn đầu mài khác nhau — nền tảng để một trạm robot duy nhất xử lý được nhiều công đoạn khác nhau."
    }),

    // ===== Bộ đổi dụng cụ - ToolChanger (3) =====
    robotProduct({
      slug: "toolchanger-upper", name: "Mirka® ToolChanger Upper Assembly (Robot side)",
      subCat: TOOLCHANGER, subCatLabel: TOOLCHANGER_L,
      img: "https://img.mirka.com/medias/MTC1001011-001.jpg?context=bWFzdGVyfGltYWdlc3wzMzA2MDF8aW1hZ2UvanBlZ3xhREl5TDJneFlTOHhNalF5TnpNME1USXdNVFF6T0M5TlZFTXhNREF4TURFeFh6QXdNUzVxY0djfDcyODdlMzljMWY5Zjc5NDJkN2ZiY2NlMjI3NjA1MTAwYjdmNjE0ODFiZDJlYThhNTI1ODcxYmIyZjQwODMxMzk",
      shortDesc: "Cụm lắp phía robot (robot side) của hệ thống đổi dụng cụ ToolChanger.",
      lead: "Mirka® ToolChanger Upper Assembly là cụm lắp phía robot trong hệ thống ToolChanger — gắn cố định trên cổ tay robot để kết nối nhanh với các dụng cụ khác nhau.",
      features: [
        ["🤖","Lắp cố định trên cổ tay robot"],
        ["🔗","Kết nối nhanh với cụm phía dụng cụ (Lower Assembly)"],
        ["⚡","Cho phép robot đổi dụng cụ trong vài giây"],
        ["🛡️","Cơ cấu khóa chắc chắn, chịu tải trong vận hành liên tục"]
      ],
      specs: {"Vị trí lắp":"Phía robot (Robot side)","Thuộc hệ thống":"ToolChanger","Loại":"Cụm lắp cơ khí"},
      applications: ["Robot cần luân phiên nhiều loại dụng cụ khác nhau (chà nhám, đánh bóng, gắp...)","Dây chuyền đa nhiệm dùng chung một cánh tay robot"],
      why: "Upper Assembly là nửa cố định trên robot, cho phép cùng một cánh tay robot đảm nhiệm nhiều vai trò khác nhau chỉ bằng thao tác đổi dụng cụ tự động."
    }),
    robotProduct({
      slug: "toolchanger-lower", name: "Mirka® ToolChanger Lower Assembly (Tool side)",
      subCat: TOOLCHANGER, subCatLabel: TOOLCHANGER_L,
      img: "https://img.mirka.com/medias/MTC1002011-001.jpg?context=bWFzdGVyfGltYWdlc3w0MDE1MDd8aW1hZ2UvanBlZ3xhREpsTDJnMU1pOHhNalF5TnpNME1ERTROVFl6TUM5TlZFTXhNREF5TURFeFh6QXdNUzVxY0djfGM1YzczNDU1NmU2NTM5OGVmOWRlNWVjMDQ2YjFkMGViMjcyYTcyYjBmOGFmNGRmMjBmMjc1NDcyM2Q3NzY3OTk",
      shortDesc: "Cụm lắp phía dụng cụ (tool side) của hệ thống đổi dụng cụ ToolChanger.",
      lead: "Mirka® ToolChanger Lower Assembly là cụm lắp phía dụng cụ — gắn trên từng đầu chà nhám/đánh bóng để chúng có thể kết nối nhanh với robot khi cần.",
      features: [
        ["🔧","Lắp trên từng dụng cụ (đầu chà nhám, đánh bóng...)"],
        ["🔗","Kết nối nhanh với cụm phía robot (Upper Assembly)"],
        ["🔄","Mỗi dụng cụ trong hệ thống cần một Lower Assembly riêng"],
        ["🛡️","Cơ cấu khóa chắc chắn, đồng bộ với Upper Assembly"]
      ],
      specs: {"Vị trí lắp":"Phía dụng cụ (Tool side)","Thuộc hệ thống":"ToolChanger","Loại":"Cụm lắp cơ khí"},
      applications: ["Mỗi đầu công cụ cần đổi qua lại tự động trên robot","Trạm robot đa năng dùng nhiều loại đầu công cụ khác nhau"],
      why: "Cần một Lower Assembly cho mỗi dụng cụ muốn đưa vào hệ thống ToolChanger — đây là phần giúp robot 'nhận diện' và gắn kết với đúng dụng cụ đang nằm chờ."
    }),
    robotProduct({
      slug: "toolchanger-tray-extension", name: "Mirka® ToolChanger Tray Extension",
      subCat: TOOLCHANGER, subCatLabel: TOOLCHANGER_L,
      img: "https://img.mirka.com/assets/AC5MPZCA/at/xrgv2h8qvjtrrsr2sg7b8q5/MTC1010711-Tray-Extension-for-ToolChanger-1.jpg",
      shortDesc: "Khay mở rộng giúp tăng số lượng dụng cụ lưu trữ cho hệ thống ToolChanger.",
      lead: "Mirka® ToolChanger Tray Extension mở rộng khay chứa của hệ thống ToolChanger, cho phép lưu trữ thêm nhiều dụng cụ để robot lựa chọn trong cùng một trạm làm việc.",
      features: [
        ["📐","Mở rộng số lượng vị trí lưu trữ dụng cụ"],
        ["🤖","Tương thích trực tiếp hệ thống ToolChanger có sẵn"],
        ["🔄","Tăng tính linh hoạt cho trạm robot đa nhiệm"],
        ["🛠️","Lắp đặt bổ sung không cần thay đổi cấu hình gốc"]
      ],
      specs: {"Chức năng":"Mở rộng khay chứa dụng cụ","Thuộc hệ thống":"ToolChanger","Loại":"Phụ kiện mở rộng"},
      applications: ["Trạm robot cần xử lý nhiều loại dụng cụ hơn cấu hình gốc","Mở rộng quy mô dây chuyền robot hiện có mà không đổi hệ thống chính"],
      why: "Khi nhu cầu sản xuất tăng số loại dụng cụ cần dùng, Tray Extension là cách mở rộng đơn giản mà không phải đầu tư lại toàn bộ hệ thống ToolChanger."
    }),

    // ===== Phụ kiện robot khác (5) =====
    robotProduct({
      slug: "cable-shielded-10m-airos", name: "Cable (Shielded) 10m for AIROS",
      subCat: PHUKIEN, subCatLabel: PHUKIEN_L,
      img: "https://img.mirka.com/medias/MIA6512311.jpg?context=bWFzdGVyfGltYWdlc3w1NDk3MjV8aW1hZ2UvanBlZ3xhR0U0TDJnM05TODVNVFUxTWpNME9UZzRNRFl5TDAxSlFUWTFNVEl6TVRFdWFuQm58NmJlMmY0NmJmZWMwZjhmMWMwMjQ3Njk5ODlhYmE2MWU4NGZkZTUzZDNjMWFkODdkOTRlZDU4MGZiOTQ4Mzk2NA&tr=w-960",
      shortDesc: "Cáp tín hiệu có chống nhiễu, dài 10m, dành cho đầu chà nhám/đánh bóng dòng AIROS.",
      lead: "Cáp tín hiệu chống nhiễu (shielded) dài 10m, kết nối đầu chà nhám/đánh bóng AIROS với tủ điều khiển động cơ — chiều dài phù hợp các trạm robot có khoảng cách lắp đặt xa.",
      features: [
        ["🔌","Cáp chống nhiễu (shielded), tín hiệu ổn định"],
        ["📏","Chiều dài 10m, phù hợp trạm robot lớn"],
        ["🤖","Tương thích các đầu mài dòng AIROS"],
        ["🛡️","Độ bền cao, chịu được môi trường công nghiệp"]
      ],
      specs: {"Chiều dài":"10 m","Loại cáp":"Shielded (chống nhiễu)","Tương thích":"Dòng AIROS"},
      applications: ["Trạm robot có khoảng cách xa giữa đầu mài và tủ điều khiển","Thay thế cáp cũ bị hỏng hoặc nâng cấp hệ thống AIROS"],
      why: "Cáp chống nhiễu giúp duy trì tín hiệu ổn định trong môi trường nhà xưởng có nhiều thiết bị điện công suất lớn hoạt động gần đó."
    }),
    robotProduct({
      slug: "hose-connector-27-32", name: "Hose and Connector Ø 27 mm / 32 mm",
      subCat: PHUKIEN, subCatLabel: PHUKIEN_L,
      img: "https://img.mirka.com/medias/MIN6519411-005.jpg?context=bWFzdGVyfGltYWdlc3w3MDE5OTB8aW1hZ2UvanBlZ3xhRGxsTDJoaFlpOHhNRFF4T1RRd01qQTBOelV4T0M5TlNVNDJOVEU1TkRFeFh6QXdOUzVxY0djfGEzNDk4Mjc4MWQyZTIwYTRiMDk0ZTYzNDEyYmMwMzY5MjNiNTNiZWI5MWRiOWVhOTZjNzk5ZjY2ODUwMGM4MmQ",
      shortDesc: "Ống hút bụi mềm kèm đầu nối, Ø27mm/32mm, kết nối máy chà nhám robot với máy hút bụi.",
      lead: "Ống hút bụi mềm cùng đầu nối, đường kính 27mm/32mm, dùng để kết nối đầu chà nhám robot với hệ thống hút bụi trung tâm — đảm bảo dòng khí hút ổn định trong suốt quá trình vận hành.",
      features: [
        ["🌀","Ống mềm, linh hoạt theo chuyển động của robot"],
        ["🔌","Đầu nối Ø27mm/32mm phổ biến"],
        ["💨","Duy trì lực hút ổn định khi robot di chuyển"],
        ["🛡️","Chất liệu bền, chịu ma sát trong vận hành liên tục"]
      ],
      specs: {"Đường kính":"27 mm / 32 mm","Loại":"Ống hút bụi mềm kèm đầu nối"},
      applications: ["Kết nối đầu chà nhám robot AIROS với máy hút bụi trung tâm","Thay thế ống cũ bị mòn/rách trong bảo trì định kỳ"],
      why: "Ống hút linh hoạt là mắt xích quan trọng giữ hệ thống chà nhám robot luôn 'không bụi' ngay cả khi cánh tay robot di chuyển liên tục ở nhiều góc độ."
    }),
    robotProduct({
      slug: "autostart-module-230v", name: "Mirka® AutoStart Module 230V",
      subCat: PHUKIEN, subCatLabel: PHUKIEN_L,
      img: "https://img.mirka.com/assets/AC5MPZCA/at/wr56qz3xhqzp323tb8zh9/MIA6519011-Mirka-AutoStart-Module-230V-1.jpg",
      shortDesc: "Module tự động khởi động máy hút bụi đồng bộ với dụng cụ robot, điện áp 230V.",
      lead: "Module AutoStart 230V tự động bật/tắt máy hút bụi ngay khi dụng cụ robot bắt đầu/kết thúc hoạt động, giúp hệ thống hút bụi vận hành đồng bộ mà không cần lập trình riêng.",
      features: [
        ["⚡","Điện áp 230V, tự động đồng bộ khởi động"],
        ["🔄","Kết nối trực tiếp giữa dụng cụ robot và máy hút bụi"],
        ["💰","Tiết kiệm điện năng khi máy hút chỉ chạy lúc cần"],
        ["🔧","Lắp đặt đơn giản, không cần lập trình PLC riêng"]
      ],
      specs: {"Điện áp":"230V","Chức năng":"Tự động khởi động máy hút bụi (AutoStart)"},
      applications: ["Đồng bộ vận hành máy hút bụi với dụng cụ chà nhám robot","Tiết kiệm điện năng cho trạm robot hoạt động không liên tục"],
      why: "Không phải lúc nào máy hút bụi cũng cần chạy — AutoStart Module đảm bảo máy hút chỉ hoạt động đúng lúc robot đang chà nhám, tiết kiệm điện và giảm ồn không cần thiết."
    }),
    robotProduct({
      slug: "mains-cable-ceros-2m", name: "Mains Cable CE 230V IEC C13, CEROS, 2 m",
      subCat: PHUKIEN, subCatLabel: PHUKIEN_L,
      img: "https://img.mirka.com/medias/MIN6516011.jpg?context=bWFzdGVyfGltYWdlc3wxMTU4NTQzfGltYWdlL2pwZWd8YURoaUwyZ3hNaTg1TXpJMk16UTBNRFEwTlRjMEwwMUpUalkxTVRZd01URXVhbkJufGI4NTU1NWQ1MDk2NTkzMDUzMjMyZmYzMjE2M2M2MTBmZjhiNDk2NTY1YWFhOGI2ZTU5MGFhODg5MDY4NTViODg&tr=w-960",
      shortDesc: "Dây nguồn CE 230V chuẩn IEC C13, dài 2m, dùng cho máy đánh bóng CEROS.",
      lead: "Dây nguồn tiêu chuẩn CE 230V, đầu nối IEC C13, dài 2m — phụ kiện thay thế cho máy đánh bóng Mirka® CEROS và các thiết bị dùng chung chuẩn nguồn này.",
      features: [
        ["🔌","Đầu nối chuẩn IEC C13, tương thích rộng"],
        ["⚡","Điện áp 230V theo chuẩn CE châu Âu"],
        ["📏","Chiều dài 2m, đủ dùng cho hầu hết trạm làm việc"],
        ["🛡️","Đạt chứng nhận an toàn điện CE"]
      ],
      specs: {"Điện áp":"230V","Đầu nối":"IEC C13","Chiều dài":"2 m","Tương thích":"Mirka® CEROS"},
      applications: ["Thay thế dây nguồn cũ bị hỏng cho máy CEROS","Phụ tùng dự phòng cho xưởng có nhiều thiết bị dùng chuẩn IEC C13"],
      why: "Một dây nguồn đạt chuẩn CE đúng thông số giúp đảm bảo an toàn điện và tránh gián đoạn vận hành khi dây nguyên bản gặp sự cố."
    })
  ];

  window.PRODUCTS = (window.PRODUCTS || []).concat(list);

  // Đăng ký danh mục mới, chèn ngay sau "Máy chà nhám khí nén"
  if (window.CATEGORIES) {
    var idx = window.CATEGORIES.findIndex(function (c) { return c.key === "khinen"; });
    var newCat = {key: "robot", label: "Robot & Tự động hóa"};
    if (idx !== -1) {
      window.CATEGORIES.splice(idx + 1, 0, newCat);
    } else {
      window.CATEGORIES.push(newCat);
    }
  }

})();

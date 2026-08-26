// Bổ sung 2 danh mục mới từ mirka.com:
// - Máy chà nhám dùng pin (power-tools/cordless-tools/) — 9 sản phẩm — đặt cạnh "Máy chà nhám điện"
// - Máy hút bụi (power-tools/dust-extractors/) — 10 sản phẩm còn lại — đặt cạnh "Đánh bóng"
// (DEXOS 1217 M AFC đã có sẵn trong products-data.js, được chuyển sang danh mục "hutbui")

(function () {

  function cordlessProduct(opts) {
    return {
      slug: opts.slug,
      name: opts.name,
      seoKeyword: opts.name,
      category: "pin", categoryLabel: "Máy chà nhám dùng pin",
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

  function dustExtractorProduct(opts) {
    return {
      slug: opts.slug,
      name: opts.name,
      seoKeyword: opts.name,
      category: "hutbui", categoryLabel: "Máy hút bụi",
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

  var MAIPIN = "may-mai-pin", MAIPIN_L = "Máy mài & chà băng dùng pin";
  var CHANHAMPIN = "chanham-pin", CHANHAMPIN_L = "Máy chà nhám quỹ đạo dùng pin";
  var DANHBONGPIN = "danhbong-pin", DANHBONGPIN_L = "Máy đánh bóng dùng pin";

  var cordlessList = [
    cordlessProduct({slug:"fbs-b-10x330", name:"Mirka® FBS-B Cordless File Belt Sander 10 x 330 mm max 12V", subCat:MAIPIN, subCatLabel:MAIPIN_L,
      img:"images/products/0166-MBB1000100-001.jpg",
      shortDesc: "Máy chà nhám băng dùng pin 10×330mm, mạnh mẽ, công thái học, không dây.",
      lead: "Mirka® FBS-B 10 là máy chà nhám dạng băng (file belt) dùng pin, mạnh mẽ và công thái học với băng nhám 10×330mm — hoàn toàn không dây, không ống khí nén.",
      features: [
        ["🔋","Pin Li-ion 12V max, tự do di chuyển không dây, không ống hơi"],
        ["⚙️","Động cơ brushless mạnh mẽ, tối ưu hiệu suất pin"],
        ["📏","Băng nhám 10×330mm cho các chi tiết vừa và nhỏ"],
        ["📶","Kết nối Bluetooth low-energy, tùy chỉnh theo ứng dụng"],
        ["🪶","Thiết kế công thái học, thao tác thoải mái"]
      ],
      specs: {"Mã hàng":"MBB1000100","Kích thước băng nhám":"10 × 330 mm","Điện áp pin":"12V max (Li-ion)","Kết nối":"Bluetooth low energy","Loại":"Không dây (Cordless)"},
      applications: ["Gò kim loại, xử lý mối hàn ở công trình không có nguồn điện/khí nén","Sửa chữa thân xe di động, không cố định vị trí","Công việc cần di chuyển linh hoạt liên tục"],
      why: "Khi công trình không có sẵn nguồn điện hoặc khí nén ổn định, FBS-B 10 vẫn duy trì lực cắt mạnh mẽ của máy chà băng mà không cần dây hay ống dẫn."
    }),
    cordlessProduct({slug:"fbs-b-13x457", name:"Mirka® FBS-B Cordless File Belt Sander 13 x 457 mm max 12V", subCat:MAIPIN, subCatLabel:MAIPIN_L,
      img:"images/products/0167-MBB1300100-001.jpg",
      shortDesc: "Máy chà nhám băng dùng pin 13×457mm, diện tích tiếp xúc lớn hơn.",
      lead: "Mirka® FBS-B 13 là phiên bản băng nhám lớn hơn 13×457mm của dòng máy chà băng dùng pin, cho năng suất cao hơn trên diện tích rộng.",
      features: [
        ["🔋","Pin Li-ion 12V max, không dây, không ống hơi"],
        ["⚙️","Động cơ brushless mạnh mẽ"],
        ["📏","Băng nhám 13×457mm, năng suất cao hơn bản 10mm"],
        ["📶","Kết nối Bluetooth low-energy"],
        ["🪶","Thiết kế công thái học, thao tác thoải mái"]
      ],
      specs: {"Mã hàng":"MBB1300100","Kích thước băng nhám":"13 × 457 mm","Điện áp pin":"12V max (Li-ion)","Kết nối":"Bluetooth low energy","Loại":"Không dây (Cordless)"},
      applications: ["Gò kim loại diện tích lớn hơn ở công trình di động","Xử lý mối hàn, vết nối trên panel kim loại","Công việc cần năng suất mài cao mà không có nguồn khí nén"],
      why: "Với diện tích cần xử lý lớn hơn, FBS-B 13 cho năng suất mài cao hơn FBS-B 10 trong khi vẫn giữ trọn lợi thế không dây."
    }),
    cordlessProduct({slug:"angos-arg-b-200", name:"Mirka® ANGOS ARG-B 200 Ø 55 mm max 12V", subCat:MAIPIN, subCatLabel:MAIPIN_L,
      img:"images/products/0109-8991100311WB-001.jpg",
      shortDesc: "Máy mài góc dùng pin cao cấp Ø55mm cho kim loại và làm sạch sau hàn.",
      lead: "Mirka® ANGOS ARG-B 200 là dụng cụ mài góc dùng pin cao cấp, chuyên cho mài và chà nhám kim loại, làm sạch sau hàn — hoàn toàn không dây.",
      features: [
        ["🔋","Pin Li-ion 12V max, tự do di chuyển"],
        ["⚙️","Động cơ brushless mạnh mẽ cho gia công kim loại"],
        ["🧹","Chuyên làm sạch mối hàn, chuẩn bị bề mặt kim loại"],
        ["📶","Kết nối Bluetooth low-energy"],
        ["🏆","Dụng cụ cao cấp trong dòng sản phẩm dùng pin của Mirka"]
      ],
      specs: {"Mã hàng":"8991100311WB","Đường kính":"55 mm","Điện áp pin":"12V max (Li-ion)","Ứng dụng chính":"Mài kim loại, làm sạch sau hàn"},
      applications: ["Làm sạch mối hàn trên kết cấu thép","Mài, chà nhám kim loại tại công trình không có điện lưới","Chuẩn bị bề mặt kim loại trước sơn phủ"],
      why: "ANGOS ARG-B 200 mang sức mạnh của máy mài góc vào một dụng cụ không dây, phù hợp công trình ngoài trời hoặc vị trí khó kéo dây/ống khí nén."
    }),
    cordlessProduct({slug:"aros-b-150", name:"Mirka® AROS-B 150 Ø 32 mm max 12V Orbit 5.0 mm", subCat:CHANHAMPIN, subCatLabel:CHANHAMPIN_L,
      img:"images/products/0110-8991150312WB-001.jpg",
      shortDesc: "Máy chà nhám ly tâm dùng pin Ø32mm, tốc độ điều chỉnh 4.000-8.000 RPM.",
      lead: "Mirka® AROS-B 150 là máy chà nhám spot-repair dùng pin, độ ồn thấp và tốc độ điều chỉnh linh hoạt 4.000–8.000 RPM, biên độ 5.0mm.",
      features: [
        ["🔋","Pin Li-ion 10.8V, sạc đầy chỉ trong 45 phút"],
        ["🔇","Độ ồn thấp, thao tác êm ái"],
        ["🎛️","Tốc độ điều chỉnh 4.000–8.000 RPM"],
        ["📶","Bluetooth low-energy, tùy chỉnh Auto-Stop theo ứng dụng"],
        ["⏱️","Hoạt động liên tục tới 16 giờ cho công việc spot-repair"]
      ],
      specs: {"Mã hàng":"8991150312WB","Đường kính":"32 mm","Biên độ (Orbit)":"5.0 mm","Tốc độ":"4.000-8.000 RPM","Điện áp pin":"12V max, pin 10.8V Li-ion"},
      applications: ["Sửa lỗi sơn cục bộ (spot repair) không cần dây/ống khí nén","Công việc di chuyển liên tục giữa nhiều xe/khu vực","Xưởng ưu tiên môi trường làm việc yên tĩnh"],
      why: "AROS-B 150 giải phóng thợ sơn khỏi dây điện và ống khí nén khi làm spot-repair — với thời lượng pin tới 16 giờ, gần như dùng cả ngày không cần sạc lại."
    }),
    cordlessProduct({slug:"aos-b-130", name:"Mirka® AOS-B 130 Ø 32 mm max 12V Orbit 3.0 mm", subCat:CHANHAMPIN, subCatLabel:CHANHAMPIN_L,
      img:"images/products/0113-8991230312WB-001.jpg",
      shortDesc: "Máy chà nhám quỹ đạo dùng pin Ø32mm, đạt giải thưởng thiết kế cho spot-repair.",
      lead: "Mirka® AOS-B 130 là máy chà nhám quỹ đạo dùng pin đạt giải thưởng, thiết kế chuyên cho công việc sửa lỗi sơn cục bộ (spot repair) chuyên nghiệp.",
      features: [
        ["🏆","Thiết kế đạt giải thưởng, chuyên cho spot-repair"],
        ["🔋","Pin Li-ion 10.8V, sạc nhanh 45 phút"],
        ["✨","Biên độ 3.0mm cho độ hoàn thiện mịn"],
        ["📶","Bluetooth low-energy, Auto-Stop tùy chỉnh"],
        ["🪶","Nhỏ gọn, nhẹ, thao tác một tay"]
      ],
      specs: {"Mã hàng":"8991230312WB","Đường kính":"32 mm","Biên độ (Orbit)":"3.0 mm","Điện áp pin":"12V max, pin 10.8V Li-ion"},
      applications: ["Sửa lỗi sơn cục bộ (spot repair) chuyên nghiệp","Công việc cần độ hoàn thiện mịn, ít vệt xước","Xưởng dịch vụ di động không có nguồn điện cố định"],
      why: "Là mẫu máy đạt giải thưởng thiết kế, AOS-B 130 tối ưu riêng cho spot-repair — công việc đòi hỏi độ chính xác cao trên diện tích rất nhỏ."
    }),
    cordlessProduct({slug:"arop-b-312", name:"Mirka® AROP-B 312 Ø 77 mm max 12V Orbit 12.0 mm", subCat:DANHBONGPIN, subCatLabel:DANHBONGPIN_L,
      img:"images/products/0108-8991012311WB-001.jpg",
      shortDesc: "Máy đánh bóng ly tâm dùng pin Ø77mm, biên độ lớn 12mm, cực êm.",
      lead: "Mirka® AROP-B 312 là máy đánh bóng ly tâm (random orbital) dùng pin cho spot-repair, nhẹ nhàng, linh hoạt và cực kỳ êm ái với biên độ 12mm.",
      features: [
        ["🔋","Pin Li-ion 12V max, không dây hoàn toàn"],
        ["🔇","Độ ồn cực thấp, gần như không gây tiếng ồn"],
        ["🎯","Biên độ 12.0mm cho đánh bóng nhanh, hiệu quả"],
        ["🪶","Nhẹ, linh hoạt, thao tác một tay"],
        ["📶","Kết nối Bluetooth low-energy"]
      ],
      specs: {"Mã hàng":"8991012311WB","Đường kính":"77 mm","Biên độ (Orbit)":"12.0 mm","Điện áp pin":"12V max (Li-ion)","Chế độ":"Ly tâm (Random Orbital)"},
      applications: ["Đánh bóng spot-repair diện tích nhỏ không cần dây/ống khí nén","Xử lý vết xước nhẹ, oxy hóa cục bộ trên sơn","Công việc cần thao tác êm, không gây tiếng ồn"],
      why: "Độ ồn cực thấp của AROP-B 312 phù hợp môi trường làm việc yêu cầu yên tĩnh, trong khi biên độ 12mm vẫn đảm bảo tốc độ đánh bóng hiệu quả."
    }),
    cordlessProduct({slug:"arp-b-300", name:"Mirka® ARP-B 300 Ø 77 mm max 12V", subCat:DANHBONGPIN, subCatLabel:DANHBONGPIN_L,
      img:"images/products/0107-8991000311WB-001.jpg",
      shortDesc: "Máy đánh bóng xoay dùng pin Ø77mm, chuyên đánh bóng khu vực nhỏ.",
      lead: "Mirka® ARP-B 300 là máy đánh bóng xoay (rotary) dùng pin với đế 77mm, hoàn hảo cho đánh bóng các khu vực nhỏ mà không cần dây điện hay khí nén.",
      features: [
        ["🔋","Pin Li-ion 12V max, không dây hoàn toàn"],
        ["🔄","Chế độ xoay (Rotary) cho lực đánh bóng mạnh"],
        ["📐","Đế 77mm (3 inch) phù hợp khu vực nhỏ"],
        ["📶","Kết nối Bluetooth low-energy"],
        ["🪶","Nhỏ gọn, thao tác linh hoạt một tay"]
      ],
      specs: {"Mã hàng":"8991000311WB","Đường kính":"77 mm","Chế độ":"Xoay (Rotary)","Điện áp pin":"12V max (Li-ion)"},
      applications: ["Đánh bóng khu vực nhỏ không cần dây/ống khí nén","Xử lý điểm sơn cần đánh bóng cục bộ","Công việc detailing di động"],
      why: "Chế độ xoay của ARP-B 300 cho lực đánh bóng mạnh hơn ly tâm trên cùng diện tích nhỏ — phù hợp khi cần xử lý dứt điểm một điểm sơn cụ thể."
    }),
    cordlessProduct({slug:"aros-b-350", name:"Mirka® AROS-B 350 Ø 77 mm max 12V Orbit 5.0 mm", subCat:CHANHAMPIN, subCatLabel:CHANHAMPIN_L,
      img:"images/products/0112-8991153502-001.jpg",
      shortDesc: "Máy chà nhám ly tâm dùng pin Ø77mm, biên độ 5.0mm, không dây 12V.",
      lead: "Mirka® AROS-B 350 là máy chà nhám ly tâm dùng pin 12V DC với đế 77mm, biên độ 5.0mm, phù hợp chà nhám không dây cho khu vực vừa và nhỏ.",
      features: [
        ["🔋","Pin Li-ion 12V DC, không dây hoàn toàn"],
        ["⚙️","Động cơ brushless bền bỉ"],
        ["📐","Đế 77mm, biên độ 5.0mm cho chà nhám đa dụng"],
        ["📶","Kết nối Bluetooth low-energy"],
        ["🪶","Nhẹ, công thái học, thao tác thoải mái"]
      ],
      specs: {"Mã hàng":"8991153502","Đường kính":"77 mm","Biên độ (Orbit)":"5.0 mm","Điện áp pin":"12V DC (Li-ion)"},
      applications: ["Chà nhám không dây cho khu vực vừa và nhỏ","Sửa chữa di động không có nguồn điện/khí nén cố định","Công việc chà nhám sơn ô tô, đồ gỗ nhỏ"],
      why: "Với biên độ 5.0mm cân bằng giữa tốc độ và độ mịn, AROS-B 350 phù hợp làm máy chà nhám chính cho các công việc không dây đa dụng."
    }),
    cordlessProduct({slug:"aros-b-325", name:"Mirka® AROS-B 325 Ø 77 mm max 12V Orbit 2.5 mm", subCat:CHANHAMPIN, subCatLabel:CHANHAMPIN_L,
      img:"images/products/0111-8991153252-001.jpg",
      shortDesc: "Máy chà nhám ly tâm dùng pin Ø77mm, biên độ mịn 2.5mm.",
      lead: "Mirka® AROS-B 325 mang biên độ mịn 2.5mm vào dòng máy chà nhám dùng pin 12V, chuyên cho các bước hoàn thiện tinh không dây.",
      features: [
        ["🔋","Pin Li-ion 12V DC, không dây hoàn toàn"],
        ["✨","Biên độ 2.5mm cho độ hoàn thiện mịn"],
        ["⚙️","Động cơ brushless bền bỉ"],
        ["📶","Kết nối Bluetooth low-energy"],
        ["🪶","Nhẹ, công thái học"]
      ],
      specs: {"Mã hàng":"8991153252","Đường kính":"77 mm","Biên độ (Orbit)":"2.5 mm","Điện áp pin":"12V DC (Li-ion)"},
      applications: ["Hoàn thiện tinh không dây trước sơn phủ","Xả nhám lớp lót ở khu vực không có nguồn điện","Công việc cần độ mịn cao, ít vệt xước"],
      why: "AROS-B 325 là lựa chọn cho bước hoàn thiện tinh trong bộ công cụ không dây — biên độ nhỏ giúp hạn chế vệt xoáy tốt hơn các bản biên độ lớn."
    })
  ];

  var DEXOS = "hut-bui-dexos", DEXOS_L = "Dòng DEXOS";
  var CHUAN = "hut-bui-chuan", CHUAN_L = "Máy hút bụi chuyên nghiệp M/L-class";

  var dustList = [
    dustExtractorProduct({slug:"dexos-1217-hose4m", name:"Mirka® DEXOS 1217 M AFC with Hose 4m", subCat:DEXOS, subCatLabel:DEXOS_L,
      img:"images/products/0184-MIX12171221-001.jpg",
      shortDesc: "DEXOS 1217 M AFC kèm sẵn ống hút 4m, sẵn sàng kết nối máy chà nhám.",
      lead: "Mirka® DEXOS 1217 M AFC with Hose 4m là bộ máy hút bụi compact 17 lít kèm sẵn ống hút dài 4m, sẵn sàng sử dụng ngay không cần mua thêm phụ kiện.",
      features: [
        ["📦","Trọn bộ kèm ống hút 4m, dùng ngay không cần mua thêm"],
        ["⚙️","Chuẩn lọc M-class, tự động làm sạch bộ lọc (AFC)"],
        ["💧","Sử dụng được cả chế độ khô và ướt"],
        ["🔌","Auto-Start đồng bộ với máy chà nhám"],
        ["🪶","Thiết kế compact 17 lít, dễ di chuyển"]
      ],
      specs: {"Mã hàng":"MIX12171221","Dung tích thùng":"17 lít","Chuẩn lọc":"M-class","Kèm theo":"Ống hút 4m","Chế độ":"Khô & ướt"},
      applications: ["Kết nối trực tiếp máy chà nhám điện Mirka không cần mua thêm ống","Xưởng nhỏ cần bộ giải pháp trọn gói","Lắp đặt nhanh, sẵn sàng vận hành ngay"],
      why: "Bộ kèm ống hút giúp tiết kiệm thời gian và chi phí so với mua rời máy hút và ống — phù hợp khi thiết lập trạm làm việc mới."
    }),
    dustExtractorProduct({slug:"dexos-1217-hose-sleeve-4m", name:"Mirka® DEXOS 1217 M AFC with Hose and Sleeve 4m", subCat:DEXOS, subCatLabel:DEXOS_L,
      img:"images/products/0185-MIX12171222-001.jpg",
      shortDesc: "DEXOS 1217 M AFC kèm ống hút và vỏ bọc 4m, bảo vệ dây/ống tối đa.",
      lead: "Phiên bản đầy đủ nhất của DEXOS 1217, kèm cả ống hút và vỏ bọc bảo vệ (sleeve) dài 4m, gọn gàng và bền hơn khi sử dụng thường xuyên.",
      features: [
        ["📦","Trọn bộ ống hút + vỏ bọc bảo vệ 4m"],
        ["🛡️","Vỏ bọc giúp gọn gàng, giảm rối dây/ống"],
        ["⚙️","Chuẩn lọc M-class, tự làm sạch bộ lọc (AFC)"],
        ["💧","Dùng được cả chế độ khô và ướt"],
        ["🔌","Auto-Start đồng bộ với máy chà nhám"]
      ],
      specs: {"Mã hàng":"MIX12171222","Dung tích thùng":"17 lít","Chuẩn lọc":"M-class","Kèm theo":"Ống hút + vỏ bọc 4m"},
      applications: ["Xưởng sử dụng thường xuyên cần độ bền cao cho ống/dây","Trạm làm việc cố định cần gọn gàng, chuyên nghiệp","Giảm thời gian bảo trì, thay ống do rối/đứt"],
      why: "Vỏ bọc bảo vệ giúp gộp ống hút và dây điện gọn trong một bó duy nhất, giảm nguy cơ vướng víu và kéo dài tuổi thọ phụ kiện khi dùng hằng ngày."
    }),
    dustExtractorProduct({slug:"dust-extractor-1242m", name:"Mirka® Dust Extractor 1242 M", subCat:CHUAN, subCatLabel:CHUAN_L,
      img:"images/products/0143-8999227111.jpg",
      shortDesc: "Máy hút bụi chuyên nghiệp chuẩn M-class, AutoStart, tự làm sạch lọc.",
      lead: "Mirka® Dust Extractor 1242 M là máy hút bụi công nghiệp chuẩn M-class với chức năng AutoStart và tự động làm sạch bộ lọc, phù hợp xưởng chuyên nghiệp quy mô vừa.",
      features: [
        ["⚙️","Chuẩn lọc M-class, an toàn với bụi mịn công nghiệp"],
        ["🔌","Chức năng AutoStart đồng bộ máy chà nhám"],
        ["🔄","Tự động làm sạch bộ lọc, duy trì lực hút ổn định"],
        ["🏭","Công suất phù hợp xưởng quy mô vừa"],
        ["♻️","Độ bền cao cho sử dụng công nghiệp liên tục"]
      ],
      specs: {"Mã hàng":"8999227111","Chuẩn lọc":"M-class","Tính năng":"AutoStart, tự làm sạch lọc","Loại":"Máy hút bụi chuyên nghiệp"},
      applications: ["Xưởng chuyên nghiệp quy mô vừa cần lực hút mạnh, ổn định","Kết nối nhiều loại máy chà nhám điện/khí nén Mirka","Sử dụng liên tục cường độ cao hằng ngày"],
      why: "Dòng Dust Extractor tiêu chuẩn cho công suất và độ bền cao hơn DEXOS compact, phù hợp xưởng có khối lượng công việc lớn, sử dụng liên tục."
    }),
    dustExtractorProduct({slug:"dust-extractor-1025l", name:"Mirka® Dust Extractor 1025 L", subCat:CHUAN, subCatLabel:CHUAN_L,
      img:"images/products/0140-8999000111.jpg",
      shortDesc: "Máy hút bụi chuẩn L-class, công nghệ Push&Clean, AutoStart.",
      lead: "Mirka® Dust Extractor 1025 L đạt chuẩn lọc L-class với công nghệ làm sạch lọc Push&Clean và chức năng AutoStart, phù hợp bụi độc hại mức trung bình.",
      features: [
        ["⚙️","Chuẩn lọc L-class cho bụi độc hại mức trung bình"],
        ["🔄","Công nghệ Push&Clean làm sạch lọc nhanh chóng"],
        ["🔌","Chức năng AutoStart đồng bộ máy chà nhám"],
        ["🏭","Phù hợp xưởng chuyên nghiệp đa ứng dụng"],
        ["♻️","Độ bền cao cho sử dụng công nghiệp"]
      ],
      specs: {"Mã hàng":"8999000111","Chuẩn lọc":"L-class","Công nghệ lọc":"Push&Clean","Tính năng":"AutoStart"},
      applications: ["Xưởng chuyên nghiệp xử lý bụi độc hại mức trung bình","Kết hợp máy chà nhám gỗ, kim loại, composite","Công việc cần làm sạch lọc nhanh giữa ca làm việc"],
      why: "Chuẩn L-class phù hợp với hầu hết ứng dụng chà nhám phổ thông, trong khi Push&Clean giúp thao tác làm sạch lọc nhanh mà không cần tháo rời."
    }),
    dustExtractorProduct({slug:"dust-extractor-1230l", name:"Mirka® Dust Extractor 1230 L", subCat:CHUAN, subCatLabel:CHUAN_L,
      img:"images/products/0015-8999200111-Mirka-Dust-Extractor-1230-L-AFC-EU-230V-1.jpg",
      shortDesc: "Máy hút bụi chuyên nghiệp chuẩn L-class, AutoStart, tự làm sạch lọc.",
      lead: "Mirka® Dust Extractor 1230 L là máy hút bụi chuyên nghiệp chuẩn L-class với chức năng AutoStart và làm sạch bộ lọc tự động, cho lực hút ổn định suốt ca làm việc.",
      features: [
        ["⚙️","Chuẩn lọc L-class chuyên nghiệp"],
        ["🔄","Tự động làm sạch bộ lọc (AFC)"],
        ["🔌","Chức năng AutoStart tiện lợi"],
        ["🏭","Dung tích lớn phù hợp xưởng quy mô vừa và lớn"],
        ["♻️","Độ bền cao cho vận hành liên tục"]
      ],
      specs: {"Mã hàng":"8999200111","Chuẩn lọc":"L-class","Tính năng":"AutoStart, tự làm sạch lọc (AFC)"},
      applications: ["Xưởng quy mô vừa và lớn cần lực hút ổn định lâu dài","Kết nối đồng thời nhiều máy chà nhám trong xưởng","Vận hành liên tục nhiều giờ trong ca làm việc"],
      why: "Tính năng tự làm sạch lọc (AFC) giúp duy trì lực hút ổn định suốt ca làm việc dài mà không cần dừng máy để vệ sinh thủ công."
    }),
    dustExtractorProduct({slug:"dust-extractor-1230m", name:"Mirka® Dust Extractor 1230 M", subCat:CHUAN, subCatLabel:CHUAN_L,
      img:"images/products/0142-8999220111.jpg",
      shortDesc: "Máy hút bụi chuyên nghiệp chuẩn M-class, AutoStart, tự làm sạch lọc.",
      lead: "Mirka® Dust Extractor 1230 M mang chuẩn lọc M-class vào dung tích lớn của dòng 1230, phù hợp xưởng cần lực hút mạnh cho bụi công nghiệp.",
      features: [
        ["⚙️","Chuẩn lọc M-class cho bụi công nghiệp"],
        ["🔄","Tự động làm sạch bộ lọc (AFC)"],
        ["🔌","Chức năng AutoStart tiện lợi"],
        ["🏭","Dung tích lớn phù hợp xưởng quy mô vừa và lớn"],
        ["♻️","Độ bền cao cho vận hành liên tục"]
      ],
      specs: {"Mã hàng":"8999220111","Chuẩn lọc":"M-class","Tính năng":"AutoStart, tự làm sạch lọc (AFC)"},
      applications: ["Xưởng công nghiệp cần chuẩn lọc M-class dung tích lớn","Kết nối đồng thời nhiều máy chà nhám","Vận hành liên tục cường độ cao"],
      why: "Kết hợp dung tích lớn của dòng 1230 với chuẩn lọc M-class, phù hợp xưởng cần cả công suất hút lẫn mức an toàn bụi cao hơn L-class thông thường."
    }),
    dustExtractorProduct({slug:"dust-extractor-1125l", name:"Mirka® Dust Extractor 1125 L", subCat:CHUAN, subCatLabel:CHUAN_L,
      img:"images/products/0141-8999000222-001.jpg",
      shortDesc: "Máy hút bụi chống tĩnh điện chuẩn L-class, hiệu suất cao.",
      lead: "Mirka® Dust Extractor 1125 L là máy hút bụi hiệu suất cao, chống tĩnh điện (Antistatic), tích hợp AutoStart và công nghệ Push & Clean làm sạch lọc.",
      features: [
        ["⚡","Chống tĩnh điện (Antistatic) cho ống hút và dây"],
        ["⚙️","Chuẩn lọc L-class, hiệu suất hút cao"],
        ["🔄","Công nghệ Push & Clean làm sạch lọc"],
        ["🔌","Chức năng AutoStart tiện lợi"],
        ["🏭","Phù hợp xưởng công nghiệp yêu cầu cao"]
      ],
      specs: {"Mã hàng":"8999000222","Chuẩn lọc":"L-class","Đặc tính":"Antistatic (chống tĩnh điện)","Tính năng":"AutoStart, Push & Clean"},
      applications: ["Xưởng cần kiểm soát tĩnh điện (composite, sơn tĩnh điện)","Ứng dụng công nghiệp yêu cầu hiệu suất hút cao","Kết hợp với vật liệu mài dễ tích điện"],
      why: "Tính năng chống tĩnh điện giúp giảm nguy cơ tia lửa tĩnh điện khi hút bụi mịn — quan trọng với các xưởng làm việc với composite hoặc dung môi dễ cháy."
    }),
    dustExtractorProduct({slug:"dexos-1230m", name:"Mirka® DEXOS 1230 M AFC", subCat:DEXOS, subCatLabel:DEXOS_L,
      img:"images/products/0186-MIX12301220-001.jpg",
      shortDesc: "DEXOS 1230 M AFC — máy hút bụi cỡ lớn 30 lít, dùng khô và ướt.",
      lead: "Mirka® DEXOS 1230 M AFC là phiên bản full-size của dòng DEXOS, dung tích 30 lít, chuẩn M-class, tự động làm sạch bộ lọc, dùng được cả khô và ướt.",
      features: [
        ["⚙️","Chuẩn lọc M-class, an toàn với bụi mịn công nghiệp"],
        ["🔄","Tự động làm sạch bộ lọc (AFC)"],
        ["💧","Sử dụng được cả chế độ khô và ướt"],
        ["📦","Dung tích lớn 30 lít, ít phải đổ thùng"],
        ["🔌","Auto-Start đồng bộ với máy chà nhám"]
      ],
      specs: {"Mã hàng":"MIX12301220","Dung tích thùng":"30 lít","Chuẩn lọc":"M-class","Chế độ":"Khô & ướt","Tính năng":"Auto-Start, tự làm sạch lọc"},
      applications: ["Xưởng cần dung tích lớn, ít gián đoạn đổ thùng","Kết nối nhiều máy chà nhám cùng lúc","Công việc khối lượng lớn liên tục cả ngày"],
      why: "Khi DEXOS 1217 (17L) phải đổ thùng quá thường xuyên, DEXOS 1230 với dung tích 30L giúp kéo dài thời gian làm việc liên tục mà không gián đoạn."
    }),
    dustExtractorProduct({slug:"dexos-1230m-hose4m", name:"Mirka® DEXOS 1230 M AFC with Hose 4m", subCat:DEXOS, subCatLabel:DEXOS_L,
      img:"images/products/0187-MIX12301221-001.jpg",
      shortDesc: "DEXOS 1230 M AFC kèm sẵn ống hút 4m, sẵn sàng kết nối.",
      lead: "Mirka® DEXOS 1230 M AFC with Hose 4m là bộ máy hút bụi 30 lít kèm sẵn ống hút dài 4m, sẵn sàng sử dụng ngay cho trạm làm việc quy mô lớn.",
      features: [
        ["📦","Trọn bộ kèm ống hút 4m, dùng ngay"],
        ["⚙️","Chuẩn lọc M-class, tự làm sạch bộ lọc (AFC)"],
        ["💧","Dùng được cả chế độ khô và ướt"],
        ["📦","Dung tích lớn 30 lít"],
        ["🔌","Auto-Start đồng bộ với máy chà nhám"]
      ],
      specs: {"Mã hàng":"MIX12301221","Dung tích thùng":"30 lít","Chuẩn lọc":"M-class","Kèm theo":"Ống hút 4m"},
      applications: ["Thiết lập trạm làm việc quy mô lớn nhanh chóng","Xưởng cần dung tích lớn kèm phụ kiện đầy đủ","Tiết kiệm chi phí mua ống rời"],
      why: "Với dung tích 30L kèm sẵn ống hút, đây là lựa chọn trọn gói cho các trạm làm việc cố định quy mô lớn, không cần mua thêm phụ kiện."
    }),
    dustExtractorProduct({slug:"dexos-1230m-hose-sleeve-4m", name:"Mirka® DEXOS 1230 M AFC with Hose and Sleeve 4m", subCat:DEXOS, subCatLabel:DEXOS_L,
      img:"images/products/0188-MIX12301222-001.jpg",
      shortDesc: "DEXOS 1230 M AFC kèm ống hút và vỏ bọc 4m, phiên bản đầy đủ nhất.",
      lead: "Phiên bản đầy đủ nhất của DEXOS 1230, kèm cả ống hút và vỏ bọc bảo vệ (sleeve) dài 4m — gọn gàng, bền bỉ cho trạm làm việc chuyên nghiệp.",
      features: [
        ["📦","Trọn bộ ống hút + vỏ bọc bảo vệ 4m"],
        ["🛡️","Vỏ bọc giúp gọn gàng, bền hơn khi dùng thường xuyên"],
        ["⚙️","Chuẩn lọc M-class, tự làm sạch bộ lọc (AFC)"],
        ["💧","Dùng được cả chế độ khô và ướt"],
        ["📦","Dung tích lớn 30 lít"]
      ],
      specs: {"Mã hàng":"MIX12301222","Dung tích thùng":"30 lít","Chuẩn lọc":"M-class","Kèm theo":"Ống hút + vỏ bọc 4m"},
      applications: ["Trạm làm việc cố định chuyên nghiệp, sử dụng hằng ngày","Xưởng lớn cần độ bền cao cho ống/dây trong thời gian dài","Giảm chi phí bảo trì, thay thế phụ kiện"],
      why: "Đây là bộ đầy đủ nhất của dòng DEXOS 1230 — phù hợp đầu tư một lần cho trạm làm việc chuyên nghiệp cần độ bền và sự gọn gàng tối đa."
    })
  ];

  window.PRODUCTS = (window.PRODUCTS || []).concat(cordlessList, dustList);

})();

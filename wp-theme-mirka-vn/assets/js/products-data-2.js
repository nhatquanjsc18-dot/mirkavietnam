// Bổ sung 71 sản phẩm — toàn bộ danh mục Máy chà nhám khí nén (39) & Hợp chất đánh bóng (32) từ mirka.com
// Nối vào mảng PRODUCTS chung (products-data.js phải được nạp trước file này)

(function () {

  function pneumaticProduct(opts) {
    var dustLabel = opts.dust === "CV" ? "hút bụi trung tâm (Central Vacuum)"
      : opts.dust === "DB" ? "thu bụi bằng túi (Dust Bag)"
      : "không hút bụi (Non-Vacuum)";
    var dustNote = opts.dust === "CV" ? ", kết nối hệ thống hút bụi trung tâm của xưởng"
      : opts.dust === "DB" ? ", thu bụi ngay tại máy bằng túi vải tiện lợi"
      : ", phù hợp lắp thêm hệ thống hút bụi rời hoặc dùng nơi chưa có đường hút trung tâm";
    return {
      slug: opts.slug,
      name: opts.name,
      seoKeyword: opts.name,
      category: "khinen", categoryLabel: "Máy chà nhám khí nén",
      subCat: opts.subCat, subCatLabel: opts.subCatLabel,
      img: opts.img,
      shortDesc: opts.shortDesc,
      lead: "Mirka® " + opts.model + " là " + opts.typeDesc + " Ø " + opts.dia + " mm, biên độ " + opts.orbit + " mm" + dustNote + " — dòng khí nén bền bỉ cho môi trường xưởng chuyên nghiệp.",
      features: [
        ["⚙️", "Động cơ khí nén bền bỉ, vận hành ổn định khi dùng liên tục"],
        ["📐", "Đầu mài Ø " + opts.dia + " mm, biên độ dao động " + opts.orbit + " mm"],
        ["💨", opts.dust === "CV" ? "Hút bụi trung tâm, môi trường làm việc sạch tối đa" : opts.dust === "DB" ? "Túi hút bụi tích hợp, không cần đường ống trung tâm" : "Không hút bụi tích hợp, linh hoạt lắp phụ kiện rời"],
        ["🏭", "Nhẹ, bền, phù hợp cường độ sử dụng cao trong xưởng công nghiệp"]
      ],
      specs: {
        "Mã hàng": opts.code,
        "Đường kính đầu mài": opts.dia + " mm",
        "Biên độ (Orbit)": opts.orbit + " mm",
        "Hệ thống hút bụi": dustLabel,
        "Loại động cơ": "Khí nén"
      },
      applications: opts.applications || [
        "Chà nhám công nghiệp cường độ cao, liên tục nhiều giờ",
        "Xưởng cơ khí, đóng tàu, sản xuất composite, sơn ô tô",
        "Môi trường xưởng đã có sẵn hệ thống khí nén"
      ],
      why: opts.why || ("Máy khí nén " + opts.model + " phù hợp cho xưởng đã có hệ thống khí nén sẵn — vận hành bền bỉ, ít hao mòn hơn động cơ điện khi sử dụng liên tục với cường độ cao suốt ca làm việc.")
    };
  }

  function polishProduct(opts) {
    return {
      slug: opts.slug,
      name: opts.name,
      seoKeyword: opts.name,
      category: "danhbong", categoryLabel: "Đánh bóng",
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

  var ROS = "khi-nen-ros", ROS_L = "Máy chà nhám khí nén ROS";
  var OS = "khi-nen-os", OS_L = "Máy chà nhám khí nén OS";
  var PROS = "khi-nen-pros", PROS_L = "Máy chà nhám khí nén PROS";
  var SPEC = "khi-nen-chuyen-dung", SPEC_L = "Máy khí nén chuyên dụng";

  var pneumaticList = [
    // ===== ROS series (17) =====
    pneumaticProduct({slug:"ros-650cv", name:"Mirka® ROS 650CV Ø 150 mm Central Vacuum orbit 5.0 mm", model:"ROS 650CV", code:"MR-650CV", dia:150, orbit:"5.0", dust:"CV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén", shortDesc:"Máy chà nhám ly tâm khí nén Ø150mm, hút bụi trung tâm, biên độ 5.0mm.", img:MIRKA_IMG_BASE + "0126-8993000111-001.jpg"}),
    pneumaticProduct({slug:"ros2-650cv", name:"Mirka® ROS2 650CV Ø 150 mm Central Vacuum orbit 5.0 mm", model:"ROS2 650CV", code:"MR-650THCV", dia:150, orbit:"5.0", dust:"CV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén hai tay cầm", shortDesc:"Máy chà nhám khí nén hai tay cầm Ø150mm, hút bụi trung tâm, nhiều tính năng.", img:MIRKA_IMG_BASE + "0131-8994650111-002.jpg"}),
    pneumaticProduct({slug:"ros-525cv", name:"Mirka® ROS 525CV Ø 125 mm Central Vacuum orbit 2.5 mm", model:"ROS 525CV", code:"MR-525CV", dia:125, orbit:"2.5", dust:"CV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén", shortDesc:"Máy chà nhám ly tâm khí nén Ø125mm, hút bụi trung tâm, biên độ mịn 2.5mm.", img:MIRKA_IMG_BASE + "0153-Exzenter-Druckluft-ROS-125-mm.jpg"}),
    pneumaticProduct({slug:"ros-550cv", name:"Mirka® ROS 550CV Ø 125 mm Central Vacuum orbit 5.0 mm", model:"ROS 550CV", code:"MR-550CV", dia:125, orbit:"5.0", dust:"CV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén", shortDesc:"Máy chà nhám ly tâm khí nén Ø125mm, hút bụi trung tâm, biên độ 5.0mm.", img:MIRKA_IMG_BASE + "0154-Exzenter-Druckluft-ROS-125-mm.jpg"}),
    pneumaticProduct({slug:"ros2-610cv", name:"Mirka® ROS2 610CV Ø 150 mm Central Vacuum orbit 10.0 mm", model:"ROS2 610CV", code:"MR-610CV", dia:150, orbit:"10.0", dust:"CV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén biên độ lớn", shortDesc:"Máy chà nhám khí nén Ø150mm, biên độ 10.0mm cho bóc tách nhanh, hút bụi trung tâm.", img:MIRKA_IMG_BASE + "0132-8994650111-002.jpg"}),
    pneumaticProduct({slug:"ros-625db", name:"Mirka® ROS 625DB Ø 150 mm Dust Bag orbit 2.5 mm", model:"ROS 625DB", code:"MR-625DB", dia:150, orbit:"2.5", dust:"DB", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén", shortDesc:"Máy chà nhám ly tâm khí nén Ø150mm, túi hút bụi, biên độ mịn 2.5mm.", img:MIRKA_IMG_BASE + "0127-8993200111-1.jpg"}),
    pneumaticProduct({slug:"ros-625cv", name:"Mirka® ROS 625CV Ø 150 mm Central Vacuum orbit 2.5 mm", model:"ROS 625CV", code:"MR-625CV", dia:150, orbit:"2.5", dust:"CV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén", shortDesc:"Máy chà nhám ly tâm khí nén Ø150mm, hút bụi trung tâm, biên độ mịn 2.5mm.", img:MIRKA_IMG_BASE + "0155-Exzenter-Druckluft-ROS-150-mm.jpg"}),
    pneumaticProduct({slug:"ros-650db", name:"Mirka® ROS 650DB Ø 150 mm Dust Bag orbit 5.0 mm", model:"ROS 650DB", code:"MR-650DB", dia:150, orbit:"5.0", dust:"DB", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén", shortDesc:"Máy chà nhám ly tâm khí nén Ø150mm, túi hút bụi, biên độ 5.0mm.", img:MIRKA_IMG_BASE + "0127-8993200111-1.jpg"}),
    pneumaticProduct({slug:"ros-550db", name:"Mirka® ROS 550DB Ø 125 mm Dust Bag orbit 5.0 mm", model:"ROS 550DB", code:"MR-550DB", dia:125, orbit:"5.0", dust:"DB", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén", shortDesc:"Máy chà nhám ly tâm khí nén Ø125mm, túi hút bụi, biên độ 5.0mm.", img:MIRKA_IMG_BASE + "0125-8992800111.jpg"}),
    pneumaticProduct({slug:"ros-325cv", name:"Mirka® ROS 325CV Ø 77 mm Central Vacuum orbit 2.5 mm", model:"ROS 325CV", code:"MR-325CV", dia:77, orbit:"2.5", dust:"CV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén nhỏ gọn", shortDesc:"Máy chà nhám ly tâm khí nén nhỏ gọn Ø77mm, hút bụi trung tâm.", img:MIRKA_IMG_BASE + "0156-Exzenter-Druckluft-ROS-77-mm.jpg"}),
    pneumaticProduct({slug:"ros-325nv", name:"Mirka® ROS 325NV Ø 77 mm Non Vacuum orbit 2.5 mm", model:"ROS 325NV", code:"MR-325NV", dia:77, orbit:"2.5", dust:"NV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén nhỏ gọn", shortDesc:"Máy chà nhám ly tâm khí nén nhỏ gọn Ø77mm, không hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0128-8993320111.jpg"}),
    pneumaticProduct({slug:"ros2-510cv", name:"Mirka® ROS2 510CV Ø 125 mm Central Vacuum orbit 10.0 mm", model:"ROS2 510CV", code:"MR-510CV", dia:125, orbit:"10.0", dust:"CV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén biên độ lớn", shortDesc:"Máy chà nhám khí nén Ø125mm, biên độ 10.0mm cho bóc tách nhanh.", img:MIRKA_IMG_BASE + "0130-8994550111-002.jpg"}),
    pneumaticProduct({slug:"ros-150nv", name:"Mirka® ROS 150NV Ø 32 mm Non Vacuum orbit 5.0 mm", model:"ROS 150NV", code:"MR-150NV", dia:32, orbit:"5.0", dust:"NV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén mini", shortDesc:"Máy chà nhám ly tâm khí nén mini Ø32mm, không hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0124-8992450111-1.jpg"}),
    pneumaticProduct({slug:"ros2-850cv", name:"Mirka® ROS2 850CV Ø 200 mm Central Vacuum orbit 5.0 mm", model:"ROS2 850CV", code:"MR-850CV", dia:200, orbit:"5.0", dust:"CV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén cỡ lớn", shortDesc:"Máy chà nhám ly tâm khí nén cỡ lớn Ø200mm, hút bụi trung tâm, năng suất cao.", img:MIRKA_IMG_BASE + "0133-8994850111-003.jpg"}),
    pneumaticProduct({slug:"ros-325db", name:"Mirka® ROS 325DB Ø 77 mm Dust Bag orbit 2.5 mm", model:"ROS 325DB", code:"MR-325DB", dia:77, orbit:"2.5", dust:"DB", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén nhỏ gọn", shortDesc:"Máy chà nhám ly tâm khí nén nhỏ gọn Ø77mm, túi hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0129-8993425111.jpg"}),
    pneumaticProduct({slug:"ros-550nv", name:"Mirka® ROS 550NV Ø 125mm Non Vacuum orbit 5.0 mm", model:"ROS 550NV", code:"MR-5", dia:125, orbit:"5.0", dust:"NV", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén", shortDesc:"Máy chà nhám ly tâm khí nén Ø125mm, không hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0189-MR-5.jpg"}),
    pneumaticProduct({slug:"ros2-610db", name:"Mirka® ROS2 610DB Ø 150 mm Dust Bag orbit 10 mm", model:"ROS2 610DB", code:"MR-610THSGV", dia:150, orbit:"10.0", dust:"DB", subCat:ROS, subCatLabel:ROS_L, typeDesc:"máy chà nhám ly tâm khí nén biên độ lớn", shortDesc:"Máy chà nhám khí nén Ø150mm, biên độ 10.0mm, túi hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0190-MR-610THSGV.jpg"}),

    // ===== OS series (6) =====
    pneumaticProduct({slug:"os-383cv", name:"Mirka® OS 383CV 70 x 198 mm Central Vacuum 3.0 mm orbit", model:"OS 383CV", code:"MR-38CV", dia:"70×198", orbit:"3.0", dust:"CV", subCat:OS, subCatLabel:OS_L, typeDesc:"máy chà nhám quỹ đạo khí nén", shortDesc:"Máy chà nhám quỹ đạo khí nén 70×198mm, hút bụi trung tâm — cho gỗ và thân xe.", img:MIRKA_IMG_BASE + "0115-8991500111-1.jpg", applications:["Chà nhám gỗ và bề mặt sửa chữa thân xe","Xưởng nội thất cần đầu mài dài, thao tác nhanh","Thi công cường độ cao có hệ khí nén trung tâm"]}),
    pneumaticProduct({slug:"os-343cv", name:"Mirka® OS 343CV 75 x 100 mm Central Vacuum 3.0 mm orbit", model:"OS 343CV", code:"MR-34CV", dia:"75×100", orbit:"3.0", dust:"CV", subCat:OS, subCatLabel:OS_L, typeDesc:"máy chà nhám quỹ đạo khí nén nhẹ", shortDesc:"Máy chà nhám quỹ đạo khí nén nhẹ 75×100mm, hút bụi trung tâm, công thái học.", img:MIRKA_IMG_BASE + "0117-8991600111-1.jpg"}),
    pneumaticProduct({slug:"os-343db", name:"Mirka® OS 343DB 75 x 100 mm Dust Bag 3.0 mm orbit", model:"OS 343DB", code:"MR-34DB", dia:"75×100", orbit:"3.0", dust:"DB", subCat:OS, subCatLabel:OS_L, typeDesc:"máy chà nhám quỹ đạo khí nén nhẹ", shortDesc:"Máy chà nhám quỹ đạo khí nén nhẹ 75×100mm, túi hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0118-8991610111-1.jpg"}),
    pneumaticProduct({slug:"os-383db", name:"Mirka® OS 383DB 70 x 198 mm Dust Bag 3.0 mm orbit", model:"OS 383DB", code:"MR-38SGV", dia:"70×198", orbit:"3.0", dust:"DB", subCat:OS, subCatLabel:OS_L, typeDesc:"máy chà nhám quỹ đạo khí nén", shortDesc:"Máy chà nhám quỹ đạo khí nén 70×198mm, túi hút bụi tích hợp — cho gỗ và thân xe.", img:MIRKA_IMG_BASE + "0116-8991510111-new.jpg"}),
    pneumaticProduct({slug:"os-353cv", name:"Mirka® OS 353CV 81 x 133 mm Central Vacuum 3.0 mm orbit", model:"OS 353CV", code:"MR-35CV", dia:"81×133", orbit:"3.0", dust:"CV", subCat:OS, subCatLabel:OS_L, typeDesc:"máy chà nhám quỹ đạo khí nén nhẹ", shortDesc:"Máy chà nhám quỹ đạo khí nén nhẹ 81×133mm, hút bụi trung tâm, công thái học.", img:MIRKA_IMG_BASE + "0119-8991800111-001.jpg"}),
    pneumaticProduct({slug:"os-353db", name:"Mirka® OS 353DB 81 x 133 mm Dust Bag 3.0 mm orbit", model:"OS 353DB", code:"MR-35DB", dia:"81×133", orbit:"3.0", dust:"DB", subCat:OS, subCatLabel:OS_L, typeDesc:"máy chà nhám quỹ đạo khí nén nhẹ", shortDesc:"Máy chà nhám quỹ đạo khí nén nhẹ 81×133mm, túi hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0120-8991810111-1.jpg"}),

    // ===== PROS series (12) — phát triển & sản xuất riêng bởi Mirka =====
    pneumaticProduct({slug:"pros-550cv", name:"Mirka® PROS 550CV Ø 125 mm 5.0 mm orbit", model:"PROS 550CV", code:"8995550111", dia:125, orbit:"5.0", dust:"CV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø125mm, hút bụi trung tâm, do Mirka tự phát triển.", img:MIRKA_IMG_BASE + "0134-8995550111.jpg", why:"Dòng PROS được chính Mirka nghiên cứu và sản xuất, đảm bảo độ bền và độ chính xác cao hơn so với máy khí nén gia công thông thường."}),
    pneumaticProduct({slug:"pros-550db", name:"Mirka® PROS 550DB Ø 125 mm 5.0 mm orbit", model:"PROS 550DB", code:"8995650211", dia:125, orbit:"5.0", dust:"DB", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø125mm, túi hút bụi, do Mirka tự phát triển.", img:MIRKA_IMG_BASE + "0137-8995650211-001.jpg"}),
    pneumaticProduct({slug:"pros-525nv", name:"Mirka® PROS 525NV Ø 125 mm orbit 2.5 mm Non-vacuum", model:"PROS 525NV", code:"Mirka-Pros-525NV", dia:125, orbit:"2.5", dust:"NV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø125mm, biên độ mịn 2.5mm, không hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0194-Mirka-Pros-525NV-b.jpg"}),
    pneumaticProduct({slug:"pros-550nv", name:"Mirka® PROS 550NV Ø 125 mm orbit 5 mm Non-vacuum", model:"PROS 550NV", code:"Mirka-Pros-550NV", dia:125, orbit:"5.0", dust:"NV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø125mm, không hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0195-Mirka-Pros-550NV-b.jpg"}),
    pneumaticProduct({slug:"pros-580nv", name:"Mirka® PROS 580NV Ø 125 mm orbit 8 mm Non-vacuum", model:"PROS 580NV", code:"Mirka-Pros-580NV", dia:125, orbit:"8.0", dust:"NV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS biên độ lớn", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø125mm, biên độ 8mm cho bóc tách nhanh.", img:MIRKA_IMG_BASE + "0196-Mirka-Pros-580NV-b.jpg"}),
    pneumaticProduct({slug:"pros-580cv", name:"Mirka® PROS 580CV Ø 125 mm orbit 5 mm", model:"PROS 580CV", code:"PROS-MRP550-580CV", dia:125, orbit:"5.0", dust:"CV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø125mm, hút bụi trung tâm.", img:MIRKA_IMG_BASE + "0205-PROS-MRP550-580CV.jpg"}),
    pneumaticProduct({slug:"pros-680cv", name:"Mirka® PROS 680CV Ø 150 mm 8.0 mm orbit", model:"PROS 680CV", code:"8995680111", dia:150, orbit:"8.0", dust:"CV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS biên độ lớn", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø150mm, biên độ 8.0mm, hút bụi trung tâm.", img:MIRKA_IMG_BASE + "0139-8995680111.jpg"}),
    pneumaticProduct({slug:"pros-650cv", name:"Mirka® PROS 650CV Ø 150 mm 5.0 mm orbit", model:"PROS 650CV", code:"8995650111", dia:150, orbit:"5.0", dust:"CV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø150mm, hút bụi trung tâm.", img:MIRKA_IMG_BASE + "0136-8995650111-a.jpg"}),
    pneumaticProduct({slug:"pros-625cv", name:"Mirka® PROS 625CV Ø 150 mm 2.5 mm orbit", model:"PROS 625CV", code:"8995625111", dia:150, orbit:"2.5", dust:"CV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø150mm, biên độ mịn 2.5mm, hút bụi trung tâm.", img:MIRKA_IMG_BASE + "0135-8995625111.jpg"}),
    pneumaticProduct({slug:"pros-650db", name:"Mirka® PROS 650DB Ø 150 mm 5.0 mm orbit", model:"PROS 650DB", code:"8995650211-2", dia:150, orbit:"5.0", dust:"DB", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø150mm, túi hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0138-8995650211-001.jpg"}),
    pneumaticProduct({slug:"pros-650nv", name:"Mirka® PROS 650NV Ø 150 mm orbit 5 mm Non-vacuum", model:"PROS 650NV", code:"Mirka-Pros-650NV", dia:150, orbit:"5.0", dust:"NV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø150mm, không hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0197-Mirka-Pros-650NV-b.jpg"}),
    pneumaticProduct({slug:"pros-680nv", name:"Mirka® PROS 680NV Ø 150 mm orbit 8 mm Non-vacuum", model:"PROS 680NV", code:"Mirka-Pros-680NV", dia:150, orbit:"8.0", dust:"NV", subCat:PROS, subCatLabel:PROS_L, typeDesc:"máy chà nhám ly tâm khí nén PROS biên độ lớn", shortDesc:"Máy chà nhám ly tâm khí nén PROS Ø150mm, biên độ 8mm, không hút bụi tích hợp.", img:MIRKA_IMG_BASE + "0198-Mirka-Pros-650NV-b.jpg"}),

    // ===== Chuyên dụng (4) =====
    {
      slug: "aos-130nv", name: "Mirka® AOS 130NV Ø 32 mm 3.0 mm orbit", seoKeyword: "Mirka® AOS 130NV Ø 32 mm 3.0 mm orbit",
      category: "khinen", categoryLabel: "Máy chà nhám khí nén", subCat: SPEC, subCatLabel: SPEC_L,
      img: MIRKA_IMG_BASE + "0121-8992330111.jpg",
      shortDesc: "Máy chà nhám khí nén mini Ø32mm chuyên xử lý điểm lỗi sơn (denibbing).",
      lead: "Mirka® AOS 130NV là máy chà nhám ly tâm khí nén siêu nhỏ gọn, chuyên dùng để xử lý các điểm lỗi nhỏ trên bề mặt sơn (denibbing) — thao tác chính xác trong không gian hạn chế.",
      features: [["⚡","Kích thước siêu nhỏ gọn Ø32mm, thao tác một tay"],["🎯","Chuyên xử lý điểm lỗi sơn nhỏ (denibbing)"],["⚙️","Động cơ khí nén bền, phản hồi nhanh"],["✨","Biên độ 3.0mm cho độ mịn cao"]],
      specs: {"Mã hàng":"8992330111","Đường kính đầu mài":"32 mm","Biên độ (Orbit)":"3.0 mm","Ứng dụng chính":"Denibbing / sửa lỗi sơn nhỏ"},
      applications: ["Xử lý hạt bụi, lỗi sơn nhỏ trên bề mặt vừa sơn", "Sửa lỗi cục bộ trong xưởng sơn ô tô", "Thao tác tại các vị trí không gian hẹp"],
      why: "Khi chỉ cần xử lý một điểm lỗi nhỏ, dùng máy chà cỡ lớn vừa cồng kềnh vừa dễ lan rộng vùng ảnh hưởng — AOS 130NV giải quyết đúng và đủ cho nhu cầu này."
    },
    {
      slug: "rps-300cv", name: "Mirka® RPS 300CV Ø 77 mm", seoKeyword: "Mirka® RPS 300CV Ø 77 mm",
      category: "khinen", categoryLabel: "Máy chà nhám khí nén", subCat: SPEC, subCatLabel: SPEC_L,
      img: MIRKA_IMG_BASE + "0122-8992340111-001.jpg",
      shortDesc: "Máy chà nhám/đánh bóng xoay khí nén nhẹ Ø77mm cho khu vực nhỏ.",
      lead: "Mirka® RPS 300CV là máy chà nhám kiêm đánh bóng xoay khí nén, nhẹ và công thái học, cho phép chà nhám không bụi hiệu quả trên các khu vực nhỏ.",
      features: [["🪶","Thiết kế nhẹ, công thái học, thao tác linh hoạt"],["🔄","Chế độ xoay đa năng: chà nhám kiêm đánh bóng"],["💨","Hút bụi trung tâm, thi công sạch"],["📐","Đầu mài nhỏ gọn Ø77mm phù hợp khu vực hẹp"]],
      specs: {"Mã hàng":"8992340111","Đường kính đầu mài":"77 mm","Chế độ":"Xoay (Rotary)","Hệ thống hút bụi":"Central Vacuum"},
      applications: ["Chà nhám và đánh bóng khu vực nhỏ, chi tiết", "Xử lý góc cạnh khó tiếp cận", "Công việc cần chuyển đổi nhanh giữa chà và đánh bóng"],
      why: "RPS 300CV linh hoạt dùng được cho cả hai công đoạn chà nhám và đánh bóng trên diện tích nhỏ, giúp giảm số lượng máy cần mang theo khi thi công."
    },
    {
      slug: "pbs-13nv", name: "Mirka® PBS Pneumatic Belt Sander 13NV 13x457mm Non Vacuum", seoKeyword: "Mirka® PBS Pneumatic Belt Sander 13NV 13x457mm Non Vacuum",
      category: "khinen", categoryLabel: "Máy chà nhám khí nén", subCat: SPEC, subCatLabel: SPEC_L,
      img: MIRKA_IMG_BASE + "0204-PBS-13NV-no-belt.jpg",
      shortDesc: "Máy chà nhám băng khí nén 13×457mm, lý tưởng cho gò hàn, tẩy gỉ, tẩy sơn.",
      lead: "Mirka® PBS 13NV là máy chà nhám dạng băng (belt sander) khí nén, chuyên dùng cho công việc gò kim loại: xử lý mối hàn, vết nối, tẩy gỉ và tẩy sơn cũ.",
      features: [["💪","Lực cắt mạnh nhờ băng nhám chuyển động liên tục"],["🔧","Chuyên xử lý mối hàn, vết nối trên panel kim loại"],["⚙️","Động cơ khí nén bền bỉ, chịu tải nặng"],["📏","Băng nhám 13×457mm, diện tích tiếp xúc lớn"]],
      specs: {"Mã hàng":"PBS-13NV","Kích thước băng nhám":"13 × 457 mm","Hệ thống hút bụi":"Non-Vacuum","Ứng dụng chính":"Gò hàn kim loại"},
      applications: ["Xử lý mối hàn, vết nối trên thân xe kim loại", "Tẩy gỉ sét trước khi sơn phủ", "Tẩy lớp sơn cũ trên bề mặt kim loại"],
      why: "Máy chà băng cho lực cắt mạnh và liên tục hơn hẳn máy chà tròn khi cần xử lý nhanh các mối hàn hoặc lớp gỉ sét dày trên kim loại."
    },
    {
      slug: "pbs-10nv", name: "Mirka® PBS Pneumatic Belt Sander 10NV 10x330mm Non Vacuum", seoKeyword: "Mirka® PBS Pneumatic Belt Sander 10NV 10x330mm Non Vacuum",
      category: "khinen", categoryLabel: "Máy chà nhám khí nén", subCat: SPEC, subCatLabel: SPEC_L,
      img: MIRKA_IMG_BASE + "0203-PBS-10-NV-no-belt-view.jpg",
      shortDesc: "Máy chà nhám băng khí nén 10×330mm, nhỏ gọn hơn cho không gian hẹp.",
      lead: "Mirka® PBS 10NV là phiên bản nhỏ gọn hơn của dòng máy chà băng khí nén, phù hợp không gian thao tác hẹp mà vẫn giữ lực cắt mạnh cho gò kim loại.",
      features: [["💪","Lực cắt mạnh, phù hợp gò kim loại"],["🪶","Kích thước nhỏ gọn hơn PBS 13NV, dễ thao tác"],["⚙️","Động cơ khí nén bền bỉ"],["📏","Băng nhám 10×330mm"]],
      specs: {"Mã hàng":"PBS-10NV","Kích thước băng nhám":"10 × 330 mm","Hệ thống hút bụi":"Non-Vacuum","Ứng dụng chính":"Gò hàn kim loại"},
      applications: ["Xử lý mối hàn, vết nối ở khu vực không gian hẹp", "Tẩy gỉ sét, tẩy sơn cũ trên chi tiết nhỏ", "Gò kim loại trong xưởng cơ khí"],
      why: "Khi PBS 13NV quá cồng kềnh cho khu vực thao tác hẹp, PBS 10NV vẫn giữ nguyên lực cắt mạnh trong một thân máy nhỏ gọn hơn."
    }
  ];

  var POLA = "polarshine", POLA_L = "Hợp chất đánh bóng Polarshine";
  var MARINE = "polarshine-marine", MARINE_L = "Hợp chất đánh bóng Marine";
  var REMINT = "remint", REMINT_L = "Hợp chất mài Remint";
  var KIT = "bo-dung-cu-danh-bong", KIT_L = "Bộ dụng cụ & phụ trợ đánh bóng";
  var MAYKN = "may-danh-bong-khi-nen", MAYKN_L = "Máy đánh bóng khí nén";

  var polishList = [
    polishProduct({slug:"ap-300nv", name:"Mirka® AP 300NV Ø 77 mm", subCat:MAYKN, subCatLabel:MAYKN_L,
      img:MIRKA_IMG_BASE + "0123-8992340311-001.jpg",
      shortDesc: "Máy đánh bóng góc khí nén Ø77mm, nhẹ, rung thấp, chuyên spot-repair.",
      lead: "Mirka® AP 300NV là máy đánh bóng góc (angle polisher) khí nén, nhẹ và công thái học với đế đánh bóng Ø77mm — độ rung thấp, kích thước nhỏ gọn giúp thao tác dễ dàng theo mọi hướng.",
      features: [
        ["🪶","Thiết kế nhẹ chỉ 0.66kg, thân máy nhỏ gọn dễ điều khiển"],
        ["📉","Độ rung thấp 1.34 m/s², thao tác lâu không mỏi tay"],
        ["🔄","Thân máy hỗ trợ cầm hai tay, di chuyển linh hoạt mọi hướng"],
        ["👁️","Tầm nhìn thao tác tốt, kiểm soát chính xác khu vực đánh bóng"],
        ["⚡","Tốc độ tối đa 3.200 vòng/phút, tương thích đế Quick Lock (qua bộ AP147)"]
      ],
      specs: {
        "Mã hàng": "8992340311",
        "Đường kính đế đánh bóng": "77 mm",
        "Tốc độ tối đa": "3.200 RPM",
        "Áp suất làm việc": "6.2 bar",
        "Mức rung": "1.34 m/s²",
        "Mức ồn (LpA)": "76.0 dB",
        "Trọng lượng": "0.66 kg",
        "Hệ thống hút bụi": "Không hút bụi (Non-Vacuum)"
      },
      applications: [
        "Đánh bóng sửa lỗi cục bộ (spot repair) trong đồng sơn ô tô (ART)",
        "Đánh bóng chi tiết composite, nhựa trong ứng dụng OEM",
        "Hoàn thiện bề mặt thân xe ở khu vực nhỏ, khó thao tác"
      ],
      why: "Khi chỉ cần đánh bóng một khu vực nhỏ, dùng máy đánh bóng cỡ lớn Ø150mm vừa cồng kềnh vừa khó kiểm soát — AP 300NV với đế 77mm và độ rung thấp cho phép xử lý chính xác từng điểm sửa lỗi mà không mỏi tay."
    }),
    polishProduct({slug:"polarshine-45", name:"Polarshine® 45 Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0216-polarshine-45-1l-250ml.jpg",
      shortDesc: "Hợp chất đánh bóng cắt nhanh, độ mài mòn cao nhất trong dòng Polarshine.",
      lead: "Polarshine® 45 là hợp chất đánh bóng cắt thô nhanh, giúp tiết kiệm thời gian xử lý các khuyết điểm sâu trên bề mặt sơn mà vẫn đảm bảo hiệu quả cao.",
      features: [["🚀","Tốc độ cắt nhanh nhất trong dòng Polarshine"],["⏱️","Tiết kiệm đáng kể thời gian xử lý khuyết điểm sâu"],["🎯","Xử lý hiệu quả vết xước sâu, oxy hóa nặng"],["🧴","Dạng lỏng dễ thi công bằng máy đánh bóng"]],
      specs: {"Mã hàng":"polarshine-45","Dạng":"Hợp chất lỏng","Mức độ cắt":"Thô — nhanh nhất dòng Polarshine","Dung tích":"1L / 250ml"},
      applications: ["Xử lý vết xước sâu, khuyết điểm nặng trên sơn", "Bước đánh bóng thô đầu tiên trước khi hoàn thiện", "Phục hồi bề mặt sơn xuống cấp nặng"],
      why: "Khi thời gian là ưu tiên hàng đầu và bề mặt có nhiều khuyết điểm sâu, Polarshine 45 rút ngắn đáng kể công đoạn cắt thô so với hợp chất nhẹ hơn."
    }),
    polishProduct({slug:"polarshine-35", name:"Polarshine® 35 Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0215-polarshine-35-1l-250ml.jpg",
      shortDesc: "Hợp chất đánh bóng cắt thô, chuyên cho ứng dụng công nghiệp và hàng hải khắt khe.",
      lead: "Polarshine® 35 là hợp chất đánh bóng cắt thô được phát triển riêng cho các ứng dụng công nghiệp và hàng hải đòi hỏi khắt khe.",
      features: [["🏭","Phát triển chuyên cho ứng dụng công nghiệp & hàng hải"],["🚀","Khả năng cắt thô mạnh mẽ"],["🎯","Xử lý hiệu quả oxy hóa và vết xước trên gelcoat"],["🧴","Dạng lỏng dễ thi công"]],
      specs: {"Mã hàng":"polarshine-35","Dạng":"Hợp chất lỏng","Mức độ cắt":"Thô","Ứng dụng":"Công nghiệp, hàng hải"},
      applications: ["Xử lý oxy hóa, vết xước trên gelcoat tàu thuyền", "Đánh bóng công nghiệp yêu cầu độ bền cao", "Bước cắt thô trước khi chuyển sang hợp chất mịn hơn"],
      why: "Polarshine 35 được thiết kế riêng để chịu được điều kiện làm việc khắt khe của ngành hàng hải và công nghiệp, nơi hợp chất thông thường khó đáp ứng."
    }),
    polishProduct({slug:"polarshine-10", name:"Polarshine® 10 Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0211-polarshine-10-1l-250ml.jpg",
      shortDesc: "Hợp chất đánh bóng \"một bước\" (single compound), mức trung bình, cân bằng cắt và bóng.",
      lead: "Polarshine® 10 là hệ hợp chất đánh bóng một bước hoàn chỉnh — mức mài mòn trung bình, cho phép cắt và lên bóng chỉ trong một công đoạn duy nhất, tiết kiệm thời gian thi công.",
      features: [["⚡","Hệ \"một bước\": cắt và lên bóng cùng lúc"],["⚖️","Mức mài mòn trung bình, cân bằng hiệu quả"],["⏱️","Rút ngắn quy trình đánh bóng nhiều bước truyền thống"],["✨","Cho độ bóng cao ngay sau bước cắt"]],
      specs: {"Mã hàng":"polarshine-10","Dạng":"Hợp chất lỏng","Mức độ cắt":"Trung bình","Hệ thống":"Một bước (single-step)"},
      applications: ["Đánh bóng nhanh gọn trong một công đoạn", "Xưởng cần tối ưu thời gian thi công", "Xử lý vết xước mức trung bình trên sơn"],
      why: "Thay vì phải qua nhiều bước cắt-đánh bóng riêng biệt, Polarshine 10 gộp lại thành một hệ hoàn chỉnh — lý tưởng khi cần tối ưu tốc độ thi công."
    }),
    polishProduct({slug:"polarshine-20", name:"Polarshine® 20 Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0214-polarshine-20-1l-250ml.jpg",
      shortDesc: "Hợp chất đánh bóng mức trung bình-thô, tối ưu cho khử vết xước.",
      lead: "Polarshine® 20 là hợp chất đánh bóng mức trung bình-thô, được tối ưu hóa chuyên biệt cho công đoạn khử vết xước trên bề mặt sơn.",
      features: [["🎯","Tối ưu chuyên biệt cho khử vết xước"],["⚖️","Mức cắt trung bình-thô, linh hoạt nhiều loại bề mặt"],["✨","Chuẩn bị tốt cho bước hoàn thiện tiếp theo"],["🧴","Dạng lỏng dễ thi công bằng máy đánh bóng"]],
      specs: {"Mã hàng":"polarshine-20","Dạng":"Hợp chất lỏng","Mức độ cắt":"Trung bình-thô"},
      applications: ["Khử vết xước trung bình trên bề mặt sơn", "Bước trung gian giữa cắt thô và hoàn thiện", "Chuẩn bị bề mặt trước khi đánh bóng tinh"],
      why: "Polarshine 20 lấp đúng khoảng giữa hợp chất cắt thô và hợp chất hoàn thiện — phù hợp khi vết xước không quá sâu nhưng cần xử lý dứt điểm."
    }),
    polishProduct({slug:"polarshine-5", name:"Polarshine® 5 Finishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0217-polarshine-5-1l-250ml.jpg",
      shortDesc: "Hợp chất hoàn thiện độ bóng cao, bước cuối cùng cho bề mặt gương.",
      lead: "Polarshine® 5 là hợp chất hoàn thiện (finishing compound) chuyên dụng, mang lại độ bóng vượt trội ở bước cuối cùng của quy trình đánh bóng.",
      features: [["🏆","Độ bóng gương vượt trội, bước hoàn thiện cuối cùng"],["✨","Mức mài mòn cực mịn, không để lại vệt xoáy"],["🎯","Tối ưu sau các bước cắt bằng Polarshine 45/35/20"],["🧴","Dạng lỏng, dễ thi công bằng máy đánh bóng tốc độ thấp"]],
      specs: {"Mã hàng":"polarshine-5","Dạng":"Hợp chất lỏng","Mức độ cắt":"Cực mịn (Finishing)"},
      applications: ["Bước hoàn thiện cuối cùng cho độ bóng gương", "Đánh bóng showroom, giao xe", "Hoàn thiện sau các bước cắt thô/trung bình"],
      why: "Sau khi đã xử lý khuyết điểm bằng hợp chất cắt, Polarshine 5 là bước không thể thiếu để đạt độ bóng gương hoàn hảo, không còn vệt xoáy nhỏ."
    }),
    polishProduct({slug:"polarshine-e3-glass", name:"Polarshine® E3 Glass Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0219-polarshine-E3-1l-250ml.jpg",
      shortDesc: "Hợp chất chuyên dụng đánh bóng khử vết xước trên kính.",
      lead: "Polarshine® E3 là hợp chất chuyên biệt được thiết kế riêng để đánh bóng khử vết xước trên bề mặt kính — khác hẳn với hợp chất đánh bóng sơn thông thường.",
      features: [["🪟","Công thức chuyên biệt cho bề mặt kính"],["🎯","Khử vết xước hiệu quả trên kính xe, kính công trình"],["✨","Phục hồi độ trong suốt và độ bóng của kính"],["🧴","Dạng lỏng, dùng cùng máy đánh bóng và pad chuyên dụng"]],
      specs: {"Mã hàng":"polarshine-E3","Dạng":"Hợp chất lỏng","Ứng dụng":"Đánh bóng kính"},
      applications: ["Khử vết xước trên kính chắn gió ô tô", "Phục hồi kính công trình bị mờ, xước", "Xử lý vết cần gạt mưa để lại trên kính"],
      why: "Kính có độ cứng và đặc tính bề mặt khác hoàn toàn sơn xe — cần hợp chất chuyên biệt như Polarshine E3 thay vì dùng hợp chất đánh bóng sơn thông thường."
    }),
    polishProduct({slug:"polarshine-12", name:"Polarshine® 12 Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0212-polarshine-12-1l-250ml.jpg",
      shortDesc: "Hợp chất một bước gốc nước, không chứa silicone, cho vết xước từ P2000.",
      lead: "Polarshine® 12 là hợp chất đánh bóng một bước gốc nước, không chứa silicone, loại bỏ hiệu quả vết xước từ độ nhám P2000 trở lên mịn hơn.",
      features: [["💧","Công thức gốc nước, không chứa silicone"],["⚡","Hệ một bước: cắt và lên bóng cùng lúc"],["🎯","Xử lý hiệu quả vết xước từ P2000 trở lên"],["🌍","Thân thiện môi trường hơn hợp chất gốc dung môi"]],
      specs: {"Mã hàng":"polarshine-12","Dạng":"Hợp chất lỏng gốc nước","Không chứa":"Silicone","Xử lý từ độ nhám":"P2000 trở lên"},
      applications: ["Đánh bóng sau chà nhám P2000 trở lên", "Xưởng ưu tiên hợp chất không silicone", "Đánh bóng một bước tiết kiệm thời gian"],
      why: "Hợp chất gốc nước không silicone của Polarshine 12 giúp tránh hiện tượng \"fisheye\" (lỗ kim) khi sơn lại — vấn đề thường gặp với hợp chất gốc dung môi truyền thống."
    }),
    polishProduct({slug:"polarshine-12-black", name:"Polarshine® 12 Black Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0207-Polarshine-Black-7991210111B-a.jpg",
      shortDesc: "Phiên bản chuyên cho màu tối/sợi carbon, cho độ bóng sâu không hologram.",
      lead: "Polarshine® 12 Black là phiên bản chuyên biệt của dòng 12, tối ưu cho các bề mặt màu tối và sợi carbon, cho độ bóng sâu không hiện tượng hologram.",
      features: [["⚫","Công thức tối ưu riêng cho màu tối & sợi carbon"],["💧","Gốc nước, không chứa silicone"],["✨","Độ bóng sâu, không để lại vệt hologram"],["🎯","Xử lý vết xước từ P2000 trở lên"]],
      specs: {"Mã hàng":"polarshine-12-black","Dạng":"Hợp chất lỏng gốc nước","Chuyên biệt cho":"Màu tối, sợi carbon","Đặc điểm":"Không hologram"},
      applications: ["Đánh bóng xe màu đen, màu tối yêu cầu độ bóng cao", "Hoàn thiện chi tiết sợi carbon", "Xử lý vết hologram còn sót từ bước cắt trước"],
      why: "Màu tối và carbon dễ lộ vết hologram dưới ánh sáng — Polarshine 12 Black được tinh chỉnh riêng để tránh nhược điểm này mà hợp chất thông thường khó đạt được."
    }),
    polishProduct({slug:"polarshine-15", name:"Polarshine® 15 Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0213-polarshine-15.jpg",
      shortDesc: "Hợp chất đánh bóng mức trung bình, giữa Polarshine 10 và 20.",
      lead: "Polarshine® 15 là hợp chất đánh bóng mức trung bình, lấp khoảng giữa Polarshine 10 và 20 trong thang phân loại theo mức độ cắt của dòng Polarshine.",
      features: [["⚖️","Mức cắt trung bình, linh hoạt đa dụng"],["🎯","Cân bằng giữa khả năng cắt và độ bóng"],["🧴","Dạng lỏng dễ thi công"],["✨","Phù hợp nhiều loại bề mặt sơn"]],
      specs: {"Mã hàng":"polarshine-15","Dạng":"Hợp chất lỏng","Mức độ cắt":"Trung bình"},
      applications: ["Đánh bóng đa dụng mức trung bình", "Xử lý vết xước không quá sâu", "Lựa chọn cân bằng khi không chắc chọn hợp chất nào"],
      why: "Khi Polarshine 10 chưa đủ cắt mà 20 hơi dư, Polarshine 15 là lựa chọn trung gian an toàn cho nhiều tình huống thực tế."
    }),
    polishProduct({slug:"polarshine-25", name:"Polarshine® 25 Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0052-7992710111-011.jpg",
      shortDesc: "Hợp chất đánh bóng mức trung bình-thô, giữa Polarshine 20 và 35.",
      lead: "Polarshine® 25 là hợp chất đánh bóng mức trung bình-thô, định vị giữa Polarshine 20 và 35 trong thang mài mòn của dòng sản phẩm.",
      features: [["⚖️","Mức cắt trung bình-thô"],["🎯","Xử lý vết xước rõ nét trước bước hoàn thiện"],["🧴","Dạng lỏng dễ thi công bằng máy đánh bóng"],["🏭","Phù hợp ứng dụng công nghiệp lẫn ô tô"]],
      specs: {"Mã hàng":"polarshine-25","Dạng":"Hợp chất lỏng","Mức độ cắt":"Trung bình-thô"},
      applications: ["Xử lý vết xước rõ trước bước hoàn thiện", "Đánh bóng công nghiệp và ô tô", "Bước trung gian trong quy trình đa bước"],
      why: "Polarshine 25 phù hợp khi cần lực cắt mạnh hơn 20 nhưng chưa cần đến mức thô của 35 — linh hoạt cho nhiều quy trình khác nhau."
    }),
    polishProduct({slug:"polarshine-8", name:"Polarshine® 8 Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0218-polarshine-8-1l-250ml.jpg",
      shortDesc: "Hợp chất đánh bóng mức nhẹ, giữa Polarshine 5 và 10.",
      lead: "Polarshine® 8 là hợp chất đánh bóng mức nhẹ, định vị giữa Polarshine 5 (hoàn thiện) và Polarshine 10 (một bước trung bình).",
      features: [["✨","Mức cắt nhẹ, gần với hoàn thiện"],["⚖️","Cân bằng giữa xử lý vết xước nhẹ và độ bóng"],["🧴","Dạng lỏng dễ thi công"],["🎯","Phù hợp bề mặt ít khuyết điểm"]],
      specs: {"Mã hàng":"polarshine-8","Dạng":"Hợp chất lỏng","Mức độ cắt":"Nhẹ"},
      applications: ["Đánh bóng bảo dưỡng định kỳ", "Xử lý vết xước rất nhẹ", "Bước gần hoàn thiện khi bề mặt đã khá tốt"],
      why: "Với bề mặt chỉ có khuyết điểm nhẹ, Polarshine 8 tránh việc dùng hợp chất cắt mạnh không cần thiết, tiết kiệm vật liệu và thời gian."
    }),
    polishProduct({slug:"polarshine-c20", name:"Polarshine® C20 Polishing Compound", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0208-Polarshine-C20.jpg",
      shortDesc: "Hợp chất đánh bóng chuyên dụng dòng C-series của Polarshine.",
      lead: "Polarshine® C20 là hợp chất đánh bóng chuyên dụng thuộc dòng C-series, bổ sung thêm lựa chọn chuyên biệt trong danh mục Polarshine cho các ứng dụng đặc thù.",
      features: [["🧴","Công thức chuyên biệt dòng C-series"],["⚖️","Mức cắt trung bình, đa dụng"],["✨","Cho độ bóng đồng đều"],["🎯","Bổ sung lựa chọn chuyên biệt cho quy trình đánh bóng"]],
      specs: {"Mã hàng":"polarshine-c20","Dạng":"Hợp chất lỏng","Dòng sản phẩm":"C-series"},
      applications: ["Đánh bóng chuyên biệt theo quy trình riêng của xưởng", "Bổ sung vào bộ hợp chất Polarshine hiện có", "Ứng dụng đa dạng theo nhu cầu thực tế"],
      why: "C20 mở rộng thêm lựa chọn trong hệ sinh thái Polarshine, cho phép xưởng linh hoạt xây dựng quy trình đánh bóng riêng phù hợp nhất."
    }),
    polishProduct({slug:"polarshine-3-wax", name:"Polarshine® 3 Finishing, Antistatic Wax", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0206-Polarshine-3-Finishing-Antistatic-Wax.jpg",
      shortDesc: "Sáp hoàn thiện chống tĩnh điện, bước bảo vệ cuối cùng sau đánh bóng.",
      lead: "Polarshine® 3 là sáp hoàn thiện chống tĩnh điện, được dùng ở bước cuối cùng sau khi đánh bóng để bảo vệ và tăng độ bóng bề mặt, đồng thời hạn chế bám bụi do tĩnh điện.",
      features: [["🛡️","Chống tĩnh điện, hạn chế bám bụi sau đánh bóng"],["✨","Tăng thêm độ bóng và độ sâu màu sơn"],["🧴","Dễ thi công bằng tay hoặc máy"],["🏁","Bước hoàn thiện cuối cùng của quy trình"]],
      specs: {"Mã hàng":"polarshine-3-wax","Dạng":"Sáp lỏng","Đặc tính":"Chống tĩnh điện","Bước sử dụng":"Hoàn thiện cuối cùng"},
      applications: ["Phủ bảo vệ sau khi hoàn tất đánh bóng", "Giao xe showroom cần độ bóng và sạch bụi tối đa", "Bảo dưỡng định kỳ duy trì độ bóng"],
      why: "Tĩnh điện khiến bề mặt mới đánh bóng nhanh bám bụi trở lại — Polarshine 3 giải quyết vấn đề này trong khi vẫn tăng thêm độ bóng."
    }),
    polishProduct({slug:"polarshine-liquid-wax", name:"Polarshine® Liquid Wax", subCat:POLA, subCatLabel:POLA_L,
      img:MIRKA_IMG_BASE + "0209-Polarshine-Liquid-Wax.jpg",
      shortDesc: "Sáp lỏng hoàn thiện, tăng độ bóng và lớp bảo vệ cho bề mặt sơn.",
      lead: "Polarshine® Liquid Wax là sáp lỏng hoàn thiện dễ thi công, tạo lớp bảo vệ và tăng độ bóng cho bề mặt sơn sau khi đánh bóng.",
      features: [["✨","Tăng độ bóng tức thì cho bề mặt sơn"],["🛡️","Tạo lớp bảo vệ nhẹ chống tác động môi trường"],["🧴","Dạng lỏng, thi công nhanh bằng tay hoặc máy"],["🏁","Phù hợp bảo dưỡng định kỳ"]],
      specs: {"Mã hàng":"polarshine-liquid-wax","Dạng":"Sáp lỏng","Ứng dụng":"Hoàn thiện & bảo dưỡng"},
      applications: ["Bảo dưỡng định kỳ duy trì độ bóng xe", "Bước hoàn thiện nhanh sau rửa xe", "Tăng độ bóng trước khi giao xe khách hàng"],
      why: "Với các xưởng cần một bước hoàn thiện nhanh gọn mà không phải đánh bóng toàn bộ, Liquid Wax là lựa chọn tiện lợi để duy trì vẻ ngoài bóng đẹp."
    }),

    polishProduct({slug:"polarshine-marine-deep-clean", name:"Polarshine® Marine Deep Clean", subCat:MARINE, subCatLabel:MARINE_L,
      img:MIRKA_IMG_BASE + "0056-7998000311.jpg",
      shortDesc: "Chất tẩy rửa sâu chuyên dụng cho vỏ tàu trước khi đánh bóng.",
      lead: "Polarshine® Marine Deep Clean là chất tẩy rửa sâu chuyên dụng cho vỏ tàu, loại bỏ triệt để cặn bẩn, dầu mỡ và tạp chất bám trên gelcoat trước khi tiến hành đánh bóng.",
      features: [["🌊","Chuyên dụng cho bề mặt vỏ tàu thuyền"],["🧽","Làm sạch sâu cặn bẩn, dầu mỡ, muối biển"],["✅","Chuẩn bị bề mặt tối ưu trước đánh bóng"],["🧴","Dễ thi công, tương thích quy trình Marine"]],
      specs: {"Mã hàng":"7998000311","Dạng":"Dung dịch tẩy rửa","Ứng dụng":"Vỏ tàu / Gelcoat"},
      applications: ["Làm sạch vỏ tàu trước khi đánh bóng định kỳ", "Loại bỏ cặn muối biển, dầu mỡ bám lâu ngày", "Bước chuẩn bị bề mặt trong bảo dưỡng du thuyền"],
      why: "Đánh bóng trên bề mặt chưa làm sạch sâu sẽ giảm hiệu quả — Deep Clean đảm bảo gelcoat sạch hoàn toàn trước khi vào quy trình đánh bóng chính."
    }),
    polishProduct({slug:"polarshine-marine-pro-shield", name:"Polarshine® Marine Pro Shield", subCat:MARINE, subCatLabel:MARINE_L,
      img:MIRKA_IMG_BASE + "0058-7998200201-2-.jpg",
      shortDesc: "Lớp phủ bảo vệ chuyên nghiệp cho gelcoat sau đánh bóng.",
      lead: "Polarshine® Marine Pro Shield là lớp phủ bảo vệ cao cấp dành cho gelcoat sau khi đánh bóng, giúp kéo dài độ bóng và chống lại tác động của nắng, muối biển.",
      features: [["🛡️","Bảo vệ gelcoat khỏi tia UV và muối biển"],["✨","Duy trì độ bóng lâu dài sau đánh bóng"],["🌊","Công thức chuyên biệt cho môi trường hàng hải"],["⏱️","Kéo dài chu kỳ bảo dưỡng giữa các lần đánh bóng"]],
      specs: {"Mã hàng":"7998200201","Dạng":"Lớp phủ bảo vệ","Ứng dụng":"Gelcoat tàu thuyền"},
      applications: ["Phủ bảo vệ sau khi hoàn tất đánh bóng vỏ tàu", "Kéo dài độ bóng giữa các đợt bảo dưỡng", "Bảo vệ gelcoat khỏi tác động môi trường biển"],
      why: "Môi trường biển khắc nghiệt với UV và muối khiến độ bóng nhanh xuống cấp — Pro Shield giúp kéo dài hiệu quả đánh bóng lâu hơn đáng kể."
    }),
    polishProduct({slug:"polarshine-marine-shield", name:"Polarshine® Marine Shield", subCat:MARINE, subCatLabel:MARINE_L,
      img:MIRKA_IMG_BASE + "0017-7998200251PM-Polarshine-Marine-Shield-250ml-1.jpg",
      shortDesc: "Lớp phủ bảo vệ tiêu chuẩn cho gelcoat, dung tích nhỏ gọn 250ml.",
      lead: "Polarshine® Marine Shield là phiên bản tiêu chuẩn của lớp phủ bảo vệ gelcoat, dung tích 250ml tiện lợi cho bảo dưỡng định kỳ quy mô nhỏ.",
      features: [["🛡️","Bảo vệ gelcoat sau đánh bóng"],["🧴","Dung tích 250ml tiện lợi, dễ bảo quản"],["✨","Duy trì độ bóng bề mặt"],["🌊","Phù hợp bảo dưỡng du thuyền định kỳ"]],
      specs: {"Mã hàng":"7998200251PM","Dạng":"Lớp phủ bảo vệ","Dung tích":"250ml"},
      applications: ["Bảo dưỡng định kỳ quy mô nhỏ", "Phủ bảo vệ sau đánh bóng cục bộ", "Dự phòng cho các đội thi công di động"],
      why: "Dung tích nhỏ gọn của Marine Shield phù hợp cho các đội bảo dưỡng di động hoặc công việc quy mô nhỏ không cần dùng hết dung tích lớn."
    }),
    polishProduct({slug:"polarshine-marine-final-finish", name:"Polarshine® Marine Final Finish", subCat:MARINE, subCatLabel:MARINE_L,
      img:MIRKA_IMG_BASE + "0210-Polarshine-Marine-Final-Finish-a.jpg",
      shortDesc: "Hợp chất hoàn thiện cuối cùng cho gelcoat, độ bóng gương cao.",
      lead: "Polarshine® Marine Final Finish là hợp chất hoàn thiện cuối cùng chuyên cho gelcoat, mang lại độ bóng gương cao ở bước kết thúc quy trình đánh bóng vỏ tàu.",
      features: [["🏆","Độ bóng gương cao, bước hoàn thiện cuối"],["✨","Mức mài mòn cực mịn cho gelcoat"],["🌊","Công thức chuyên biệt cho hàng hải"],["🎯","Tối ưu sau các bước cắt Medium/Heavy Cut"]],
      specs: {"Mã hàng":"Polarshine-Marine-Final-Finish","Dạng":"Hợp chất lỏng","Mức độ cắt":"Cực mịn (Finishing)"},
      applications: ["Hoàn thiện cuối cùng cho vỏ tàu du thuyền", "Đạt độ bóng gương trước khi giao tàu", "Bước cuối sau Medium/Heavy Cut Compound"],
      why: "Final Finish đảm bảo gelcoat đạt độ bóng gương thực sự sau khi đã qua các bước cắt thô/trung bình — hoàn thiện đúng chuẩn du thuyền cao cấp."
    }),
    polishProduct({slug:"polarshine-marine-surface-protection-kit", name:"Polarshine® Marine Surface Protection Kit", subCat:KIT, subCatLabel:KIT_L,
      img:MIRKA_IMG_BASE + "0164-KIT003MARINE.jpg",
      shortDesc: "Bộ sản phẩm trọn gói bảo vệ bề mặt vỏ tàu từ làm sạch đến phủ bảo vệ.",
      lead: "Polarshine® Marine Surface Protection Kit là bộ sản phẩm trọn gói, kết hợp các bước làm sạch, đánh bóng và phủ bảo vệ cho bề mặt vỏ tàu trong một combo tiện lợi.",
      features: [["📦","Bộ trọn gói đầy đủ các bước xử lý bề mặt"],["🌊","Thiết kế chuyên biệt cho quy trình Marine"],["✅","Tiện lợi, không cần mua lẻ từng sản phẩm"],["🛡️","Bao gồm cả bước làm sạch lẫn bảo vệ"]],
      specs: {"Mã hàng":"KIT003MARINE","Dạng":"Bộ sản phẩm (Kit)","Ứng dụng":"Bảo vệ toàn diện bề mặt tàu thuyền"},
      applications: ["Bảo dưỡng toàn diện vỏ tàu theo quy trình chuẩn", "Xưởng mới triển khai dịch vụ đánh bóng tàu thuyền", "Tiết kiệm chi phí so với mua lẻ từng sản phẩm"],
      why: "Bộ kit giúp các xưởng mới triển khai dịch vụ hàng hải có ngay đầy đủ sản phẩm đúng quy trình mà không cần tự nghiên cứu phối hợp từng loại."
    }),
    polishProduct({slug:"polarshine-marine-boat-wash", name:"Polarshine® Marine Boat Wash", subCat:MARINE, subCatLabel:MARINE_L,
      img:MIRKA_IMG_BASE + "0057-7998100311.jpg",
      shortDesc: "Dung dịch rửa tàu chuyên dụng, an toàn cho gelcoat và lớp phủ bảo vệ.",
      lead: "Polarshine® Marine Boat Wash là dung dịch rửa tàu chuyên dụng, làm sạch hiệu quả mà không làm hại lớp gelcoat hay lớp phủ bảo vệ đã đánh bóng.",
      features: [["🧽","Làm sạch hiệu quả bụi bẩn, muối biển hằng ngày"],["🛡️","An toàn cho gelcoat và lớp phủ bảo vệ"],["🌊","Công thức chuyên biệt cho tàu thuyền"],["♻️","Phù hợp vệ sinh định kỳ thường xuyên"]],
      specs: {"Mã hàng":"7998100311","Dạng":"Dung dịch rửa","Ứng dụng":"Vệ sinh định kỳ vỏ tàu"},
      applications: ["Rửa tàu định kỳ hằng ngày/hằng tuần", "Duy trì độ bóng giữa các đợt đánh bóng lớn", "An toàn dùng thường xuyên không hại lớp phủ"],
      why: "Không phải dung dịch rửa nào cũng an toàn cho lớp phủ bảo vệ đã đánh bóng — Boat Wash được thiết kế riêng để không làm giảm hiệu quả các sản phẩm Marine khác."
    }),
    polishProduct({slug:"polarshine-marine-medium-cut", name:"Polarshine® Marine Medium Cut Compound", subCat:MARINE, subCatLabel:MARINE_L,
      img:MIRKA_IMG_BASE + "0053-7992810111MC-001.jpg",
      shortDesc: "Hợp chất cắt mức trung bình cho gelcoat, cân bằng hiệu quả và an toàn.",
      lead: "Polarshine® Marine Medium Cut Compound là hợp chất cắt mức trung bình dành riêng cho gelcoat, cân bằng giữa khả năng xử lý khuyết điểm và an toàn cho bề mặt.",
      features: [["⚖️","Mức cắt trung bình, an toàn cho gelcoat"],["🌊","Công thức chuyên biệt hàng hải"],["🎯","Xử lý oxy hóa và vết xước mức trung bình"],["✨","Chuẩn bị tốt cho bước Final Finish"]],
      specs: {"Mã hàng":"7992810111MC","Dạng":"Hợp chất lỏng","Mức độ cắt":"Trung bình","Ứng dụng":"Gelcoat"},
      applications: ["Xử lý oxy hóa mức trung bình trên gelcoat", "Bước cắt tiêu chuẩn trong bảo dưỡng định kỳ", "Chuẩn bị bề mặt trước Final Finish"],
      why: "Medium Cut là lựa chọn cân bằng phù hợp phần lớn các đợt bảo dưỡng định kỳ, không quá mạnh gây hại gelcoat như Heavy Cut."
    }),
    polishProduct({slug:"polarshine-marine-heavy-cut", name:"Polarshine® Marine Heavy Cut Compound", subCat:MARINE, subCatLabel:MARINE_L,
      img:MIRKA_IMG_BASE + "0055-7994510111HC-001.jpg",
      shortDesc: "Hợp chất cắt mạnh cho gelcoat oxy hóa nặng, xuống cấp lâu ngày.",
      lead: "Polarshine® Marine Heavy Cut Compound là hợp chất cắt mạnh chuyên xử lý gelcoat bị oxy hóa nặng hoặc xuống cấp lâu ngày do thiếu bảo dưỡng.",
      features: [["🚀","Lực cắt mạnh nhất trong dòng Marine"],["🎯","Xử lý oxy hóa nặng, gelcoat xuống cấp lâu ngày"],["🌊","Công thức chuyên biệt cho hàng hải"],["⏱️","Tiết kiệm thời gian phục hồi bề mặt xuống cấp"]],
      specs: {"Mã hàng":"7994510111HC","Dạng":"Hợp chất lỏng","Mức độ cắt":"Thô (Heavy Cut)","Ứng dụng":"Gelcoat"},
      applications: ["Phục hồi gelcoat oxy hóa nặng, lâu ngày không bảo dưỡng", "Xử lý vỏ tàu cũ trước khi tân trang", "Bước cắt đầu tiên cho bề mặt xuống cấp nghiêm trọng"],
      why: "Với gelcoat đã oxy hóa nặng, chỉ hợp chất cắt mạnh như Heavy Cut mới đủ hiệu quả phục hồi trong thời gian hợp lý trước khi chuyển sang các bước mịn hơn."
    }),
    polishProduct({slug:"polarshine-marine-fine-antihologram", name:"Polarshine® Marine Fine Compound, Antihologram", subCat:MARINE, subCatLabel:MARINE_L,
      img:MIRKA_IMG_BASE + "0050-7991210111FC-001.jpg",
      shortDesc: "Hợp chất mịn chống hologram, hoàn thiện cuối cho gelcoat bóng gương.",
      lead: "Polarshine® Marine Fine Compound Antihologram là hợp chất mịn được thiết kế đặc biệt để triệt tiêu hiện tượng hologram, mang lại độ bóng gương thực sự cho gelcoat.",
      features: [["✨","Loại bỏ hoàn toàn vệt hologram sau bước cắt"],["🏆","Độ bóng gương chuẩn hàng hải cao cấp"],["🌊","Công thức chuyên biệt cho gelcoat"],["🎯","Bước hoàn thiện cuối cùng chống hologram"]],
      specs: {"Mã hàng":"7991210111FC","Dạng":"Hợp chất lỏng","Mức độ cắt":"Cực mịn, chống hologram"},
      applications: ["Loại bỏ vệt hologram còn sót sau đánh bóng", "Hoàn thiện du thuyền cao cấp yêu cầu khắt khe", "Bước cuối cùng đảm bảo bóng gương thực sự"],
      why: "Dưới ánh nắng gắt ngoài biển, vệt hologram lộ rõ hơn cả trên ô tô — hợp chất Antihologram này đảm bảo gelcoat thực sự hoàn hảo, không chỉ bóng mà còn phẳng quang học."
    }),

    polishProduct({slug:"remint-polishing-h", name:"Remint Polishing Compound H", subCat:REMINT, subCatLabel:REMINT_L,
      img:MIRKA_IMG_BASE + "0054-7993001111-002.jpg",
      shortDesc: "Hợp chất đánh bóng cao cấp dòng Remint, mức High-gloss.",
      lead: "Remint Polishing Compound H là hợp chất đánh bóng thuộc dòng Remint, mang lại độ bóng cao (High-gloss) cho các ứng dụng công nghiệp yêu cầu hoàn thiện cao cấp.",
      features: [["🏆","Độ bóng cao (High-gloss) chuẩn công nghiệp"],["🏭","Thuộc dòng Remint chuyên biệt"],["✨","Hoàn thiện mịn, đồng đều"],["🎯","Phù hợp bước hoàn thiện cuối trong dây chuyền"]],
      specs: {"Mã hàng":"7993001111","Dạng":"Hợp chất lỏng","Dòng sản phẩm":"Remint","Mức độ":"High-gloss"},
      applications: ["Hoàn thiện công nghiệp yêu cầu độ bóng cao", "Dây chuyền sản xuất cần hợp chất ổn định, lặp lại được", "Đánh bóng kim loại, nhựa công nghiệp"],
      why: "Remint H là lựa chọn dành cho các nhà máy cần một hợp chất hoàn thiện ổn định, cho kết quả lặp lại nhất quán qua từng lô sản xuất."
    }),
    polishProduct({slug:"remint-polishing-m", name:"Remint Polishing Compound M", subCat:REMINT, subCatLabel:REMINT_L,
      img:MIRKA_IMG_BASE + "0199-Mirka-ReMint-M-Polishing-Compound.jpg",
      shortDesc: "Hợp chất đánh bóng dòng Remint, mức Medium — cân bằng cắt và bóng.",
      lead: "Remint Polishing Compound M là hợp chất đánh bóng mức trung bình (Medium) thuộc dòng Remint, cân bằng giữa khả năng cắt và độ bóng cho ứng dụng công nghiệp.",
      features: [["⚖️","Mức cắt trung bình, cân bằng hiệu quả"],["🏭","Thuộc dòng Remint chuyên biệt công nghiệp"],["✨","Hoàn thiện đồng đều, ổn định"],["🎯","Phù hợp bước trung gian trong quy trình đa bước"]],
      specs: {"Mã hàng":"Mirka-ReMint-M","Dạng":"Hợp chất lỏng","Dòng sản phẩm":"Remint","Mức độ":"Medium"},
      applications: ["Bước đánh bóng trung gian trong dây chuyền công nghiệp", "Xử lý bề mặt kim loại trước hoàn thiện cao cấp", "Cân bằng chi phí và hiệu quả cho sản xuất hàng loạt"],
      why: "Remint M phù hợp làm bước đệm giữa hợp chất mài thô Remint Abrasive Compound và bước hoàn thiện Remint H."
    }),
    polishProduct({slug:"remint-abrasive-10", name:"Remint Abrasive Compound 10", subCat:REMINT, subCatLabel:REMINT_L,
      img:MIRKA_IMG_BASE + "0045-7990100111-002.jpg",
      shortDesc: "Hợp chất mài công nghiệp Remint, mức 10 — mịn nhất trong dòng Abrasive.",
      lead: "Remint Abrasive Compound 10 là hợp chất mài công nghiệp mức độ mịn nhất trong thang phân loại Remint Abrasive (10–50), phù hợp bước gần hoàn thiện.",
      features: [["✨","Mức mài mịn nhất trong dòng Abrasive Compound"],["🏭","Chuyên dụng công nghiệp, dây chuyền sản xuất"],["🎯","Phù hợp bước gần hoàn thiện"],["📊","Thuộc thang phân loại 10-50 theo độ thô"]],
      specs: {"Mã hàng":"7990100111","Dạng":"Hợp chất mài","Dòng sản phẩm":"Remint Abrasive","Mức độ":"10 (mịn nhất)"},
      applications: ["Bước mài gần hoàn thiện trong dây chuyền công nghiệp", "Xử lý bề mặt kim loại trước đánh bóng cao cấp", "Sản xuất hàng loạt cần độ mịn ổn định"],
      why: "Thang số 10-50 của Remint Abrasive giúp nhà máy dễ dàng chọn đúng mức mài cho từng công đoạn — số 10 là lựa chọn mịn nhất, gần hoàn thiện nhất."
    }),
    polishProduct({slug:"remint-abrasive-20", name:"Remint Abrasive Compound 20", subCat:REMINT, subCatLabel:REMINT_L,
      img:MIRKA_IMG_BASE + "0046-7990200111-002.jpg",
      shortDesc: "Hợp chất mài công nghiệp Remint, mức 20.",
      lead: "Remint Abrasive Compound 20 là hợp chất mài công nghiệp mức trung bình-mịn trong thang phân loại Remint Abrasive, dùng cho bước mài trung gian.",
      features: [["⚖️","Mức mài trung bình-mịn"],["🏭","Chuyên dụng công nghiệp, dây chuyền sản xuất"],["🎯","Phù hợp bước mài trung gian"],["📊","Thuộc thang phân loại 10-50 theo độ thô"]],
      specs: {"Mã hàng":"7990200111","Dạng":"Hợp chất mài","Dòng sản phẩm":"Remint Abrasive","Mức độ":"20"},
      applications: ["Bước mài trung gian trong quy trình đa bước", "Xử lý bề mặt kim loại công nghiệp", "Chuẩn bị bề mặt trước bước mịn hơn (Compound 10)"],
      why: "Compound 20 là mắt xích giữa các mức mài thô hơn (30-50) và mức mịn (10), giúp quy trình chuyển tiếp mượt mà qua từng công đoạn."
    }),
    polishProduct({slug:"remint-abrasive-30", name:"Remint Abrasive Compound 30", subCat:REMINT, subCatLabel:REMINT_L,
      img:MIRKA_IMG_BASE + "0047-7990300111-002.jpg",
      shortDesc: "Hợp chất mài công nghiệp Remint, mức 30.",
      lead: "Remint Abrasive Compound 30 là hợp chất mài công nghiệp mức trung bình trong thang phân loại Remint Abrasive, cân bằng giữa tốc độ mài và kiểm soát bề mặt.",
      features: [["⚖️","Mức mài trung bình, đa dụng"],["🏭","Chuyên dụng công nghiệp, dây chuyền sản xuất"],["🎯","Cân bằng tốc độ mài và kiểm soát bề mặt"],["📊","Thuộc thang phân loại 10-50 theo độ thô"]],
      specs: {"Mã hàng":"7990300111","Dạng":"Hợp chất mài","Dòng sản phẩm":"Remint Abrasive","Mức độ":"30"},
      applications: ["Mài công nghiệp mức trung bình đa dụng", "Xử lý bề mặt kim loại trong sản xuất hàng loạt", "Bước trung gian linh hoạt cho nhiều quy trình"],
      why: "Compound 30 là mức trung tâm của thang Remint Abrasive, phù hợp làm điểm khởi đầu khi chưa rõ mức độ khuyết điểm bề mặt cụ thể."
    }),
    polishProduct({slug:"remint-abrasive-40", name:"Remint Abrasive Compound 40", subCat:REMINT, subCatLabel:REMINT_L,
      img:MIRKA_IMG_BASE + "0048-7990400111-002.jpg",
      shortDesc: "Hợp chất mài công nghiệp Remint, mức 40 — thô.",
      lead: "Remint Abrasive Compound 40 là hợp chất mài công nghiệp mức thô trong thang phân loại Remint Abrasive, dùng cho bước xử lý khuyết điểm rõ rệt.",
      features: [["🚀","Mức mài thô, xử lý nhanh khuyết điểm rõ"],["🏭","Chuyên dụng công nghiệp, dây chuyền sản xuất"],["🎯","Bước mài đầu trong quy trình đa bước"],["📊","Thuộc thang phân loại 10-50 theo độ thô"]],
      specs: {"Mã hàng":"7990400111","Dạng":"Hợp chất mài","Dòng sản phẩm":"Remint Abrasive","Mức độ":"40 (thô)"},
      applications: ["Xử lý khuyết điểm bề mặt rõ rệt trên kim loại", "Bước mài đầu tiên trước khi chuyển sang mức mịn hơn", "Sản xuất công nghiệp cần loại bỏ nhanh lớp bề mặt"],
      why: "Khi bề mặt có khuyết điểm rõ cần xử lý nhanh, Compound 40 rút ngắn thời gian mài thô trước khi chuyển sang các mức mịn hơn trong quy trình."
    }),
    polishProduct({slug:"remint-abrasive-50", name:"Remint Abrasive Compound 50", subCat:REMINT, subCatLabel:REMINT_L,
      img:MIRKA_IMG_BASE + "0049-7990501111-002.jpg",
      shortDesc: "Hợp chất mài công nghiệp Remint, mức 50 — thô nhất dòng.",
      lead: "Remint Abrasive Compound 50 là hợp chất mài công nghiệp mức thô nhất trong thang phân loại Remint Abrasive, dành cho các bề mặt xuống cấp nặng cần xử lý mạnh.",
      features: [["🚀","Mức mài thô nhất trong dòng Abrasive Compound"],["🏭","Chuyên dụng công nghiệp, dây chuyền sản xuất"],["💪","Xử lý mạnh bề mặt xuống cấp nặng"],["📊","Thuộc thang phân loại 10-50 theo độ thô"]],
      specs: {"Mã hàng":"7990501111","Dạng":"Hợp chất mài","Dòng sản phẩm":"Remint Abrasive","Mức độ":"50 (thô nhất)"},
      applications: ["Xử lý bề mặt kim loại xuống cấp nặng", "Bước mài khởi điểm cho quy trình phục hồi sâu", "Sản xuất công nghiệp cần loại bỏ nhanh lớp vật liệu dày"],
      why: "Compound 50 là lựa chọn mạnh nhất khi bề mặt cần loại bỏ nhanh một lớp vật liệu đáng kể trước khi chuyển dần sang các mức mài mịn hơn."
    }),

    polishProduct({slug:"glass-polishing-kit-125", name:"Glass Polishing Solution Ø 125 mm incl. Polisher", subCat:KIT, subCatLabel:KIT_L,
      img:MIRKA_IMG_BASE + "0165-KITGLASS125P-001.jpg",
      shortDesc: "Bộ giải pháp đánh bóng kính trọn gói Ø125mm, kèm máy đánh bóng.",
      lead: "Glass Polishing Solution Ø 125 mm là bộ giải pháp trọn gói cho đánh bóng kính, bao gồm máy đánh bóng và hợp chất chuyên dụng — sẵn sàng sử dụng ngay không cần mua lẻ.",
      features: [["📦","Bộ trọn gói: máy đánh bóng + hợp chất chuyên dụng"],["🪟","Chuyên biệt cho đánh bóng kính Ø125mm"],["✅","Sẵn sàng sử dụng ngay, không cần lắp ráp phức tạp"],["🎯","Phù hợp cả xưởng mới bắt đầu dịch vụ đánh bóng kính"]],
      specs: {"Mã hàng":"KITGLASS125P","Dạng":"Bộ sản phẩm (Kit)","Đường kính":"125 mm","Bao gồm":"Máy đánh bóng + hợp chất"},
      applications: ["Xưởng mới triển khai dịch vụ đánh bóng kính ô tô", "Xử lý vết xước kính chắn gió trọn gói", "Đào tạo kỹ thuật viên mới với bộ công cụ đầy đủ"],
      why: "Thay vì phải tự phối hợp máy và hợp chất phù hợp, bộ Glass Polishing Solution cho xưởng khởi đầu nhanh với combo đã được Mirka tối ưu sẵn."
    }),
    polishProduct({slug:"pro-iridium-1250", name:"PRO Iridium 1250 Polishing Compound", subCat:KIT, subCatLabel:KIT_L,
      img:MIRKA_IMG_BASE + "0051-7991250111-Pro-Iridium-1250-Polishing-Compound-1L.jpg",
      shortDesc: "Hợp chất đánh bóng gốc nước cao cấp cho ứng dụng công nghiệp ô tô.",
      lead: "PRO Iridium 1250 là hợp chất đánh bóng gốc nước cao cấp, được phát triển cho các ứng dụng công nghiệp ô tô đòi hỏi độ ổn định và chất lượng hoàn thiện cao trong sản xuất hàng loạt.",
      features: [["💧","Công thức gốc nước, thân thiện môi trường"],["🏭","Tối ưu cho ứng dụng công nghiệp ô tô (OEM)"],["✨","Chất lượng hoàn thiện ổn định, lặp lại được"],["🎯","Phù hợp tích hợp vào dây chuyền sản xuất tự động"]],
      specs: {"Mã hàng":"7991250111","Dạng":"Hợp chất lỏng gốc nước","Ứng dụng":"Công nghiệp ô tô / OEM"},
      applications: ["Đánh bóng trong dây chuyền sản xuất ô tô OEM", "Ứng dụng cần tích hợp với hệ thống robot tự động", "Hoàn thiện công nghiệp yêu cầu tính lặp lại cao"],
      why: "PRO Iridium 1250 được thiết kế để đáp ứng tiêu chuẩn khắt khe của nhà máy OEM — nơi tính nhất quán giữa hàng nghìn xe quan trọng hơn cả tốc độ."
    })
  ];

  window.PRODUCTS = (window.PRODUCTS || []).concat(pneumaticList, polishList);

})();

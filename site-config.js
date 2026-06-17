// ═══════════════════════════════════════════════════════
//  SITE CONFIG — แก้ข้อมูลทั้งหมดได้ที่ admin.html
// ═══════════════════════════════════════════════════════

var SITE_CONFIG = {
  shopName: "พัทลุงสิทธิชัยวัสดุก่อสร้าง",
  shopNameEn: "Phatthalung Sitthichai Building Materials",
  tagline: "ตัวแทนจำหน่าย SCG โดยตรง ครบวงจร จัดส่งทั่วพัทลุง",
  established: "30+",

  colors: { primary: "#E8002D", dark: "#1A1A2E" },

  overlay: {
    eyebrow: "PHATTHALUNG SITTHICHAI",
    headline: "กรุณาเลือกสาขา",
    sub: "เพื่อแสดงสินค้าและราคาที่ถูกต้องสำหรับสาขาของคุณ",
    btnText: "เลือกสาขานี้"
  },

  hero: {
    eyebrow: "ไว้วางใจกว่า 30+ ปี · Trusted for 30+ Years",
    line1: "วัสดุก่อสร้างคุณภาพ SCG",
    line2: "ครบทุกประเภท",
    desc: "2 สาขา อ.เมืองพัทลุง & ถนนเอเชีย · ราคายุติธรรม จัดส่งทั่วพัทลุง",
    btn1: "เลือกสาขาและดูสินค้า →",
    btn2: "ข้อมูลสาขา",
    s1n: "2", s1l: "สาขา\nBranches",
    s2n: "30+", s2l: "ปีประสบการณ์\nYears",
    s3n: "SCG", s3l: "ตัวแทนโดยตรง\nDirect Dealer"
  },

  branches: [
    {
      id: "city", badge: "สาขาที่ 1", icon: "🏪", image: "logo.png",
      name: "สาขาในเมือง", nameEn: "City Branch",
      address: "210/212 ถ.ราเมศวร์ ต.คูหาสวรรค์ อ.เมือง จ.พัทลุง 93000",
      phone: "074-615223", hours: "จันทร์–เสาร์ 07:00–17:00 น.",
      mapUrl: "https://maps.app.goo.gl/PLmxCnXMESvMgAZE6",
      lineUrl: "https://line.me/ti/p/bvzKDlwL7-",
      fbUrl: "https://www.facebook.com/profile.php?id=100086447871447"
    },
    {
      id: "asia", badge: "สาขาที่ 2", icon: "🏬", image: "Branch.jpg",
      name: "สาขาถนนเอเชีย", nameEn: "Asia Road Branch",
      address: "คลังเซรามิคพัทลุง ถนนเอเชีย จ.พัทลุง",
      phone: "098-018-4724", hours: "จันทร์–เสาร์ 07:00–17:00 น.",
      mapUrl: "https://maps.app.goo.gl/M7C68VhXKovcX92x7",
      lineUrl: "https://line.me/ti/p/t-bU3RtUYZ",
      fbUrl: "https://www.facebook.com/profile.php?id=100057631621736"
    }
  ],

  promos: [
    { tag: "โปรโมชั่น", title: "ปูนซีเมนต์ SCG\nลด 5% เมื่อซื้อ 10 ถุงขึ้นไป", color: "red" },
    { tag: "จัดส่งฟรี", title: "สั่งครบ 5,000 บาท\nจัดส่งฟรีใน อ.เมืองพัทลุง", color: "dark" }
  ],

  categories: [
    { icon: "🧱", name: "อิฐ บล็อก คอนกรีต", nameEn: "Brick & Block", bg: "#FFF0F0" },
    { icon: "⚙️", name: "เหล็ก โครงสร้าง", nameEn: "Steel & Structure", bg: "#F0F4FF" },
    { icon: "🏗️", name: "ปูนซีเมนต์ SCG", nameEn: "SCG Cement", bg: "#F0FFF4" },
    { icon: "🏠", name: "กระเบื้องหลังคา", nameEn: "Roofing Tiles", bg: "#FFFBF0" },
    { icon: "🚿", name: "สุขภัณฑ์ ท่อ PVC", nameEn: "Sanitary & PVC", bg: "#FFF0F8" },
    { icon: "🎨", name: "สี & สารเคลือบ", nameEn: "Paint & Coating", bg: "#F0FAFF" },
    { icon: "🔧", name: "เครื่องมือช่าง", nameEn: "Tools & Hardware", bg: "#F4F0FF" },
    { icon: "🏢", name: "ฝ้า เพดาน ผนัง", nameEn: "Ceiling & Wall", bg: "#F0FFF8" }
  ],

  // ── สินค้า: branches = ["city","asia","both"] ──────────
  // "both" = แสดงทั้ง 2 สาขา
  // "city" = สาขาในเมืองเท่านั้น
  // "asia" = สาขาถนนเอเชียเท่านั้น
  products: [
    { icon: "🧱", brand: "SCG CEMENT", name: "ปูนสำเร็จรูป เอสซีจี", nameEn: "SCG Ready-Mix Cement", price: "185", unit: "ถุง", branches: "both" },
    { icon: "🏠", brand: "SCG ROOFING", name: "กระเบื้องหลังคา ลอนคู่", nameEn: "Double Wave Roof Tile", price: "38", unit: "แผ่น", branches: "both" },
    { icon: "🚿", brand: "SCG PVC", name: "ท่อ PVC ชั้น 8.5", nameEn: "PVC Pipe Class 8.5", price: "95", unit: "เส้น", branches: "both" },
    { icon: "🧱", brand: "SCG", name: "อิฐมวลเบา SCG", nameEn: "SCG Lightweight Block", price: "12", unit: "ก้อน", branches: "city" },
    { icon: "🎨", brand: "TOA", name: "สี TOA ภายนอก", nameEn: "TOA Exterior Paint", price: "850", unit: "ถัง", branches: "city" },
    { icon: "🏺", brand: "COTTO", name: "กระเบื้องปูพื้น COTTO", nameEn: "COTTO Floor Tile", price: "320", unit: "ตร.ม.", branches: "asia" },
    { icon: "⚙️", brand: "STAINLESS", name: "เหล็กเส้น DB12", nameEn: "Steel Bar DB12", price: "185", unit: "เส้น", branches: "asia" }
  ],

  why: {
    title: "ทำไมต้องเลือกเรา · Why Choose Us",
    sub: "มั่นใจได้ทุกด้าน · Trusted on every front",
    items: [
      { icon: "🏅", label: "ตัวแทน SCG โดยตรง", labelEn: "SCG Direct Dealer" },
      { icon: "🚚", label: "จัดส่งทั่วพัทลุง", labelEn: "Province-wide Delivery" },
      { icon: "💬", label: "ทีมงานให้คำปรึกษา", labelEn: "Expert Consultation" }
    ]
  },

  faqs: [
    { q: "ร้านพัทลุงสิทธิชัยมีสาขาที่ไหนบ้าง?", a: "มี 2 สาขาในจังหวัดพัทลุง สาขาในเมือง โทร 074-615223 และสาขาถนนเอเชีย โทร 098-018-4724 เปิดวันจันทร์–เสาร์ 07:00–17:00 น." },
    { q: "เป็นตัวแทน SCG โดยตรงจริงไหม?", a: "ใช่ครับ เป็นตัวแทนจำหน่ายโดยตรงจาก SCG รับประกันสินค้าของแท้ ราคามาตรฐาน มีประสบการณ์กว่า 30 ปี" },
    { q: "มีบริการจัดส่งไหม?", a: "มีบริการจัดส่งทั่วจังหวัดพัทลุง สั่งครบ 5,000 บาทขึ้นไปในเขตอำเภอเมืองจัดส่งฟรี" },
    { q: "Where is Phatthalung Sitthichai located?", a: "2 branches in Phatthalung: City Branch Tel 074-615223 and Asia Road Branch Tel 098-018-4724. Open Mon-Sat 7AM-5PM." }
  ],

  footer: {
    copy: "© 2567–2568 พัทลุงสิทธิชัยวัสดุก่อสร้าง · All rights reserved",
    badge: "SCG Authorized Dealer",
    desc: "ตัวแทนจำหน่ายผลิตภัณฑ์ SCG โดยตรง\nประสบการณ์กว่า 30 ปีในจังหวัดพัทลุง\nAuthorized SCG Dealer"
  }
};

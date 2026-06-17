// ═══════════════════════════════════════════════════════
//  SITE CONFIG — แก้ข้อมูลทั้งหมดได้ที่นี่
//  ไม่ต้องแตะไฟล์อื่นเลย
// ═══════════════════════════════════════════════════════

var SITE_CONFIG = {

  // ── ข้อมูลร้าน ──────────────────────────────────────
  shopName: "พัทลุงสิทธิชัยวัสดุก่อสร้าง",
  shopNameEn: "Phatthalung Sitthichai Building Materials",
  tagline: "ตัวแทนจำหน่าย SCG โดยตรง ครบวงจร จัดส่งทั่วพัทลุง",
  established: "30+",

  // ── สี ──────────────────────────────────────────────
  colors: {
    primary: "#E8002D",    // สีแดง SCG
    dark: "#1A1A2E",       // สีเข้ม navbar
    accent: "#F59E0B"      // สีเหลือง accent (ไม่ได้ใช้มาก)
  },

  // ── สาขา ────────────────────────────────────────────
  branches: [
    {
      id: "city",
      badge: "สาขาที่ 1",
      name: "สาขาในเมือง",
      nameEn: "City Branch",
      address: "210/212 ถ.ราเมศวร์ ต.คูหาสวรรค์ อ.เมือง จ.พัทลุง 93000",
      phone: "074-615223",
      hours: "จันทร์–เสาร์ 07:00–17:00 น.",
      mapUrl: "https://maps.app.goo.gl/PLmxCnXMESvMgAZE6",
      lineUrl: "https://line.me/ti/p/bvzKDlwL7-",
      fbUrl: "https://www.facebook.com/profile.php?id=100086447871447",
      icon: "🏪"
    },
    {
      id: "asia",
      badge: "สาขาที่ 2",
      name: "สาขาถนนเอเชีย",
      nameEn: "Asia Road Branch",
      address: "คลังเซรามิคพัทลุง ถนนเอเชีย จ.พัทลุง",
      phone: "098-018-4724",
      hours: "จันทร์–เสาร์ 07:00–17:00 น.",
      mapUrl: "https://maps.app.goo.gl/M7C68VhXKovcX92x7",
      lineUrl: "https://line.me/ti/p/t-bU3RtUYZ",
      fbUrl: "https://www.facebook.com/profile.php?id=100057631621736",
      icon: "🏬"
    }
  ],

  // ── โปรโมชั่น Banner ────────────────────────────────
  promos: [
    {
      tag: "โปรโมชั่น",
      title: "ปูนซีเมนต์ SCG\nลด 5% เมื่อซื้อ 10 ถุงขึ้นไป",
      color: "red"
    },
    {
      tag: "จัดส่งฟรี",
      title: "สั่งครบ 5,000 บาท\nจัดส่งฟรีใน อ.เมืองพัทลุง",
      color: "dark"
    }
  ],

  // ── หมวดหมู่สินค้า ───────────────────────────────────
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

  // ── สินค้าแนะนำ ──────────────────────────────────────
  products: [
    { icon: "🧱", brand: "SCG CEMENT", name: "ปูนสำเร็จรูป เอสซีจี", nameEn: "SCG Ready-Mix Cement", price: "185", unit: "ถุง" },
    { icon: "🏠", brand: "SCG ROOFING", name: "กระเบื้องหลังคา ลอนคู่", nameEn: "Double Wave Roof Tile", price: "38", unit: "แผ่น" },
    { icon: "🚿", brand: "SCG PVC", name: "ท่อ PVC ชั้น 8.5", nameEn: "PVC Pipe Class 8.5", price: "95", unit: "เส้น" },
    { icon: "🧱", brand: "SCG", name: "อิฐมวลเบา SCG", nameEn: "SCG Lightweight Block", price: "12", unit: "ก้อน" },
    { icon: "🎨", brand: "TOA", name: "สี TOA ภายนอก", nameEn: "TOA Exterior Paint", price: "850", unit: "ถัง" },
    { icon: "⚙️", brand: "STAINLESS", name: "เหล็กเส้น DB12", nameEn: "Steel Bar DB12", price: "185", unit: "เส้น" }
  ],

  // ── FAQ ──────────────────────────────────────────────
  faqs: [
    {
      q: "ร้านพัทลุงสิทธิชัยมีสาขาที่ไหนบ้าง?",
      a: "มี 2 สาขาในจังหวัดพัทลุง สาขาในเมือง โทร 074-615223 และสาขาถนนเอเชีย โทร 098-018-4724 เปิดวันจันทร์–เสาร์ 07:00–17:00 น."
    },
    {
      q: "เป็นตัวแทน SCG โดยตรงจริงไหม?",
      a: "ใช่ครับ เป็นตัวแทนจำหน่ายโดยตรงจาก SCG รับประกันสินค้าของแท้ ราคามาตรฐาน มีประสบการณ์กว่า 30 ปี"
    },
    {
      q: "มีบริการจัดส่งไหม?",
      a: "มีบริการจัดส่งทั่วจังหวัดพัทลุง สั่งครบ 5,000 บาทขึ้นไปในเขตอำเภอเมืองจัดส่งฟรี"
    },
    {
      q: "Where is Phatthalung Sitthichai located?",
      a: "2 branches in Phatthalung: City Branch Tel 074-615223 and Asia Road Branch Tel 098-018-4724. Open Mon–Sat 7AM–5PM."
    }
  ]

};

# 🚀 คู่มือ Deploy เว็บไซต์ขึ้น GitHub Pages (ฟรี 100%)

## สิ่งที่ต้องเตรียม
- Email address (สำหรับสร้าง GitHub account)
- ไฟล์ทั้งหมด: index.html, robots.txt, sitemap.xml

---

## STEP 1 — สร้าง GitHub Account (ฟรี)
1. ไปที่ https://github.com/signup
2. กรอก email, password, username
   ⚠️ **username สำคัญมาก** เพราะ URL จะเป็น `https://USERNAME.github.io`
   แนะนำ: `sitthichai-phatthalung` หรือ `pltgsitthichai`
3. ยืนยัน email

---

## STEP 2 — สร้าง Repository
1. คลิก "+" มุมบนขวา → "New repository"
2. Repository name: **ต้องตั้งชื่อว่า `USERNAME.github.io`** (แทน USERNAME ด้วย username ของคุณ)
   เช่น ถ้า username = `sitthichai-phatthalung` → ชื่อ repo = `sitthichai-phatthalung.github.io`
3. เลือก **Public**
4. กด "Create repository"

---

## STEP 3 — อัปโหลดไฟล์
1. ในหน้า repository ที่เพิ่งสร้าง คลิก "uploading an existing file"
2. ลาก-วางไฟล์ทั้งหมด: `index.html`, `robots.txt`, `sitemap.xml`
3. กด "Commit changes"

---

## STEP 4 — เปิด GitHub Pages
1. ไปที่ Settings (แถบด้านบนของ repository)
2. เลื่อนลงหา "Pages" ในเมนูซ้าย
3. Source: เลือก "Deploy from a branch"
4. Branch: เลือก `main` → folder `/root` → กด Save
5. รอ 2-5 นาที แล้วเว็บจะขึ้นที่ `https://USERNAME.github.io`

---

## STEP 5 — แก้ไข URL ในไฟล์
ก่อน deploy ต้องแทนที่ `YOUR-USERNAME` ในไฟล์ด้วย username จริง:
- `index.html` — ค้นหา `YOUR-USERNAME` แล้วเปลี่ยนเป็น username จริง (มีประมาณ 8 จุด)
- `robots.txt` — บรรทัด Sitemap
- `sitemap.xml` — บรรทัด `<loc>`

---

## STEP 6 — ลงทะเบียน Google Search Console (SEO สำคัญมาก)
1. ไปที่ https://search.google.com/search-console
2. คลิก "Add Property" → ใส่ URL เว็บ
3. Verify ด้วย HTML tag (copy tag ใส่ใน `<head>` ของ index.html)
4. Submit sitemap: ใส่ `sitemap.xml` ในช่อง Sitemaps
5. Google จะเริ่ม index เว็บภายใน 1-7 วัน

---

## STEP 7 — สร้าง Google Business Profile (สำคัญมากสำหรับ Local SEO)
ทำสำหรับทั้ง 2 สาขา:
1. ไปที่ https://business.google.com
2. ค้นหาชื่อร้าน ถ้ายังไม่มีให้สร้างใหม่
3. ใส่ข้อมูล: ที่อยู่, เบอร์โทร, เวลาทำการ, เว็บไซต์ (ใส่ URL GitHub Pages)
4. ยืนยันตัวตนผ่านไปรษณีย์หรือโทรศัพท์
5. ✅ เมื่อ verify แล้ว ร้านจะขึ้นบน Google Maps และ Google Search

---

## สรุปค่าใช้จ่าย
| รายการ | ราคา |
|--------|------|
| GitHub Pages Hosting | ฟรี |
| SSL Certificate (https) | ฟรี |
| Google Search Console | ฟรี |
| Google Business Profile | ฟรี |
| Domain .github.io | ฟรี |
| **รวม** | **฿0** |

หากต้องการ domain ของตัวเองในอนาคต เช่น `sitthichai.co.th`:
- ค่า domain .co.th ≈ 400-600 บาท/ปี (Godaddy, Namecheap, จดโดเมน.com)
- ผูก domain กับ GitHub Pages ได้ฟรี ไม่มีค่า hosting เพิ่ม

---

## Tips เพิ่ม SEO หลัง deploy
- [ ] โพสต์ลิงก์เว็บใน Facebook ทั้ง 2 page
- [ ] ใส่ลิงก์เว็บใน Line OA Bio
- [ ] ขอให้ลูกค้า Review บน Google Business
- [ ] อัปเดต Google Business ทุก 1-2 เดือน (โพสต์โปรโมชั่น)

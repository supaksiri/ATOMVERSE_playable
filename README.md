# ATOMVERSE — THE SCIENCE OF MASS
เว็บแอปสาธิต 4 ห้องทดลองเกี่ยวกับมวลอะตอม สำหรับ ม.4 ไม่ต้องสมัครสมาชิกและไม่มี backend

## เปิดใช้
ใช้ static server ที่ root ของโปรเจกต์ เช่น `python3 -m http.server 8000` แล้วเปิด `http://localhost:8000` (การเปิด index.html แบบ file:// อาจถูกบล็อกการ import ES modules โดยเบราว์เซอร์)

## เผยแพร่ GitHub Pages
1. สร้าง repository ชื่อ `atomverse` แล้วอัปโหลดไฟล์ทั้งหมด (ให้ index.html อยู่ที่ root)
2. Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save
3. เปิด `https://<username>.github.io/atomverse/` เมื่อ Pages เผยแพร่แล้ว

## ห้องทดลอง
- Forge: ปรับ p/n/e, ชนิดธาตุ เลขมวล สถานะประจุ ค่า isotopic mass เมื่อมีข้อมูล และเปรียบเทียบ snapshot ก่อน/หลัง
- Chamber: เลือกไอโซโทป จำนวนอะตอม เปรียบเทียบมวลด้วยตาชั่งเชิงภาพ
- Reactor: ปรับเปอร์เซ็นต์ผสมไอโซโทปและ weighted mean สด; 100 จุดในภาพปัดเพื่อแสดงผลเท่านั้น
- Studio: เลือกสูตรเป้าหมายและเติมชนิดอะตอมถูกต้อง ตัวคำนวณ Mr, 3D spatial model แบบจำลอง

## ข้อมูลและคำเตือน
ค่ามวลไอโซโทปอ้างอิงค่าที่เผยแพร่โดย NIST Atomic Weights and Isotopic Compositions: https://physics.nist.gov/PhysRefData/Compositions/ (ต้องยืนยันเวอร์ชันชุดข้อมูลก่อนใช้อ้างอิงเชิงวิจัย) มวลอะตอมเฉลี่ยใช้ค่าการเรียนที่ปัดเศษ โปรแกรมไม่ได้อ้างว่าแสดงวงโคจรอิเล็กตรอนจริง เครื่องชั่งเป็นอุปมา ไม่ใช่เครื่องวัดทางกายภาพ และขนาดโมเดลไม่แสดงสัดส่วนจริง

## สถานะพัฒนาและข้อจำกัด
- รุ่นนี้ใช้ Canvas 2D วาดพิกัด 3D ฉายภาพ (software perspective projection) และ CSS/SVG สำหรับตาชั่ง **ยังไม่ใช้ WebGL, Three.js หรือ React Three Fiber** และยังไม่มีโมเดล PBR, dynamic soft shadows, หรือ WebGL fallback แบบสมบูรณ์
- โหมดโมเลกุลแบบ guided จำกัดชุดสูตรและตำแหน่งที่เตรียมไว้ ยังไม่ตรวจสอบพันธะอิสระ; ภาพเรขาคณิตไม่อ้างว่าเป็นโครงสร้างเชิงควอนตัมที่แม่นยำ
- เปรียบเทียบเป็นการ์ดข้อมูล 2 ค่าพร้อมกัน ยังไม่ใช่ 3D สองวิวขนาน / slider reveal
- ไม่มีระบบบันทึกประวัติ/ดาวถาวร เนื่องจากหลีกเลี่ยงการเก็บข้อมูลนักเรียน
- ฟอนต์ Prompt โหลดจาก Google Fonts ถ้าออฟไลน์จะใช้ Tahoma/system font
- ยังไม่ได้ทดสอบข้ามมือถือจริง/เครื่องอ่านหน้าจอ และยังไม่มีการวัด performance บนอุปกรณ์สเปกต่ำ

## ทดสอบสูตรคำนวณ
`node tests/chemistry.test.mjs`

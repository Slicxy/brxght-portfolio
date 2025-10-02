/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#B7182B",  // 🔴 แดงเข้ม (สีตา/ดอกไม้ → ใช้เป็น Title ดึงสายตา)
        primaryContent: "#C4A6D8",  // 💜 ม่วงอ่อน (ใช้กับ content background/text)
        primaryBase: "#8B6FA8",  // 💜 ม่วงเข้ม (ใช้เป็น Base element เช่นปุ่ม/การ์ด)
        primaryBg: "#0F0F0F",  // ⚫ ดำ (ใช้เป็น background หลัก)
        primaryAccent: "#BFC0C5",  // ⚪ เทาเงิน (ใช้เป็น accent หรือเส้นคั่น)
        bg:"#1A1A1A"
      },
      fontFamily: {
        sans: ["'Josefin Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

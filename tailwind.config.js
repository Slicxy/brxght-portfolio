/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle: "#6600CC",   // 💜 ม่วงเข้ม (สีผม → ใช้เป็น Title ดึงสายตา)
        primaryContent: "#4EB06F", // 💚 เขียวสด (สีตา → ใช้กับเนื้อหาหรือไฮไลท์)
        primaryBase: "#D94E76",    // 🤍 ผิวโทนอุ่น (ใช้กับพื้นหลัง card/section)
        primaryBg: "#1A1A1A",      // ⚫ ดำ (ใช้เป็น background หลัก)
        primaryAccent: "#1A1A1A",  // 🟠 ส้มสด (ใช้เป็น accent, ปุ่ม, icon highlight)
        bg: "#121212"               // ⚪ ขาว (background รองให้ contrast)
      },
      fontFamily: {
        sans: ["'Josefin Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};

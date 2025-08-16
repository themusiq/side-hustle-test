/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",      // 퍼블릭 HTML 파일 포함
    "./src/**/*.{js,jsx,ts,tsx}" // src 내 모든 JS/TSX 파일 포함
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",      // Tailwind 기본 파랑(Figma Primary Color 등)
        accent: "#facc15",       // 밝은 노랑
        soft: "#f3f4f6"          // 밝은 배경용
      },
      fontFamily: {
        sans: ['"Noto Sans KR"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
        'emoji-gradient': 'linear-gradient(135deg, #f9f871 0%, #ff94c2 100%)'
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.06)"
      },
      borderRadius: {
        xl: "1rem"
      }
    },
  },
  plugins: [],
}

// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        // montserrat: ['var(--font-montserrat)', 'sans-serif'], // フォールバックフォントも追加
        // 'shippori-mincho': ['var(--font-shippori-mincho)', 'serif'],
        sans: [
          'var(--font-montserrat)',
          'var(--font-shippori-mincho)',
          'sans-serif'
        ],
        // 他のフォントを追加
      },
    },
  },
  plugins: [],
}

export default config
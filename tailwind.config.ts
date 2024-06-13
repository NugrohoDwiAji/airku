import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        "poppin" : ["Poppins","sans-serif"]
      },
      colors:{
        "greenBase" : "#0D9485",
        "background" : "#23272E"
      }
    },
  },
  plugins: [],
}
export default config

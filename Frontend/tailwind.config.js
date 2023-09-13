/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'main':'#E6F1FA',
        'secondary':'#EB5757',
        'advanced':'#57A4EB',
        'secondaryBlack':"#3F3F3F",
        'gray':'#828282',
        'lightBlue':'#F0F2F2',
        'divider':'#C4C4C4',
        'link':'#0F6DB1'
      },
      fontFamily:{
        Oswald: ['var(--font-Oswald)'],
        Roboto:['var(--font-Roboto)']
      },
      content:{
        'border-line':'url("../public/Svg/Vectors/border-line.svg")',
        'border-line-white':'url("../public/Svg/Vectors/border-line-white.svg")',
      },
      screens:{
        'xs':'425px'
      }
    },
  },
  plugins: [],
}

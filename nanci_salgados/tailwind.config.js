// /** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      // backgroundImage: {
      //   'onda-red': "url('/assets/img/form_red.png')",
        
      // },
      fontFamily: {
        'jet':['"JetBrains Mono"', 'monospace'],
        'stokweb':['"Istok Web"', 'sans-serif'],
        'labelle':['"La Belle Aurore"', 'cursive'],
      },
      boxShadow: {
        'photo': '.5vw .5vw 0px 2px rgba(255,255,255,0.4)',
        'photo-md': '5px 15px 0px 5px rgba(255,255,255,0.5)',
      },
    },
  },
  plugins: [],
}


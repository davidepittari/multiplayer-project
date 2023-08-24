/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xxl: '1920px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#272524',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'black': '#000000',
      'primary': '#252525',
      'secondary':'#E6E6E6',
      'third': '#F7444E',
      'fourth': '#ADB2B1',
      'fifth': '#F7D039',
      'sixth': '#181818',
      'seventh': '#FDD0D3',
      'eight': '#666666',
      'ads': '#1D1D1D',
      'footer': '#1A1A1A',
      'btnhover': '#F72927',
    },
    fontFamily: {
      maven: ['Maven Pro', 'sans-serif'],
      montserrat: ['Montserrat', 'sans-serif'],
    },
    extend: {
      height: {
        'screen-vw': '100vw',
      },
      minWidth:{
        '1/3': '33,3333%',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}

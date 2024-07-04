/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins"],
      },
      animation: {
        "loop-scroll": "loop-scroll 50s linear infinite",
      },
      keyframes: {
        "loop-scroll": {
          from: { transform: "translateX(0)" },
          to  : { transform: "translateX(-100%)" },
        },
      },
      zIndex: {
        '-1': '-1',
      },
      width: {
        '400px': '400px', 
        '500px': '500px', 
        '450px': '450px', 
        '350px': '350px', 
        '320px': '320px', 
        '380px': '380px', 
      },
      height: {
        '480px': '480px',
        '500px': '500px',
        '550px': '550px',
        '600px': '600px',
        '620px': '620px',
        '635px': '635px',
        '650px': '650px',
        '680px': '680px',
        '690px': '690px',
        '700px': '700px',
      },
      top: {
        '-400px': '-400px',
        '80px': '80px',
      },
      right: { 
        '395px': '395px', 
        '430px': '430px',
        '480px': '480px',
        '515px': '515px',
        '350px': '350px',
      },
      left: {
        '200px': '200px',
        '320px': '320px',
        '515px': '515px',
        '690px': '690px',
      },
      backgroundImage: {
        'grayConcrete': "url('/img/gray-concrete-wall.jpg')",
        'frame': "url('/img/6.png')",

      },
      listStyleImage: {
        title: 'url("/img/PORTFOLIO.svg")',
      },
    },
  },
  plugins: [],
}


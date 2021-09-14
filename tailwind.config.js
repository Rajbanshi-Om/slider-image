module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation : {
        slideL : 'slideL 500ms linear',
        slideR : 'slideR 500ms linear',
       
      },
      keyframes : {
        slideL :{
          '0%' : {transform : 'translateX(-100%)' },
          '100%' : {transform : 'translateX(0)'}
        },
        slideR:{
          '0%' : {transform : 'translateX(100%)'},
          '100%' : {transform : 'translateX(0)'},
        },

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

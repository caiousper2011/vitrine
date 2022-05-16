module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        brand: {
          100: '#fcebea',
          500: '#ea1d2c',
        },
        backgroundDefault: {
          white: '#ffffff',
        },
        backgroundSecondary: {
          100: '#f7f7f7',
        },
        light: {
          100: '#f7f7f7',
          200: '#dcdcdc',
          400: '#717171',
          900: '#000000',
        },
      },
      borderWidth: {
        1: '1px',
      },
      minWidth: {
        buttton: '100px',
      },
    },
  },
  plugins: [],
};

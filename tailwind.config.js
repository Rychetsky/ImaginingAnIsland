module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      screens: {
        dark: { raw: "(prefers-color-scheme: dark)" },
      },
      colors: {
        blue: {
          '600': '#0045F3',
        }
      }
    },
    fontFamily: {
      'sans': ['bebas-neue-pro','-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      'serif': ['tasman','Georgia', 'Cambria'],
    },
    minHeight: {
      'cluster': '45vh',
    },
},
  variants: {},
  plugins: [],
}

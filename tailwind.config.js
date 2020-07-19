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
      'sans': ['-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      'serif': ['Georgia', 'Cambria'],
    }
  },
  variants: {},
  plugins: [],
}

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Light blue & black theme
        primary: '#60A5FA',
        accent: '#000000',
        navbarBlue: '#164766'
      },
      borderRadius: {
        '2xl': '1rem'
      }
    }
  },
  plugins: []
}

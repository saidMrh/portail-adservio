const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

module.exports = {

  // plugins: [
  //   tailwindcss

	// 	// But others, like autoprefixer, need to run after
	// 	autoprefixer,

	// 	!dev &&
	// 		cssnano({
	// 			preset: 'default'
	// 		})
	// ]
    plugins: {
      autoprefixer: {},
      tailwindcss: {},
    },
  }
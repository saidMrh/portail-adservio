const colors = require('tailwindcss/colors')

module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			'sans': ['Dm Sans','Poppins','IBM Plex Sans', 'ui-sans-serif', 'system-ui'],
			'header': ['Poppins','Quicksand','Inter'],
			'rounded': ['Quicksand','ui-sans-serif', 'system-ui'],
      		'serif': ['ui-serif', 'Georgia'],
      		'mono': ['Fira Mono','ui-monospace', 'SFMono-Regular'],
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.slate,
			slate: colors.slate,
			zinc: colors.zinc,
			blue: colors.blue,
			stone: colors.stone,
			red:colors.red,
			orange: colors.orange,
			amber: colors.amber,
			yellow: colors.yellow,
			lime:colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			teal: colors.teal,
			cyan: colors.cyan,
			sky: colors.sky,
			indigo: colors.indigo,
			violet: colors.violet,
			purple: colors.purple,
			fuchsia: colors.fuchsia,
			pink:colors.pink,
			rose: colors.rose,
			adservio: '#0C62FB',
			haiti: '#120F3C'
		  },
		  
		extend: {
		}
	},
	variants: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/forms')
	]
  }
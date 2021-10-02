module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			spacing: {
				'112': '28rem',
				'120': '30rem',
			},

			transitionDuration: {
				'250': '250ms',
				'275': '275ms',
			},
		},
	},

	variants: {
		// ...
		scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
		theme: {},
		extend: {
			boxShadow: ['active'],
			backgroundColor: ['active'],
			backgroundOpacity: ['active'],
		},
	},

	plugins: [],
};

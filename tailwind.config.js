module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},

	variants: {
		// ...
		scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
	},

	plugins: [],
};

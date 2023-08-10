/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				rubik: ["Rubik", "sans-serif"],
				slab: ["Roboto Slab", "sans-serif"],
			},
			colors: {
				"main-blue": "#63D7DB",
				"main-gray": "#B5B5B5",
				"main-white": "#E0E0E0",
				"main-yellow": "#DBC64D",
			},
		},
	},
	plugins: [],
};

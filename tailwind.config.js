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
				"main-white": "#E3E3E3",
			},
		},
	},
	plugins: [],
};

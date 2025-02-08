/** @type {import('tailwindcss').Config} */
import { screens as _screens } from "tailwindcss/defaultTheme";
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
	screens: {
		rsm: "320px",
		xs: "400px",
		..._screens,
	},
	extend: {
		fontFamily: {
			rubik: ["Rubik", "sans-serif"],
			slab: ["Roboto Slab", "sans-serif"],
			code: ["Fira Code", "sans-serif"],
		},
		colors: {
			"main-blue": "#63D7DB",
			"main-gray": "#B5B5B5",
			"main-white": "#E0E0E0",
			"main-yellow": "#DBC64D",
		},
	},
};
export const plugins = [];

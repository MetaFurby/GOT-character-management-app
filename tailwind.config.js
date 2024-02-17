/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
  theme: {
    extend: {
		colors: {
			'primary': '#FCFEF0',
			'secondary': '#67331E',
			'accent': '#C38D5F',
			'warning': '#FFF190',
			'error': '#B9540C',
			'ground': '#331C0E',
			'ashes': '#242424'
		}
	},
  },
  plugins: [],
}


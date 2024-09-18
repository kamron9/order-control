/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#0E73F6',
				yellow: '#F8C51B',
				green: '#22C348',
				teal: '#1AC19D',
				red: '#F76659',
				gray: '#E5E9EB',
				lightGray: '#EEF0F2',
				deepGray: '#6E8BB7',
				darkGray: '#48535B',
			},
			padding: {
				layout: '12px',
			},
		},
	},
	plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Sometype Mono', 'system-ui'],
			mono: ['Sometype Mono', 'SFMono-Regular'],
			body: ['Sometype Mono', 'monospace']
		},
		extend: {
			fontSize: {
				base: '16px'
			},
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: '#f2f3f3',
				accent: '#f17372',
				'primary-inverse': '#181717',
				typography: {
					primary: '#181717',
					inverse: '#f2f3f3',
					accent: '#f17372',
					link: '#3a9ee6',
					secondary: '#b9b9b9'
				}
			}
		}
	},
	plugins: []
};

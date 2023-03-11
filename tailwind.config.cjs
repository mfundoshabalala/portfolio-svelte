/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			screens: {
				mobile: '640px',
				tablet: '960px',
				desktop: '1280px'
			}
		},
		extend: {
			screens: {
				mobile: '640px',
				tablet: '960px',
				desktop: '1280px'
			},
			fontFamily: {
				comforter: "'Comforter Brush', cursive",
				martian: "'Martian Mono', monospace;"
			},
			animation: {
				'bounce-spin': 'bounce-spin 1250ms infinite linear forwards'
			},
			keyframes: {
				'bounce-spin': {
					'0%': {
						transform: 'translateY(0) rotateY(0deg)'
					},
					'50%': {
						transform: 'translateY(-20%) rotateY(180deg)'
					},
					'100%': {
						transform: 'translateY(0) rotateY(360deg)'
					}
				}
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};

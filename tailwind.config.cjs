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
			dropShadow: {
				white: '0 25px 50px -12px rgba(255, 255, 255, 0.25)'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			},
			fontFamily: {
				comforter: "'Comforter Brush', cursive",
				martian: "'Martian Mono', monospace;",
				railway: "'Railway', monospace;",
				roboto: "'Roboto Mono', sans-serif;",
				kaushan: "'Kaushan Script', cursive;",
				cookie: "'Cookie', cursive;",
				climate: "'Climate Crisis', cursive;"
			},
			animation: {
				'bounce-spin': 'bounce-spin 1250ms infinite linear forwards'
			},
			keyframes: {
				'bounce-spin': {
					'0%': { transform: 'translateY(0) rotateY(0deg)' },
					'50%': { transform: 'translateY(-20%) rotateY(180deg)' },
					'100%': { transform: 'translateY(0) rotateY(360deg)' }
				},
				shimmer: { '100%': { transform: 'translateX(100%)' } }
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};

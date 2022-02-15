module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				cstm: {
					primary: {
						cyan: 'hsl(180, 66%, 49%)',
						'dark-violet': 'hsl(257, 27%, 26%)'
					},
					secondary: {
						red: 'hsl(0, 87%, 67%)'
					},
					neutral: {
						gray: 'hsl(0, 0%, 75%)',
						'grayish-violet': 'hsl(257, 7%, 63%)',
						'dark-blue': 'hsl(255, 11%, 22%)',
						'very-dark-violet': 'hsl(260, 8%, 14%)'
					}
				}
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};

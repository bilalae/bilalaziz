/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
		
		animation: {
			scrollLeft: 'scrollLeft 30s linear infinite alternate',
			scrollRight: 'scrollRight 30s linear infinite alternate',
			typing: "typing 7s steps(40,end) forwards, blink .7s infinite",
		},
		transitionDuration: {
			'10s': '10000ms', 
		  },
		keyframes: {
			scrollLeft: {
				'0%': { transform: 'translateX(0%)' },
				'100%': { transform: 'translateX(-50%)' },
			},
			scrollRight: {
				'0%': { transform: 'translateX(0%)' },
				'100%': { transform: 'translateX(50%)' },
			},
			typing: {
				"0%": {
				  width: "0%",
				  
				},
				"100%": {
				  width: "100%"
				}
			  },
			  blink: {
				"50%": {
				  borderColor: "transparent"
				},
				"100%": {
				  borderColor: "primary"
				}
			  },
		},
		fontFamily: {
			geistSans: ['Geist Sans', 'sans-serif'],
			geistMono: ['Geist Mono', 'monospace'],
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			highlight: 'hsl(238.7 83.5% 66.7%)',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},

		
	  },
	


		

  },
  plugins: [require("tailwindcss-animate")],
}


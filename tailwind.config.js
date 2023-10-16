/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'inside-img': '0px 0px 500px 500px white inset',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1
          }
        },
        fadeOut: {
          '0%': {
            opacity: 1,
          },
          '100%': {
            opacity: 0
          }
        },
        fadeOutAlert: {
          from: {
            opacity: 1,
          },
          to: {
            opacity: 0,
            display: 'none'
          },
          /* '100%': {
            transform: 'scale(0)'
          } */
        },
        flipInHorBottom: {
          '0%': {
            '-webkit-transform': 'rotateX(80deg)',
            transform: 'rotateX(80deg)',
            opacity: 0
          },
          '100%': {
            '-webkit-transform': 'rotateX(0)',
            transform: 'rotateX(0)',
            opacity: 1
          }
        },
        flipOutHorTop: {
          '0%': {
            '-webkit-transform': 'rotateX(0)',
            transform: 'rotateX(0)',
            opacity: 1
          },
          '100%': {
            '-webkit-transform': 'rotateX(80deg)',
            transform: 'rotateX(80deg)',
            opacity: 0
          }
        },
        scaleForwardEntrance: {
          '0%': {
            transform: 'scale(0)'
          },
          '100%': {
            transform: 'scale(1)'
          }
        },
        scaleForwardExit: {
          '0%': {
            // opacity: 0,
            transform: 'scale(1)'
          },
          '100%': {
            transform: 'scale(0)'
          }
        },

        "rotate-vert-center": {
          '0%': {
            '-webkit-transform': 'rotateY(0)',
            transform: 'rotateY(0)'
          },
          '100%': {
            '-webkit-transform': 'rotateY(360deg)',
            transform: 'rotateY(360deg)'
          }
        },

        slideRightOut: {
          '0%': {
            transform: 'translateX(0px) ',
            transformOrigin: '50% 50%',
          },
          '100%': {
            transform: 'translateX(2000px) ',
            transformOrigin: '0% 50%',
          }
        },

        slideLeftIn: {
          '0%': {
            transform: 'translateX(-2000px) ',
            transformOrigin: '100% 50%',
          },
          '100%': {
            transform: 'translateX(0px) ',
            transformOrigin: '50% 50%',
          }
        },

        slideLeftOut: {
          '0%': {
            transform: 'translateX(0px) ',
            transformOrigin: '50% 50%',
          },
          '100%': {
            transform: 'translateX(-2000px) ',
            transformOrigin: '100% 50%',
          }
        },

        slideRightIn: {
          '0%': {
            transform: 'translateX(2000px) ',
            transformOrigin: '0% 50%',
          },
          '100%': {
            transform: 'translateX(0px) ',
            transformOrigin: '50% 50%',
          }
        },


        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        'fadeIn': "fadeIn 1s ease 1 normal forwards",
        'fadeOut': "fadeOut 1s ease 1 normal forwards",
        'fadeOutAlert': "fadeOutAlert 1s ease-out 1 forwards",
        'flipInHorBottom': "flipInHorBottom 1s ease-out 1 forwards",
        'flipOutHorTop': "flipOutHorTop 1s ease-out 1 forwards",
        'scaleForwardEntrance': 'scaleForwardEntrance 1s ease 0s 1 normal both',
        'scaleForwardExit': 'scaleForwardExit 1s ease 0s 1 normal both',
        "rotate-vert-center": "rotate-vert-center 3s ease 1 normal forwards",

        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",


        'slideRightIn': 'slideRightIn 1s ease-out 1 forwards',
        'slideRightOut': 'slideRightOut 1s ease-out 1 forwards',
        'slideLeftIn': 'slideLeftIn 1s ease-out 1 forwards',
        'slideLeftOut': 'slideLeftOut 1s ease-out 1 forwards',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
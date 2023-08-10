/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      animation: {
        smoke1: 'smoke1 3s linear infinite',
        smoke2: 'smoke2 3s linear infinite',
        smoke3: 'smoke3 4s linear infinite',
      },
      keyframes: {
        smoke1: {
          '0%': {
            filter: 'blur(0px)',
            transform: 'translateY(0px) scale(-1, 1)',
            opacity: '0',
          },
          '25%': {
            filter: 'blur(3px)',
            transform: 'translateY(-10px) scale(-1, 1.05)',
            opacity: '0.5',
          },
          '50% ': {
            filter: 'blur(5px)',
            transform: 'translateY(-20px) scale(-1, 1.1)',
            opacity: '1',
          },
          '75%': {
            filter: 'blur(5px)',
            transform: 'translateY(-30px) scale(-1, 1.15)',
            opacity: '0.5',
          },
          '100%': {
            filter: 'blur(7px)',
            transform: 'translateY(-40px) scale(-1, 1.2)',
            opacity: '0',
          },
        },
        smoke2: {
          '0%': {
            filter: 'blur(0px)',
            transform: 'translateY(0px) scale(1)',
            opacity: '0',
          },
          '25%': {
            filter: 'blur(3px)',
            transform: 'translateY(-10px) scale(1.05)',
            opacity: '0.5',
          },
          '50% ': {
            filter: 'blur(5px)',
            transform: 'translateY(-20px) scale(1.1)',
            opacity: '1',
          },
          '75%': {
            filter: 'blur(5px)',
            transform: 'translateY(-30px) scale(1.15)',
            opacity: '0.5',
          },
          '100%': {
            filter: 'blur(7px)',
            transform: 'translateY(-40px) scale(1.2)',
            opacity: '0',
          },
        },
        smoke3: {
          '0%': {
            filter: 'blur(0px)',
            transform: 'translateY(0px) scale(1)',
            opacity: '0',
          },
          '25%': {
            filter: 'blur(3px)',
            transform: 'translateY(-20px) scale(1.05)',
            opacity: '0.5',
          },
          '50% ': {
            filter: 'blur(5px)',
            transform: 'translateY(-40px) scale(1.1)',
            opacity: '1',
          },
          '75%': {
            filter: 'blur(5px)',
            transform: 'translateY(-60px) scale(1.15)',
            opacity: '0.5',
          },
          '100%': {
            filter: 'blur(7px)',
            transform: 'translateY(-80px) scale(1.2)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
};

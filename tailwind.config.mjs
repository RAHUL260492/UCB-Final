/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                ucb: {
                    dark: '#000000',
                    emerald: '#006A3C',
                    copper: '#E68325',
                    ivory: '#FFFFFF',
                    champagne: '#A3B48C',
                    plum: '#0066A2',
                    blue: '#0066A2',
                    'blue-glow': '#4B7BA7',
                    green: '#006A3C',
                    'green-glow': '#5D8C5A',
                    orange: '#E68325',
                    'orange-glow': '#F5A623',
                    teal: '#26AB9A',
                    sage: '#A3B48C',
                    periwinkle: '#6487B0',
                    gold: '#F0A71F',
                    black: '#000000',
                    white: '#FFFFFF',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                playfair: ['Playfair Display', 'serif'],
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'scroll': 'scroll 2s ease-in-out infinite',
                'shimmer': 'shimmer 1.5s infinite',
                'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'floatSlow 8s ease-in-out infinite',
                'gradient': 'gradientShift 8s ease infinite',
                'scale-in': 'scaleIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
                'slide-in-left': 'slideInLeft 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'slide-in-right': 'slideInRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
                'blur-in': 'blurIn 0.8s ease-out forwards',
                'ripple': 'ripple 0.6s ease-out forwards',
                'pulse-ring': 'pulseRing 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
                'spin-slow': 'spin-slow 20s linear infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(28px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scroll: {
                    '0%': { transform: 'translateY(0)', opacity: '1' },
                    '100%': { transform: 'translateY(10px)', opacity: '0' },
                },
                shimmer: {
                    '100%': { transform: 'translateX(100%)' },
                },
                slideUp: {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '33%': { transform: 'translateY(-18px) rotate(1.5deg)' },
                    '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
                },
                floatSlow: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.85)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                blurIn: {
                    '0%': { opacity: '0', filter: 'blur(12px)', transform: 'scale(0.97)' },
                    '100%': { opacity: '1', filter: 'blur(0)', transform: 'scale(1)' },
                },
                ripple: {
                    '0%': { transform: 'scale(0)', opacity: '0.6' },
                    '100%': { transform: 'scale(4)', opacity: '0' },
                },
                countUp: {
                    'from': { opacity: '0', transform: 'translateY(12px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                widthGrow: {
                    'from': { width: '0' },
                    'to': { width: 'var(--target-width, 100%)' },
                },
                pulseRing: {
                    '0%': { boxShadow: '0 0 0 0 rgba(38, 171, 154, 0.5)' },
                    '70%': { boxShadow: '0 0 0 16px rgba(38, 171, 154, 0)' },
                    '100%': { boxShadow: '0 0 0 0 rgba(38, 171, 154, 0)' },
                },
                typewriter: {
                    'from': { clipPath: 'inset(0 100% 0 0)' },
                    'to': { clipPath: 'inset(0 0% 0 0)' },
                },
                'spin-slow': {
                    'from': { transform: 'rotate(0deg)' },
                    'to': { transform: 'rotate(360deg)' },
                },
            }
        }
    },
    plugins: [],
}

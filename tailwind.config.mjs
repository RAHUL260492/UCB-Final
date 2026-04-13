/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                ucb: {
                    dark: '#1C1C1E',
                    emerald: '#0A6847',
                    copper: '#B87333',
                    ivory: '#FAF8F5',
                    champagne: '#F0E6D3',
                    plum: '#0066A2',
                    blue: '#0066A2',
                    green: '#006A3C',
                    orange: '#E68325',
                    teal: '#26AB9A'
                }
            },
            fontFamily: {
                sans: ['Outfit', 'sans-serif'],
                display: ['Sora', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            }
        }
    },
    plugins: [],
}

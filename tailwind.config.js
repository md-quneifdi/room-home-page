/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            '3xl': { 'max': '2900px' },
            // => @media (max-width: 1535px) { ... }

            '2xl': { 'max': '1535px' },
            // => @media (max-width: 1535px) { ... }

            'xl': { 'max': '1346px' },
            // => @media (max-width: 1279px) { ... }

            'lg': { 'max': '1058px' },
            // => @media (max-width: 1023px) { ... }

            'md': { 'max': '768px' },
            // => @media (max-width: 767px) { ... }

            'sm': { 'max': '639px' },
            // => @media (max-width: 639px) { ... }

            'es': { 'max': '420px' },
            // => @media (max-width: 639px) { ... }
        },
        colors: {
            'white': 'hsl(0, 0%, 100%)',
            'black': 'hsl(0, 0%, 0%)',
            'dark-gray': 'hsl(0, 0%, 63%)',
            'very-dark-gray': ' hsl(0, 0%, 27%)',
        },
        extend: {
            backgroundImage: {
                'first-desktop': "url('/src/Assets/images/desktop-image-hero-1.jpg')",
                'second-desktop': "url('/src/Assets/images/desktop-image-hero-2.jpg')",
                'third-desktop': "url('/src/Assets/images/desktop-image-hero-3.jpg')",
                'first-mobile': "/src/Assets/images/mobile-image-hero-1.jpg",
                'second-mobile': "/src/Assets/images/mobile-image-hero-2.jpg",
                'third-mobile': "/src/Assets/images/mobile-image-hero-3.jpg",
            }
        }
    },
    plugins: [],
}
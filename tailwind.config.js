/** @type {import('tailwindcss').Config} */
import PrimeUI from "tailwindcss-primeui";

const THEME_EXTENDED = {
    colors: {
        dialist: '#8c7a66',
        dialist_secondary: '#C0AF9F',
        dialist_text: '#ab947d',
        test_color: '#ff00ff',
        dark_blue: '#1a253c',
    },
    fontFamily: {
        benton: ['BentonSans', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'sans-serif'],
        'helvetica-ul': ['Helvetica Neue UltraLight', 'sans-serif'],
        'helvetica-ul-italic': ['Helvetica Neue UltraLight Italic', 'sans-serif'],

    },
}

export default {
    darkMode: ['selector', '[class*="p-dark"]'],
    content: [
        "./app/components/**/*.{js,vue,ts}",
        "./app/layouts/**/*.vue",
        "./app/pages/**/*.vue",
        "./app/plugins/**/*.{js,ts}",
        "./app/app.vue",
        "./app/error.vue",
        "./nuxt.config.{js,ts}",
        "./app/**/*.vue",
        "./components/**/*.{js,vue,ts}",
    ],
    theme: {
        extend: {
            ...THEME_EXTENDED,
        }
    },
    plugins: [
        PrimeUI,
    ],
};
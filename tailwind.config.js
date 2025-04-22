/** @type {import('tailwindcss').Config} */
import PrimeUI from "tailwindcss-primeui";

const THEME_EXTENDED = {
    colors: {
        dialist: '#8c7a66',
        dialist_secondary: '#C0AF9F',
        dialist_text: '#ab947d',
        test_color: '#ff00ff',
        dark_blue: '#1a253c',
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

        sidebar: {
            DEFAULT: 'hsl(var(--sidebar-background))',
            foreground: 'hsl(var(--sidebar-foreground))',
            primary: 'hsl(var(--sidebar-primary))',
            'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
            accent: 'hsl(var(--sidebar-accent))',
            'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
            border: 'hsl(var(--sidebar-border))',
            ring: 'hsl(var(--sidebar-ring))'
        },

    },
    fontFamily: {
        benton: ['BentonSans', 'sans-serif'],
        helvetica: ['Helvetica Neue', 'sans-serif'],
        'helvetica-ul': ['Helvetica Neue UltraLight', 'sans-serif'],
        'helvetica-ul-italic': ['Helvetica Neue UltraLight Italic', 'sans-serif'],

    },
    keyframes: {
        "accordion-down": {
            from: { height: 0 },
            to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
            from: { height: "var(--radix-accordion-content-height)" },
            to: { height: 0 },
        },
        "collapsible-down": {
            from: { height: 0 },
            to: { height: 'var(--radix-collapsible-content-height)' },
        },
        "collapsible-up": {
            from: { height: 'var(--radix-collapsible-content-height)' },
            to: { height: 0 },
        },
    },
    animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "collapsible-down": "collapsible-down 0.2s ease-in-out",
        "collapsible-up": "collapsible-up 0.2s ease-in-out",
    },



}

module.exports = {
    darkMode: ['selector', '[class*="p-dark"]', 'class'],
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
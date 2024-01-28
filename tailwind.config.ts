import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                'dark-blue': 'hsl(209, 23%, 22%)',
                'dark-blue-bg': 'hsl(207, 26%, 17%)',
                'dark-blue-text': 'hsl(200, 15%, 8%)',
                'dark-gray': 'hsl(0, 0%, 52%)',
                'light-gray-bg': 'hsl(0, 0%, 98%)',
            },
        },
    },
    plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./Pages/**/*.{razor,html,cshtml}", "./Shared/**/*.{razor,html,cshtml}"],
    theme: {
        extend: {
            colors: {
              'main-yellow': '#bdb441',
              'dark-yellow': '#a69d3a',
              'sidebar-grey': '#202020',
              'bg-grey': '#1b1b1b'
            },
        }
    },
    plugins: [],
}
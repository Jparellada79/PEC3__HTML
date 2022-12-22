/** @type {import('tailwindcss').Config} */
module.exports = {

    content: ["./src/**/*.{html,js}"],
    theme: {
        fontSize: {
            'xl': '1.25rem',
            '2xl': '2.5rem',
            '7xl': '4.5rem',
            'texto': '4.5rem',
        },
        container: {
            center: true,
        },
        fontFamily: {
            'mifuente': ["'sans-serif'", 'Oswald', 'serif'],
        },
        extend: {
            backgroundImage: theme => ({
                'fondoindex': "url('../images/fondoindex.jpg')",
                'micro': "url('../images/micro.jpg')",
            }),
            gridTemplateRows: {
                '8': 'repeat(8, minmax(0, 1fr))'
            },
            gridRow: {
                'span-8': 'span 8 / span 8',
            }
        },

    },
    plugins: [],
}
const glob = require("glob"),
    path = require("path"),
    plugin = require("tailwindcss/plugin");

module.exports = {
    purge: {
        enabled: process.env.NODE_ENV == "production",
        content: glob.sync(path.join(__dirname, "**/*.htm")),
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          fontFamily: {
            'press-start': ['"Press Start 2P"', 'cursive']
          }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms")({
            strategy: "class",
        }),

        //
        plugin(function ({ addUtilities }) {
            const noScrollbar = {
                /* Hide scrollbar for Chrome, Safari and Opera */
                ".no-scrollbar::-webkit-scrollbar": {
                    display: "none",
                },
                /* Hide scrollbar for IE, Edge and Firefox */
                ".no-scrollbar": {
                    "-ms-overflow-style": "none" /* IE and Edge */,
                    "scrollbar-width": "none" /* Firefox */,
                },
            };

            addUtilities(noScrollbar);
        }),
    ],
};

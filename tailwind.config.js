const glob = require("glob"),
      path = require("path"),
      plugin = require("tailwindcss/plugin");

module.exports = {
    content: glob.sync(path.join(__dirname, "**/*.htm")),

    // if you have a plugin using tailwind template
    // content: [
    //     ...glob.sync(path.join(__dirname, "**/*.htm")), 
    //     ...glob.sync(path.join(__dirname, "../../plugins/username/coolplugin/components/**/*.htm")),
    // ],

    media: false, // ex darkMode

    theme: {
        extend: {
            colors: {
                // brand colors ex: 'bg-brand-dark'
                brand: {
                    dark: "#162983",
                    DEFAULT: "#5FB4E5",
                    light: "#de46d6",

                    secondary: {
                        DEFAULT: "#a0a0a0",
                        light: "#e0e0e0",
                    },
                },
            },
            // class: 'font-press-start'
            // layout head section ex:
            // <link rel="preconnect" href="https://fonts.gstatic.com" />
            // <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
            fontFamily: {
                "press-start": ['"Press Start 2P"', "cursive"],
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography"), // Use class 'max-w-none' to override the embedded 'max-width' ex: 'prose max-w-none'
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
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

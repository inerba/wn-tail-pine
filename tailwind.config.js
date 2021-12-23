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

const mix = require("laravel-mix");
const tailwindcss = require("tailwindcss");

// Load APP_URL from .env file
require("dotenv").config({ path: __dirname + "/./../../.env" }); // read .env file
if (!process.env.APP_URL && !mix.inProduction()) {
    throw new Error(
        "You must define APP_URL inside .env wintercms file! php artisan winter:env"
    );
}

mix.setPublicPath("/")
    .js("src/js/app.js", "assets/js/scripts.js")
    .sass("src/scss/app.scss", "assets/css/styles.css")
    .options({
        processCssUrls: false,
        autoprefixer: {
            enabled: true,
            options: {
                overrideBrowserslist: ["last 2 versions", "> 1%"],
                cascade: true,
                grid: true,
            },
        },
        postCss: [tailwindcss("./tailwind.config.js")],
    })
    .version();

mix.browserSync({
    proxy: process.env.APP_URL, // Local server
    notify: false,
    open: false,
    files: ["**/*.htm", "assets/css/styles.css", "assets/js/scripts.js"],
});

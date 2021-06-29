# WinterCMS, TailwindCSS & Alpine.js easy theme starter

Theme boilerplate for WinterCMS with Laravel Mix, TailwindCSS & Alpine.js 3

includes:

- Webpack (using Laravel Mix)
- TailwindCSS
- Alpine.js 3
- jQuery (required by WinterCMS)
- postCss

# Installation

Make sure you have the .env file ready with APP_URL compiled correctly, otherwise

`php artisan winter:env` and fill APP_URL

Clone repo and switch to new theme

```bash
cd your_project_folder 
git clone https://github.com/inerba/wn-tail-pine.git themes/wn-tail-pine 
php artisan theme:use wn-tail-pine
```

Install packages

`cd themes/wn-tail-pine`

`yarn` or `npm install`

Start server

`yarn dev` or `npm run dev`

Build for production

`yarn build` or `npm run build`
    
# License

MIT

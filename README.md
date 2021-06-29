# WinterCMS, TailwindCSS & Alpine.js easy theme starter

Theme boilerplate for WinterCMS with Laravel Mix, TailwindCSS & Alpine.js 3

includes:

- Webpack (using Laravel Mix)
- TailwindCSS
- Alpine.js 3
- jQuery (required by WinterCMS)
- postCss

# Installation

0: Preparation
    Make sure you have the .env file ready with APP_URL compiled correctly, otherwise
    `php artisan winter:env` and fill APP_URL
1: Clone repo and switch to new theme
    ```
    cd your_project_folder 
    git clone https://github.com/inerba/wn-tail-pine.git themes/wn-tail-pine 
    php artisan theme:use wn-tail-pine
    ```

2: Install packages
    `cd themes/wn-tail-pine`
    `yarn` or `npm install`

3: Start server
    `yarn dev` or `npm run dev`

4: Build for production
    `yarn build` or `npm run build`
    
# License

MIT

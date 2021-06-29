import Alpine from 'alpinejs'

try {
    window.$ = window.jQuery = require('jquery');
    window.Alpine = Alpine
    // TODO put: Alpine.start() at very end of layout

} catch (e) {}

require('./main');

import {loadData} from './modules/ajax_data.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('xd');
    loadData('abc', 'dist/partials/first.html');
});
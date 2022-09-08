let body = document.querySelector('body');
let button_change_theme = document.querySelector('.dark_theme');

button_change_theme.addEventListener('click', function () {
    body.classList.toggle('dark_body');
})
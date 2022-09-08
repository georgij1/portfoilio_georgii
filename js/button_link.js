for (let button of document.querySelectorAll('.button')) {
    button.addEventListener('click', function (evt) {
        if (button.dataset.newpage === "false") {
            window.open(button.dataset.link, '_blank');
        }
        else {
            window.open(button.dataset.link);
        }
        console.log(button)
    })
}
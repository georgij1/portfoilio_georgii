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

for (let link_data of document.querySelectorAll('.data_link')) {
    link_data.addEventListener('click', function (evt) {
        if (link_data.dataset.newpage === "false") {
            window.open(link_data.dataset.link, '_blank');
        }
        else {
            window.open(link_data.dataset.link)
        }
        console.log(link_data)
    })
}

for (let data_link_project of document.querySelectorAll('.data_link_to_project')) {
    data_link_project.addEventListener('click', function (evt) {
        if (data_link_project.dataset.newpage === "false") {
            window.open(data_link_project.dataset.link, '_blank');
        }
        else {
            window.open(data_link_project.dataset.link)
        }
        console.log(data_link_project)
    })
}
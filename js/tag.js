let projectTags = {
    "Викторина" : ["Frontend", "Викторина"],
    "Словарь Английского языка" : ["Frontend", "Словарь Английского языка"],
    "Калькулятор личных доходов" : ["Frontend", "Калькулятор личных доходов"],
    "Вёрстка страницы о Гарри Поттере" : ["Frontend", "Вёрстка страницы о Гарри Поттере", "Вёрстка из Figma"],
    "Список дел" : ["Frontend", "Список дел"],
    "Дизайн часов из Figma" : ["Frontend", "Дизайн часов из Figma", "Вёрстка из Figma"]
}

let selectedTags = [];
let tags = document.querySelectorAll('.tag');
console.log(tags)

let checkTagsProject = function(name) {

    let tagsProject = projectTags[name]; //["Frontend", "Backend"]
    console.log(name)

    if (Object.keys(projectTags).includes(name) === false) {
        console.log(`У проекта с названием "${name}" имеются проблемы с распознаванием, поэтому любые фильтры он не проходит`)
        return false;
    }

    // Если проект не содержит хотя бы один тэг из выделенных, то проверку он не проходит
    for (let i = 0; i < selectedTags.length; ++i) {
        if (tagsProject.includes(selectedTags[i].textContent) === false) {
            return false;
        }
    }

    return true;
}

// Добавление обработчика событий для каждого тега
let addListenerToTag = function(tag) {
    tag.addEventListener('click', function () {
        if (selectedTags.includes(tag) === false) {
            selectedTags.push(tag);
            tag.classList.add('tag_click')
        }
        else {
            tag.classList.remove('tag_click');
            selectedTags.splice(selectedTags.indexOf(tag), 1);
        }

        // Обновление списка проектов
        updateProjectList();
    })
};

for (let i = 0; i < tags.length; ++i) {
    addListenerToTag(tags[i]);
}
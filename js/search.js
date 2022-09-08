function updateProjectList() {
    let search = document.querySelector('.search_project');
    let Projects = document.querySelectorAll('.project');
    console.log(Projects);

    for (let i = 0; i < Projects.length; ++i) {
        let project = Projects[i];
        project.classList.add('not_visible');
    }

    for (let i = 0; i < Projects.length; ++i) {
        let project = Projects[i];
        let description = project.querySelector('.name_project');
        let name = description.textContent;

        console.log(project, description, name)

        if (name.toLowerCase().indexOf(search.value.toLowerCase()) !== -1 && checkTagsProject(name)) {
            project.classList.remove('not_visible');
        }
    }
}
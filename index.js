const projects = [
    { name: 'CLI Trivia Game', image: 'img/trivia.png', description: 'A fun CLI trivia game written in JS, showcasing functional programming.', url: 'https://github.com/troncosojose22/bonus-project-cli-app'},
    { name: 'ShadowRealm', image: 'img/shadowrealm.png', description: 'A web app that displays random Yu-Gi-Oh! cards in a dynamic and visually immersive way.', url: 'https://github.com/jose-jojo-mls/ShadowRealm'}
]

const projectsGrid = document.querySelector('#projects-grid');

projectsGrid.innerHTML = '';

projects.forEach((project) => {
    const projectLi = document.createElement('li');
    const projectFigure = document.createElement('figure');
    const figureImg = document.createElement('img');
    const figureCaption = document.createElement('figcaption');
    const projectDescription = document.createElement('p');
    const projectGithub = document.createElement('p');
    const anchor = document.createElement('a');

    projectLi.classList.add('project-grid-element');
    projectFigure.classList.add('project-grid-figure');
    figureImg.classList.add('projects-img');
    figureImg.src = project.image;
    figureImg.alt = project.name;
    figureCaption.textContent = project.name;
    projectDescription.textContent = project.description;
    projectGithub.classList.add('github-link');
    anchor.href = project.url;
    anchor.textContent = 'Github repo';

    projectFigure.append(figureImg, figureCaption);
    projectGithub.append(anchor);
    projectLi.append(projectFigure, projectDescription, projectGithub);
    projectsGrid.append(projectLi);
})
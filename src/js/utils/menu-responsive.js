function activeMenuResponsive(btnAction) {
    

    document.querySelector(btnAction)
    .addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        document.querySelector(".layout").classList.toggle('layout--mobile');
    });
}
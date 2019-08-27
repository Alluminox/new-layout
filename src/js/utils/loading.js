function loading(selector) {
    
    window.addEventListener('load', () => {
        let loader = document.querySelector(selector);
        loader.classList.toggle('loader-wrapper--fade');

    })
}
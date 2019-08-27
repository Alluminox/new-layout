let utilitites = {

    suavityScroll: () => {

        const menuItems = document.querySelectorAll(".list__item a[href^='#']");
        menuItems.forEach(item => {
        
            item.addEventListener('click', (event) => {
                event.preventDefault();
        
                const target = event.target;          
                const to = getScrollTopHref(target);
        
                scrollToPosition(to);
            })
        
        });
       
    }


}





function getScrollTopHref(element) {
    const id = element.getAttribute("href");
    console.log('id', id)
    return document.querySelector(id).offsetTop;
}



function scrollToPosition(to) {
    window.scroll({
            top: to,
            behavior: 'smooth'
        });

}
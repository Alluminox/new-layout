let utilitites = {

    suavityScroll: () => {

        const menuItems = document.querySelectorAll("a[href^='#']");
        menuItems.forEach(item => {
        
            item.addEventListener('click', (event) => {
                event.preventDefault();
        
                const target = event.target;          
                const to = getScrollTopHref(target);
        
                scrollToPosition(to);
            })
        
        });
       
    },


    animateScroll: () => {

        const all = document.querySelectorAll("[data-anime]");
        const animationClass = "animate";

        animeWindowScroll(all);


    }


}





function getScrollTopHref(element) {
    const id = element.getAttribute("href");
    console.log('id', id)
    return document.querySelector(id).offsetTop;
}



function scrollToPosition(to) {
    window.focus();
    window.scroll({
            top: to,
            behavior: 'smooth'
        });

}



// Evita multiplos clicks
function debouce(callback, wait) {
    let timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(callback, wait);
    }

}



function animeWindowScroll(elements) {
    window.addEventListener('scroll',  debouce(function() {

        // distancia da barra de scroll e o topo da página  + 3/4 da altura do monitor
        const windowTop = window.pageYOffset  + ((window.innerHeight * 1) / 4); 
     
        elements.forEach(element => {

            // Distancia do elemento(data-anime) em relação ao topo da página
            const elementTop = element.offsetTop;
    
            // Se meu windowTop(Scroll em Relação ao topo da Janela )
            // for maior que o elemento(data-anime) em relação ao topo , adiciona a classe
            if(windowTop > elementTop) {
                element.classList.add('animate');

            }else {
                element.classList.toggle('animate');
            }


        })


    }, 200));
} 
class IndexController {

    constructor() {
        this.initEvents();
    }


    initEvents() {
        loading(".loader-wrapper");
        activeMenuResponsive(".mobile-btn");
        utilitites.suavityScroll();
        utilitites.animateScroll();
    }

}
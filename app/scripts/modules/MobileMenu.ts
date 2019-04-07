import $ from 'jquery';

export class MobileMenu {

    menuIcon;
    menuContent;
    siteHeader;

    constructor() {


        this.menuIcon = $('.site-header__menu-icon');
        this.menuContent = $('.site-header__menu-content');
        this.siteHeader = $('.site-header');

        this.events();

        /* $('.site-header__menu-icon').on("click", (event) => 
        {console.log('menu icon clicked');
        }); */


    }

    events() {
        this.menuIcon.on("click", (event) => {
            this.toggleTheMenu();
        });

        // alternative way to do same thing
        //this.menuIcon.click(this.toggleTheMenu.bind(this));
    }

    toggleTheMenu() {
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    }




}
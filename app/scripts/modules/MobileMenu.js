"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var MobileMenu = /** @class */ (function () {
    function MobileMenu() {
        this.menuIcon = jquery_1.default('.site-header__menu-icon');
        this.menuContent = jquery_1.default('.site-header__menu-content');
        this.siteHeader = jquery_1.default('.site-header');
        this.events();
        /* $('.site-header__menu-icon').on("click", (event) =>
        {console.log('menu icon clicked');
        }); */
    }
    MobileMenu.prototype.events = function () {
        var _this = this;
        this.menuIcon.on("click", function (event) {
            _this.toggleTheMenu();
        });
        // alternative way to do same thing
        //this.menuIcon.click(this.toggleTheMenu.bind(this));
    };
    MobileMenu.prototype.toggleTheMenu = function () {
        this.menuContent.toggleClass('site-header__menu-content--is-visible');
        this.siteHeader.toggleClass('site-header--is-expanded');
        this.menuIcon.toggleClass('site-header__menu-icon--close-x');
    };
    return MobileMenu;
}());
exports.MobileMenu = MobileMenu;

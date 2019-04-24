"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jquery_1 = __importDefault(require("jquery"));
var Modal = /** @class */ (function () {
    function Modal() {
        this._openModalButton = jquery_1.default('.open-modal');
        this._modal = jquery_1.default('.modal');
        this._closeModalButton = jquery_1.default('.modal__close');
        this.events();
    }
    Modal.prototype.events = function () {
        // clicking open modal button
        this._openModalButton.click(this.openModal.bind(this));
        // clicking the x close modal button
        this._closeModalButton.click(this.closeModal.bind(this));
        //pushes any key
        jquery_1.default(document).keyup(this.keyPressHandler.bind(this));
    };
    // close modal on keypress = esc key
    Modal.prototype.keyPressHandler = function (e) {
        if (e.which == 27) {
            this.closeModal();
        }
    };
    Modal.prototype.openModal = function () {
        this._modal.addClass('modal--is-visible');
        return false;
    };
    Modal.prototype.closeModal = function () {
        this._modal.removeClass('modal--is-visible');
    };
    return Modal;
}());
exports.Modal = Modal;

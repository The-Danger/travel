import $ from 'jquery';

export class Modal {

    _openModalButton; 
    _modal;
    _closeModalButton; 

    constructor() {

        this._openModalButton = $('.open-modal');
        this._modal = $('.modal');
        this._closeModalButton = $('.modal__close');
        this.events();

    }

    events() {
        // clicking open modal button
        this._openModalButton.click(this.openModal.bind(this));

        // clicking the x close modal button
        this._closeModalButton.click(this.closeModal.bind(this));

        //pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));
      

    }

    // close modal on keypress = esc key
    keyPressHandler(e) {
        if (e.which == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this._modal.addClass('modal--is-visible');
        return false;
    }

    closeModal() {
        this._modal.removeClass('modal--is-visible');
    }
}
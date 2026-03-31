


class Popup {
    constructor(popSelector){
        this._popup = document.querySelector(popSelector)
    }

    open(){
        this._popup.classList.add("popup_is-opened");
        document.addEventListener("keydown", this._handleEscClose);
    }

    close(){
       this._popup.classList.remove("popup_is-opened");
        document.removeEventListener("keydown", this._handleEscClose);
    }

    _handleEscClose(evt){
    //Fechar clicando em "ESC"
        if(evt.key === "Escape"){
            this.close() 
        }
    }

    setEventListeners(){
    //Fechar no X
        const closeBtn = this._popup.querySelector(".popup__close");
        if (closeBtn){
            closeBtn.addEventListener("click", () => {
                this.close()
            });
        }

    //Fechar clicando fora do POPUP
        this._popup.addEventListener("mousedown", evt => {
        if (evt.target === evt.currentTarget) {
            this.close();
            }
        });

    }
}





class PopupWithImage extends Popup{}
class PopupWithForm extends Popup{}
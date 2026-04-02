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


class PopupWithImage extends Popup{
    constructor(popSelector){
        super(popSelector);
        this._name = this._popup.querySelector(".popup__caption");
        this._image = this._popup.querySelector(".popup__image")
    }
    
    open(name,link){
        this._name.textContent = name;
        this._image.alt = name;
        this._image.src = link;
         
        super.open(); 
    }
}


class PopupWithForm extends Popup{
     constructor(popSelector,formSubmit){
        super(popSelector);
        this._formElement = this._popup.querySelector(".popup__form")
        this._formInputs = this._formElement.querySelectorAll(".popup__input");
        this._formSubmit = formSubmit;
    }

    //
    _getInputValues(){
        const inputList = {};  //cria um objeto para ser preenchido com os inputs
       
        this._formInputs.forEach((input) => {
            inputList[input.name] = input.value;
        });
        return inputList;
    }

    setInputValues(data){
        this._formInputs.forEach((input) => {
            console.log("input_name",input.name)
            console.log("value",data[input.name])
            input.value = data[input.name]
        });
    }

    close(){
        this._formElement.reset()
        super.close();
    }

    setEventListeners(){
        super.setEventListeners()
        
        this._formElement.addEventListener("submit", (evt) =>{
            evt.preventDefault();
            const inputList = this._getInputValues();
             this._formSubmit(inputList);
        })
    }

}



export {Popup,PopupWithImage,PopupWithForm};






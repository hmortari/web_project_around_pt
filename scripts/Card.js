//Classe do Card refatorada
class Card{
    constructor(data,templateSelector,handleImageClick){
        
        const {name = "Sem Nome", link = "Sem Link"} = data
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleImageClick = handleImageClick;
    }

    //Template
    _getTemplate(){
        return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(true); 
    }

    //Handler's 
    _handleLikedClick(){
        this._likeBtn.classList.toggle("card__like-button_is-active")
    }
    _handleDeleteClick(){
        this._element.remove()
    }

    //Event Listeners
    _setEventListeners(){
        this._likeBtn.addEventListener("click",() => this._handleLikedClick());
        this._deleteBtn.addEventListener("click",() => this._handleDeleteClick());
        this._cardImage.addEventListener("click",() => this._handleImageClick(this._name, this._link));
    }
    

    generateCard(){
    this._element = this._getTemplate();
    this._cardTitle = this._element.querySelector(".card__title")
    this._cardImage = this._element.querySelector(".card__image")
    this._likeBtn = this._element.querySelector(".card__like-button")
    this._deleteBtn = this._element.querySelector(".card__delete-button")

    this._cardTitle.textContent = this._name
    this._cardImage.src = this._link
    this._cardImage.alt = this._name

    this._setEventListeners();

    return this._element;
    }
}

export {Card};

const cardsContainer = document.querySelector(".cards__list");
const initialCards = [
    {name: "Vale de Yosemite", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name:"Montanhas Carecas" , link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional da Vanoise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
];


//Create Card 
function getCardElement (name = "Lugar sem nome", link = "./images/placeholder.jpg"){

    const cardElement = document.querySelector("#card-template").content.querySelector(".card").cloneNode(true);    
    const cardTitle = cardElement.querySelector(".card__title")
    const cardImage = cardElement.querySelector(".card__image")
    const likeBtn  = cardElement.querySelector( ".card__like-button")
    const deleteBtn  = cardElement.querySelector(".card__delete-button")
    
    function handleLikedBtn (){
    likeBtn.classList.toggle("card__like-button_is-active")
};
    function handleDeleteBtn (){
    cardElement.remove();
};
    function handleImagePop(){
        imageInfo.alt = cardImage.alt;
        imageInfo.src = cardImage.src;
        imageTitle.textContent = cardTitle.textContent;
        openModal(imagePop);

    }

    cardTitle.textContent = name;
    cardImage.alt = name;
    cardImage.src = link;


    deleteBtn.addEventListener("click",handleDeleteBtn);
    likeBtn.addEventListener("click",handleLikedBtn);
    cardImage.addEventListener("click",handleImagePop);

    return cardElement;
};

//Input card to HTML
function renderCard(name, link, container){
    const cardElement = getCardElement(name,link);
    container.prepend(cardElement);
}
//Create card FROM Array
initialCards.forEach((card) => {
    renderCard(card.name, card.link,cardsContainer);
});
    

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_is-opened");
    if (openedPopup) closeModal(openedPopup);
  }
}

function openModal(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscClose);
}

function closeModal(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscClose);
}

//fechar clickando fora

document.querySelectorAll(".popup").forEach(popup => {
  popup.addEventListener("mousedown", evt => {
    if (evt.target === popup) closeModal(popup);
  });
});



//handle profile edit popup
const editPop = document.querySelector("#edit-popup");
const editBtn = document.querySelector(".profile__edit-button");
const editCloseBtn = editPop.querySelector(".popup__close");
const editFormElement = editPop.querySelector("#edit-profile-form");

function fillProfileForm(){
const actualName = document.querySelector(".profile__title").textContent;
const actualDescription = document.querySelector(".profile__description").textContent;

document.querySelector(".popup__input_type_name").value = actualName;
document.querySelector(".popup__input_type_description").value = actualDescription; 
};

function handleOpenEditModal(){
 fillProfileForm();
 resetValidation(editFormElement, validationConfig);
  openModal(editPop);
};


//submit handler
function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    
    const nameInput = editFormElement.querySelector(".popup__input_type_name").value
    const jobInput = editFormElement.querySelector(".popup__input_type_description").value
    
    document.querySelector(".profile__title").textContent = nameInput
    document.querySelector(".profile__description").textContent = jobInput
    
    closeModal(editPop);
}
// edit button actions
editBtn.addEventListener("click",handleOpenEditModal)
editCloseBtn.addEventListener("click",() => closeModal(editPop));
editFormElement.addEventListener("submit", handleProfileFormSubmit);




//Handler NewCard
const newCardPop = document.querySelector("#new-card-popup");
const newCardBtn = document.querySelector(".profile__add-button");
const newCardCloseBtn = newCardPop.querySelector(".popup__close");
const newCardCardForm = newCardPop.querySelector("#new-card-form");

// New Card Handler
function handleCardFormSubmit(evt){
   evt.preventDefault();
   
   const cardName = newCardCardForm.querySelector(".popup__input_type_card-name").value;
   const cardLink = newCardCardForm.querySelector(".popup__input_type_url").value;

    renderCard(cardName,cardLink,cardsContainer);

   newCardCardForm.reset();
    resetValidation(newCardCardForm, validationConfig);
    closeModal(newCardPop); 
};

newCardBtn.addEventListener("click", () => {
  resetValidation(newCardCardForm, validationConfig);
  openModal(newCardPop);
});
newCardCloseBtn.addEventListener("click",() => closeModal(newCardPop));
//Pega o botão do FORM
newCardCardForm.addEventListener("submit", handleCardFormSubmit);


//Image Popup
    const imagePop = document.querySelector("#image-popup")
    const imageInfo = imagePop.querySelector(".popup__image");
    const imageTitle = imagePop.querySelector(".popup__caption");
    const imagePopcloseBtn = imagePop.querySelector(".popup__close");



imagePopcloseBtn.addEventListener("click",() => closeModal(imagePop));
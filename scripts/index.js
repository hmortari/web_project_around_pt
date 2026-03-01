const cardsContainer = document.querySelector(".cards__list");
const initialCards = [
    {name: "Vale de Yosemite", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name:"Montanhas Carecas" , link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional da Vanoise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
];


//ADD CARD FROM ARRAY TO HMTL
function getCardElement (name = "Lugar sem nome", link = "./images/placeholder.jpg"){

    const cardElement = document.querySelector("#card-template").content.querySelector(".card")
  .cloneNode(true);    
    const cardTitle = cardElement.querySelector(".card__title")
    const cardImage = cardElement.querySelector(".card__image")
    const likeBtn  = cardElement.querySelector( ".card__like-button")
    const deleteBtn  = cardElement.querySelector(".card__delete-button")


    cardTitle.textContent = name;
    cardImage.alt = name;
    cardImage.src = link;

    function handleLikedBtn (){
    likeBtn.classList.toggle("card__like-button_is-active")
};
    function handleDeleteBtn (){
     cardElement.remove();
};

    function handleImageView(){
        Definir o texto do elemento de legenda do modal.
        Definir o src da imagem do modal.
        Definir o alt da imagem do modal.
        Abrir o modal usando a função openModal().
    };

    deleteBtn.addEventListener("click",handleDeleteBtn);
    likeBtn.addEventListener("click",handleLikedBtn);
    cardImage.addEventListener("click",HANDLER);


    return cardElement;
};




function renderCard(name, link, container){
    const cardElement = getCardElement(name,link);
    container.prepend(cardElement);
}

initialCards.forEach((card) => {
    renderCard(card.name, card.link,cardsContainer);
});
    


function openModal(popup){
    popup.classList.add("popup_is-opened");
 };

function closeModal(popup){
    popup.classList.remove("popup_is-opened");
};




//handle profile edit popup
const editPop = document.querySelector("#edit-popup");
const editBtn = document.querySelector(".profile__edit-button");
const editCloseBtn = editPop.querySelector(".popup__close");
const editSaveBtn = editPop.querySelector(".popup__button");
const editFormElement = editPop.querySelector("#edit-profile-form");

function fillProfileForm(){
const actualName = document.querySelector(".profile__title").textContent;
const actualDescription = document.querySelector(".profile__description").textContent;

document.querySelector(".popup__input_type_name").value = actualName;
document.querySelector(".popup__input_type_description").value = actualDescription; 
};

function handleOpenEditModal(){
 fillProfileForm();
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
const newCardSaveBtn = newCardPop.querySelector(".popup__button");
const newCardCardForm = newCardPop.querySelector("#new-card-form");

// openModal(newCardPop);
newCardBtn.addEventListener("click",() => openModal(newCardPop));
newCardCloseBtn.addEventListener("click",() => closeModal(newCardPop));
newCardSaveBtn.addEventListener("submit", handleProfileFormSubmit);



// New Card Handler
function handleCardFormSubmit(evt){
   evt.preventDefault();
   
   const cardName = cardForm.querySelector(".popup__input_type_card-name").value;
   const cardLink = cardForm.querySelector(".popup__input_type_url").value;

    document.querySelector(".card__title").textContent = nameInput
    document.querySelector(".card__description").textContent = jobInput

   closeModal(newCardPop);
};


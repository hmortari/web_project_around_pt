const initialCards = [
    {name: "Vale de Yosemite", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name:"Montanhas Carecas" , link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional da Vanoise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
];

initialCards.forEach(function(card){
    console.log("Nome do Card: " + card.name);
    console.log("Link do Card: " + card.link);
});



//handle profile edit popup
const modal = document.querySelector("#edit-popup");
const editBtn = document.querySelector(".profile__edit-button");
const closeBtn = modal.querySelector(".popup__close");
const saveBtn = modal.querySelector(".popup__button");
const formElement = modal.querySelector("#edit-profile-form");

function openModal(){
    modal.classList.add("popup_is-opened");
 };

function closeModal(){
    modal.classList.remove("popup_is-opened");
};

function fillProfileForm(){
const actualName = document.querySelector(".profile__title").textContent;
const actualDescription = document.querySelector(".profile__description").textContent;

document.querySelector(".popup__input_type_name").value = actualName;
document.querySelector(".popup__input_type_description").value = actualDescription; 
};

function handleOpenEditModal(){
 fillProfileForm();
 openModal();
};

editBtn.addEventListener("click",handleOpenEditModal)
closeBtn.addEventListener("click",closeModal)


//submit handler
function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = formElement.querySelector(".popup__input_type_name").value
  const jobInput = formElement.querySelector(".popup__input_type_description").value

  document.querySelector(".profile__title").textContent = nameInput
  document.querySelector(".profile__description").textContent = jobInput

closeModal();
}

formElement.addEventListener("submit", handleProfileFormSubmit);



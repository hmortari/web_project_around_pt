// Handlers de modal


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



//Image Popup
    const imagePop = document.querySelector("#image-popup")
    const imageInfo = imagePop.querySelector(".popup__image");
    const imageTitle = imagePop.querySelector(".popup__caption");
    const imagePopcloseBtn = imagePop.querySelector(".popup__close");



imagePopcloseBtn.addEventListener("click",() => closeModal(imagePop));
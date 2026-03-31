const initialCards = [
    {name: "Vale de Yosemite", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
    {name: "Lago Louise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
    {name:"Montanhas Carecas" , link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
    {name: "Latemar", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
    {name: "Parque Nacional da Vanoise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
    {name: "Lago di Braies", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
]; 


//Imports

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Popup,PopupWithImage,PopupWithForm } from "./Popup.js";
import { Section } from "./Section.js";
import { UserInfo } from "./UserInfo.js";
import { openModal, closeModal,setPopupEventListeners } from "./utils.js";


//Definitions
  //Cards
      //container
        const cardsContainer = document.querySelector(".cards__list");

  //PopUps
      //profile && edit(Profile)
        const editPop = document.querySelector("#edit-popup");
        const editBtn = document.querySelector(".profile__edit-button");
        const editCloseBtn = editPop.querySelector(".popup__close");
        const editFormElement = editPop.querySelector("#edit-profile-form");
          //actions
            function fillProfileForm(){
              const actualName = document.querySelector(".profile__title").textContent;
              const actualDescription = document.querySelector(".profile__description").textContent;
              document.querySelector(".popup__input_type_name").value = actualName;
              document.querySelector(".popup__input_type_description").value = actualDescription; 
              };

            function handleOpenEditModal(){
              fillProfileForm();
              editValidator._resetValidation();
              openModal(editPop);
              };
          
            function handleProfileFormSubmit(evt) {
                evt.preventDefault();
                
                const nameInput = editFormElement.querySelector(".popup__input_type_name").value
                const jobInput = editFormElement.querySelector(".popup__input_type_description").value
                
                document.querySelector(".profile__title").textContent = nameInput
                document.querySelector(".profile__description").textContent = jobInput
                
                closeModal(editPop);
            }

            editBtn.addEventListener("click",handleOpenEditModal)
            editCloseBtn.addEventListener("click",() => closeModal(editPop));
            editFormElement.addEventListener("submit", handleProfileFormSubmit);
            
      //new Card
        const newCardPop = document.querySelector("#new-card-popup");
        const newCardBtn = document.querySelector(".profile__add-button");
        const newCardCloseBtn = newCardPop.querySelector(".popup__close");
        const newCardCardForm = newCardPop.querySelector("#new-card-form");

             function handleCardFormSubmit(evt){
              evt.preventDefault();   
                const name = newCardCardForm.querySelector(".popup__input_type_card-name").value;
                const link = newCardCardForm.querySelector(".popup__input_type_url").value;
              
                  renderCard(name,link,cardsContainer,);
                  newCardCardForm.reset();
                  newCardValidator._resetValidation();
                  closeModal(newCardPop); 
             };

        newCardBtn.addEventListener("click", () => {
                    newCardValidator._resetValidation();
                    openModal(newCardPop);
                  });
        newCardCloseBtn.addEventListener("click", () => closeModal(newCardPop));
        newCardCardForm.addEventListener("submit", handleCardFormSubmit);
   

      //Image Popup
        const imagePop = document.querySelector("#image-popup")
        const imageInfo = imagePop.querySelector(".popup__image");
        const imageTitle = imagePop.querySelector(".popup__caption");
        const imagePopcloseBtn = imagePop.querySelector(".popup__close");
      


        function handleImageClick(name,link){
            imageInfo.alt = name;
            imageInfo.src = link;
            imageTitle.textContent =name;
          openModal(imagePop)
        }
        imagePopcloseBtn.addEventListener("click",() => closeModal(imagePop));


  //fechar com click fora dos formularios
      setPopupEventListeners();



  // Validador
    const validationConfig = {
      formSelector: ".popup__form",
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "popup__input_type_error",
      errorClass: "popup__error_visible"
    };
      //criar validador no Formulario + Ativar validador 
          const editValidator = new FormValidator(validationConfig, editFormElement);
          editValidator.setEventListeners();

          const newCardValidator = new FormValidator(validationConfig, newCardCardForm);
          newCardValidator.setEventListeners();

  //Create card FROM popUp
      function renderCard(name, link, container){
      const card = new Card({name, link}, "#card-template",handleImageClick);
      const cardElement = card.generateCard();
      container.prepend(cardElement);
        }
  //Create card FROM Array
      initialCards.forEach((item) => {
            renderCard(item.name, item.link,cardsContainer,handleImageClick);
        });
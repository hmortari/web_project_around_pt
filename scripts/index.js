
//Imports
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Popup,PopupWithImage,PopupWithForm } from "./Popup.js";
import { Section } from "./Section.js";
import { UserInfo } from "./UserInfo.js";

 //container's
  const cardsContainer = document.querySelector(".cards__list");

  const initialCards = [
      {name: "Vale de Yosemite", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
      {name: "Lago Louise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
      {name:"Montanhas Carecas" , link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
      {name: "Latemar", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
      {name: "Parque Nacional da Vanoise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
      {name: "Lago di Braies", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
  ]; 







// Info do Perfil
      

// Validador
    // const validationConfig = {
    //   formSelector: ".popup__form",
    //   inputSelector: ".popup__input",
    //   submitButtonSelector: ".popup__button",
    //   inactiveButtonClass: "popup__button_disabled",
    //   inputErrorClass: "popup__input_type_error",
    //   errorClass: "popup__error_visible"
    // };
    //   //criar validador no Formulario + Ativar validador 
    //       const editValidator = new FormValidator(validationConfig, editFormElement);
    //       editValidator.setEventListeners();

    //       const newCardValidator = new FormValidator(validationConfig, newCardCardForm);
    //       newCardValidator.setEventListeners();
    




        //FINAL INFOS 

//Section: Gerencia uma lista de itens, chamando um renderer para criar e adicionar elementos ao DOM
      //Create card FROM Array
      const section = new Section({
          items: initialCards, 
          renderer:(item) => {
          // cria e rendereiza cada card
              const card = new Card (item, "#card-template",handleImageClick);
              const cardElement = card.generateCard();
          //Adiciona todos os cards no Container
              section.addItem(cardElement);
          }
        }, cardsContainer);

        section.renderItems();


//Popup's
    //Open Popups
//definir botão de editar perfil



      //Image Popup
        const imagePop = new PopupWithImage("#image-popup");
        imagePop.setEventListeners();
           function handleImageClick(name,link){
              imagePop.open(name,link)
        }
        
        //NewCard Popup
        const newCardBtn = document.querySelector(".profile__add-button");
        newCardBtn.addEventListener("click", () => {
            newCardPop.open();
          });

        const newCardPop = new PopupWithForm("#new-card-popup",(data) => {
            const card = new Card (data, "#card-template",handleImageClick);
            const cardElement = card.generateCard();
          //Adiciona todos os cards no Container
            section.addItem(cardElement);
          });
        newCardPop.setEventListeners();


        //Edit Popup
    //Definir onde pegar as informações de perfil
      const profileData = new UserInfo({
        nameSelector: ".profile__title",jobSelector: ".profile__description"});
    //Informação atual do usuario
      let currentUser = profileData.getUserInfo();
    //Cria o popup e renderiza as informações
      const editProfile = new PopupWithForm("#edit-popup",(formData) => {
        //Define 
        currentUser = {
        name: formData.name,
        job: formData.job
         };
        
        profileData.setUserInfo(currentUser);
      });

      editProfile.setEventListeners();
  //Definir Botão que abre o popup
      const editProfileBtn = document.querySelector(".profile__edit-button");
      editProfileBtn.addEventListener("click",()=>{
            editProfile.setInputValues(currentUser);
            editProfile.open();
          });


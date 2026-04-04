
//1.Imports
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { Popup,PopupWithImage,PopupWithForm } from "./Popup.js";
import { Section } from "./Section.js";
import { UserInfo } from "./UserInfo.js";
  
//2. Dados iniciais
  const initialCards = [
      {name: "Vale de Yosemite", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"},
      {name: "Lago Louise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"},
      {name:"Montanhas Carecas" , link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"},
      {name: "Latemar", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"},
      {name: "Parque Nacional da Vanoise", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"},
      {name: "Lago di Braies", link:"https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"}
  ]; 

//3. Configuração do código
  // Validador
    const validationConfig = {
      formSelector: ".popup__form",
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__button",
      inactiveButtonClass: "popup__button_disabled",
      inputErrorClass: "popup__input_type_error",
      errorClass: "popup__error_visible"
    };

//4. Seletores
  //Cards Container
    const cardsContainer = document.querySelector(".cards__list");
  //Botões para iniciar ações
    const editProfileBtn = document.querySelector(".profile__edit-button");
    const newCardBtn = document.querySelector(".profile__add-button");
  //Elementos de Formulario
    const editFormElement = document.querySelector("#edit-profile-form");
    const newCardFormElement = document.querySelector("#new-card-form");

//5. Instancias de Classes
  //Definir onde pegar as informações de perfil
    const profileData = new UserInfo({
      nameSelector: ".profile__title",
      jobSelector: ".profile__description"
    });
  //Image Popup
    const imagePop = new PopupWithImage("#image-popup");
    imagePop.setEventListeners();
    function handleImageClick(name,link){imagePop.open(name,link)};

  //Construtores
    //Cria um card a partid de "data" e Renderiza.
    function createCard(data){
      const card = new Card (data, "#card-template",handleImageClick);
      return card.generateCard();
    }

  //Edit Profile Popup       
    //Cria o popup e renderiza as informações
    const editProfile = new PopupWithForm("#edit-popup",(formData) => { 
        currentUser = {
        name: formData.name,
        job: formData.job
         };
        profileData.setUserInfo(currentUser);
      });

    editProfile.setEventListeners();
  
  //Cria um card do Arreay InitialCards
      const section = new Section({
          items: initialCards, 
          renderer:(item) => {
          // cria um card para cada item de InitialCards
              const cardElement = createCard(item);
          //Adiciona cada card no Container
              section.addItem(cardElement);
          }
        }, cardsContainer);

      section.renderItems()


  //New Card Popup
    const newCardPop = new PopupWithForm("#new-card-popup",(data) => {
      //cardData serve para "formatar" o nome que vem do form pro que eu defini
      const cardData = {
        name: data["place-name"], link: data.link}
      
      const cardElement = createCard(cardData);
            section.addItem(cardElement);
            newCardPop.close();
      });

    newCardPop.setEventListeners();

//6. Validadores
  //criar validador no Formulario + Ativar validador 
    const editValidator = new FormValidator(validationConfig, editFormElement);
    editValidator.setEventListeners();

    const newCardValidator = new FormValidator(validationConfig, newCardFormElement);
    newCardValidator.setEventListeners();

//7. Inicialização (render)
 newCardBtn.addEventListener("click", () => {
            newCardPop.open();
          });

  editProfileBtn.addEventListener("click",()=>{
       //Informação atual do usuario
        let currentUser = profileData.getUserInfo();
        console.log(currentUser)
        editProfile.setInputValues(currentUser);
        editProfile.open();
    });
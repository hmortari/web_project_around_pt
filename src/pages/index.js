//1.Imports
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup, PopupWithImage, PopupWithForm } from "../components/Popup.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { initialCards, validationConfig } from "../utils/constants.js";

//2. Seletores
//Cards Container
const cardsContainer = document.querySelector(".cards__list");
//Botões para iniciar ações
const editProfileBtn = document.querySelector(".profile__edit-button");
const newCardBtn = document.querySelector(".profile__add-button");
//Elementos de Formulario
const editFormElement = document.querySelector("#edit-profile-form");
const newCardFormElement = document.querySelector("#new-card-form");

//3. Instancias de Classes
//Definir onde pegar as informações de perfil
const profileData = new UserInfo({
  nameSelector: ".profile__title",
  jobSelector: ".profile__description",
});
//Image Popup
const imagePop = new PopupWithImage("#image-popup");
imagePop.setEventListeners();
function handleImageClick(name, link) {
  imagePop.open(name, link);
}

//Construtores
//Cria um card a partid de "data" e Renderiza.
function createCard(data) {
  const card = new Card(data, "#card-template", handleImageClick);
  return card.generateCard();
}

//Edit Profile Popup
//Cria o popup e renderiza as informações
const editProfile = new PopupWithForm("#edit-popup", (formData) => {
  profileData.setUserInfo(formData);
  editProfile.close();
});

editProfile.setEventListeners();

//Cria um card do Arreay InitialCards
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      // cria um card para cada item de InitialCards
      const cardElement = createCard(item);
      //Adiciona cada card no Container
      section.addItem(cardElement);
    },
  },
  cardsContainer,
);

section.renderItems();

//New Card Popup
const newCardPop = new PopupWithForm("#new-card-popup", (data) => {
  //cardData serve para "formatar" o nome que vem do form pro que eu defini
  const cardData = {
    name: data["place-name"],
    link: data.link,
  };

  const cardElement = createCard(cardData);
  section.addItem(cardElement);
  newCardPop.close();
});

newCardPop.setEventListeners();

//4. Validadores
//criar validador no Formulario + Ativar validador
const editValidator = new FormValidator(validationConfig, editFormElement);
editValidator.setEventListeners();

const newCardValidator = new FormValidator(
  validationConfig,
  newCardFormElement,
);
newCardValidator.setEventListeners();

//5. Inicialização (render)
newCardBtn.addEventListener("click", () => {
  newCardValidator.resetValidation();
  newCardPop.open();
});

editProfileBtn.addEventListener("click", () => {
  //Informação atual do usuario
  const userData = profileData.getUserInfo();
  editProfile.setInputValues(userData);
  editValidator.resetValidation();
  editProfile.open();
});

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
function setPopupEventListeners(){
  document.querySelectorAll(".popup").forEach(popup => {
  popup.addEventListener("mousedown", evt => {
    if (evt.target === popup) closeModal(popup);
  });
})
};

 

export {openModal, closeModal,setPopupEventListeners}

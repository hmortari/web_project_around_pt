class Section {
  // renderer: diz COMO criar UM card.
  constructor({ items, renderer }, selectedContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = selectedContainer;
  }

  //criar o código HTML que o item vai usar
  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    //Itera todos os itens e renderiza de acordo com o renderizador : precisa definir em INDEX.JS
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}

export { Section };

//PARA USAR:
// const sectionName = new Section({items: array com as infos, renderer: () => {const de cards, sectionName.addItem(card gerado)}}, container)

// porque tem renderer e render??


class Section{
    constructor({items, renderer}, containerSelector){
        this._items = items
        this._renderer = renderer
        this._container = document.querySelector(containerSelector);
    }

//criar o código HTML que o item vai usar
    addItem(element){
        this._container.append(element)
    }

    renderer(){  
//Itera todos os itens e renderiza de acordo com o renderizador : precisa definir em INDEX.JS   
        this._items.forEach(item => {
            this._renderer(item);
        });

        this.addItem()

    }
}


export {Section};
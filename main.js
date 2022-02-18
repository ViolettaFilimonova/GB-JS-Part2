// class Busket extends ProductList{ //хочу чтобы значения карточков товара (конструктор и массив товаров) отображалось в карзине
//     constructor( //количество товара  ) {
//
// //    }
//
//     outputElements(){
//         //выводить элементы в корзину HTML
//     }
//
// }





class ProductList{

    constructor(container = '.products') {
        this._container = document.querySelector(container)
        this._goods = []
        this._allProducts = []

        this._fetchGoods()
        this._render()
    }

    _fetchGoods(){
        this._goods = [
            {id: 1, title: 'Notebook', price: 1000},
            {id: 2, title: 'Mouse', price: 100},
            {id: 3, title: 'Keyboard', price: 250},
            {id: 4, title: 'Gamepad', price: 150},
        ]
    }

    _render(){
        for (const product of this._goods){
             const productObject = new ProductItem(product)
            this._allProducts.push(productObject)
            this._container.insertAdjacentHTML('beforeend', productObject.getHYMLString())
        }
    }
}




class ProductItem{
    constructor(product, img = 'https://via.placeholder.com/200X150') {
        this.title = product.title
        this.price = product.price
        this.img = img
        this.id = product.id
    }
    getHYMLString(){
    return  `<div class="product-item" data-id = "${this.id}">
                 <img src="${this.img}" alt="Some img">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price} \u20bd</p>
                     <button class="buy-btn">Добавить</button>
                </div>
            </div>`
    }
}

new ProductList()




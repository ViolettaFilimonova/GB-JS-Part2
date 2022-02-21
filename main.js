// class Busket extends ProductItem{ //хочу чтобы значения карточек товара (конструктор и массив товаров) отображались в карзине при клике на кнопку кпить
//     constructor( //количество товара  ) {
//
// //    }
//
//     outputElements(){
//         //выводить элементы в корзину HTML
//     }

//         deleteElementBtn(){
//     //удаление элемента их карзины
// }
//
// }






class ProductList{

    constructor(container = '.products') {
        this._container = document.querySelector(container)
        this._goods = []
        this._allProducts = []
        this.sum = 0
        this.boxSum = document.querySelector('.all-sum')

        this._fetchGoods()
        this._render()
        this.getSumAllProducts()
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

    //2 задание
    getSumAllProducts(){
        for (const product of this._goods){
            this.sum += product.price
        }
        this.boxSum.insertAdjacentHTML('beforeend','Сумма всех товаров равна: ' + this.sum)
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




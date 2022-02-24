// class Busket extends ProductItem{ //хочу чтобы значения карточек товара (конструктор и массив товаров) отображались в карзине при клике на кнопку кпить
//     constructor( //количество товара  ) {
//
// //    }
//
//     outputElements(){
//         //выводить элементы в корзину HTML
//     }


//
// }

//class deleteElementBtn{
//     //удаление элемента их карзины
// }

//class getGoods{}добавление товара в карзину
//class getGoodsList{} получение список товара


const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
//только для первого задания. Завернуть код в промис
//не испоьзовать фетч
// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest()
//     xhr.open('GET', url, true)
//
//     xhr.onreadystatechange = () => {
//         if (xhr.readyState === 4){
//             if (xhr.status !== 200){
//                 console.log('Error')
//             }else {
//                 cb(xhr.responseText)
//             }
//         }
//     }
//     xhr.send()
// }

let getRequest = (url, cb) => {
    let xhr = new XMLHttpRequest()
    return new Promise((resolve, reject) =>{
            if (url){
                return resolve(
                xhr.open('GET', url, true)
            )
            }else {
                return reject("Error")
            }
        })
}


class ProductList{

    constructor(container = '.products') {
        this._container = document.querySelector(container)
        this._goods = []
        this._allProducts = []
        this.sum = 0
        this.boxSum = document.querySelector('.all-sum')

        // this._fetchGoods()

        this.getSumAllProducts()
        this.getProduct()
            .then((data) => {
                this._goods = data
                this._render()
            })
    }

    getProduct(){
        return fetch(`${API}/catalogData.json`)
            .then((response) => response.json())
            .catch((err) => console.log(err))
    }


    // _fetchGoods(){
    //     getRequest(`${API}/catalogData.json`, (data) => {
    //         console.log(data)
    //         this._goods = JSON.parse(data)
    //         this._render()
    //         console.log(this._goods)
    //     })
    // }

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
        this.product_name = product.product_name
        this.price = product.price
        this.img = img
        this.id_product = product.id_product
    }
    getHYMLString(){
    return  `<div class="product-item" data-id = "${this.id_product}">
                 <img src="${this.img}" alt="Some img">
                 <div class="desc">
                     <h3>${this.product_name}</h3>
                     <p>${this.price} \u20bd</p>
                     <button class="buy-btn">Добавить</button>
                </div>
            </div>`
    }
}

new ProductList()




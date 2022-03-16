//
//     const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
//
//     const app = new Vue({
//     el: "#app",
//     data:{
//     // products:[
//     //     {id: 1, title: 'Notebook', price: 1000, img: 'https://via.placeholder.com/200X150'},
//     //     {id: 2, title: 'Mouse', price: 100, img: 'https://via.placeholder.com/200X150'},
//     //     {id: 3, title: 'Keyboard', price: 250, img: 'https://via.placeholder.com/200X150'},
//     //     {id: 4, title: 'Gamepad', price: 150, img: 'https://via.placeholder.com/200X150'},
//     // ],
//     products:[],
//     basket: false,
//     windowBasket: 'basket-close',
//     basketText: 'Нет данных',
//     searchLine: '',
//     active: null,
//     list: [],
//     showCart: false,
//     cartItems: [],
//     cartUrl: '/getBasket.json',
//     catalogUrl: '/catalogData.json',
//     imgCatalog: 'https://via.placeholder.com/200x150',
//     imgCart: 'https://via.placeholder.com/50x100',
// },
//     methods:{
//     getJson(url) {
//     return fetch(url)
//     .then(result => result.json())
//     .catch(error => {
//     console.log(error);
//     // error trigger
// })
// },
//     addProduct(product) {
//     this.getJson(`${API}/addToBasket.json`)
//     .then(data => {
//     if (data.result === 1) {
//     let find = this.cartItems.find(el => el.id_product === product.id_product);
//     if (find) {
//     find.quantity++;
// } else {
//     let prod = Object.assign({quantity: 1}, product);
//     this.cartItems.push(prod)
// }
// } else {
//     alert('Error');
// }
// })
// },
//     remove(item) {
//     this.getJson(`${API}/deleteFromBasket.json`)
//     .then(data => {
//     if (data.result === 1) {
//     if (item.quantity > 1) {
//     item.quantity--;
// } else {
//     this.cartItems.splice(this.cartItems.indexOf(item), 1)
// }
// }
// })
// },
//     // removeProduct(){
//     //     console.log(this.item)item
//
//
//     // this.basketProducts.remove(this.products[e.path[2].id - 1])
//     // console.log(e.path[2].id - 1)
//     // let i = e.path[2].id
//     // console.log(i)
//     // console.log(this.basketProducts[e.path[2].id])
//     // console.log(e.path[2].id)
//     // for (let product of this.basketProducts){
//     //     // this.basketProducts.splice(e.product, 1)
//     //     console.log(product)
//     // }
//
//
//     // this.basketProducts.splice(this.products[e.path[2].id - 1], 1)
//     // console.log(this.basketProducts , 'remove')
//
//
//     // if (i === this.basketProducts[e.path[2].id){
//     //
//     // }
//     // this.basketProducts.splice(e.path[2].id, 1)
//     // console.log(this.basketProducts , 'remove')
//     // },
//     //  openBasket(){
//     //      if (this.basket){
//     //          this.windowBasket = 'basket-close'
//     //      }else if (!this.basket) {
//     //          this.windowBasket = 'basket-open'
//     //      }
//     //      this.basket = !this.basket
//     //      console.log(this.windowBasket)
//     //  },
//
//     // filterGoods(){
//     //     if (this.searchLine !== '') {
//     //         return this.products.filter(product => {
//     //             return product.title.includes(this.searchLine);
//     //         });
//     //     }
//     //     return this.product
//     //
//     // },
//     filter() {
//     let regexp = new RegExp(this.searchLine, 'i');
//     this.list = this.products.filter(el => regexp.test(el.product_name));
// },
//     created() {
//     this.getJson(`${API + this.cartUrl}`)
//     .then(data => {
//     for (let el of data.contents) {
//     this.cartItems.push(el);
// }
// });
//     this.getJson(`${API + this.catalogUrl}`)
//     .then(data => {
//     for (let el of data) {
//     this.products.push(el);
//     this.list.push(el);
// }
// });
// },
// }
//     // computed: {
//     // filterGoods() {
//     //     // if (this.searchLine) {
//     //     //     return this.products.filter(product => {
//     //     //         return product.title.includes(this.searchLine);
//     //     //     });
//     //     // }
//     //     // return this.products
//     //     console.log(this.searchLine)
//     // }
//     // }
// })
//

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
        showCart: false,
        cartUrl: '/getBasket.json',
        catalogUrl: '/catalogData.json',
        products: [],
        cartItems: [],
        filtered: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        imgCart: 'https://via.placeholder.com/50x100',
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                    // error trigger
                })
        },
        addProduct(product) {
            this.getJson(`${API}/addToBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        let find = this.cartItems.find(el => el.id_product === product.id_product);
                        if (find) {
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, product);
                            this.cartItems.push(prod)
                        }
                    } else {
                        alert('Error');
                    }
                })
        },
        remove(item) {
            this.getJson(`${API}/deleteFromBasket.json`)
                .then(data => {
                    if (data.result === 1) {
                        if (item.quantity > 1) {
                            item.quantity--;
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(item), 1)
                        }
                    }
                })
        },
        filter() {
            let regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        },
    },
    created() {
        this.getJson(`${API + this.cartUrl}`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
});


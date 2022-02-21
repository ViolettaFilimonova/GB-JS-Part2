// 'use strict';


class HumburgerList{
    constructor(container = '.burger-list') {
        this._container = document.querySelector(container)
        this._goods = []
        this._allHumberger = []
        this.allPopPup =[]


        this.hambergerDescription()
        this.render()
        // this.openPopUp()
        // this.open()

    }



    hambergerDescription(){
        this._goods = [
            {id: 1, title: 'Макчикен', price: 120},
            {id: 2, title: 'Биг Тейсти', price: 257},
            {id: 3, title: 'Роял', price: 155},
            {id: 4, title: 'Чизбургер', price: 55},
            {id: 5, title: 'Гамбургер', price: 50},
            {id: 6, title: 'Филе-О-Фиш', price: 169},
            {id: 7, title: 'Макчикен Премьер', price: 152},
            {id: 7, title: 'Макчикен Премьер', price: 152},
        ]
    }

    render(){
        for (let good of this._goods){
            const humburgerGood = new HamburgerItem(good)
            this._allHumberger.push(humburgerGood)
            this._container.insertAdjacentHTML('beforeend', humburgerGood.getHYMLString())
        }
    }
}


class HamburgerItem{
    constructor( good, img = 'https://via.placeholder.com/293X150', id) {
        this.title = good.title
        this.price = good.price
        this.img = img
        this.id = good.id
    }


    getHYMLString(){
        return `
        <div class="burger-item">
            <div class="burger-img" id="burger${this.id}">
                <img src="${this.img}" alt="Humburger">
            </div>
            <div class="burger-title">
                <h3>${this.title}</h3>
                <p>${this.price} \u20bd</p>
                <button class="buy-btn">Добавить в карзину</button>
            </div>
        </div>
        `
    }
}

new HumburgerList()





class popUp{
    constructor() {
        this._btns = document.querySelectorAll('button')
        this.btnClick = false
        this.openPopUp()
        this.popUp = document.querySelector('.pop-up-window')

        this.openPopUp()
    }

    openPopUp(){
        for(let btn of this._btns){
            btn.addEventListener('click', this.open)
        }
    }

    open(){
        if (this.btnClick === false){
            this.btnClick = true
            const popUpWin = new PopupWindow()
            this.popUp.insertAdjacentHTML('beforeend', popUpWin.getHYMLString())
        }else {

        }
    }
}

class PopupWindow{


    getHYMLString(){
       return  `
            <div class="pop-up">
                <h2>Допинг</h2>
                <form action="">
                    <input type="radio">Большой
                    <input type="radio">Маленький
                </form>
            </div>
            `
    }
}

new popUp
// let btns = document.querySelectorAll('button')
// for(let btn of btns){
//     btn.addEventListener('click', foo)
// }
// function foo() {
//     console.log('fghj')
// }



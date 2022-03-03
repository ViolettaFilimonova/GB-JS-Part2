//3. Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить.
// При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
// a. Имя содержит только буквы.
//     b. Телефон имеет вид +7(000)000-0000.
//     c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
//     d. Текст произвольный.
//     e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке.
let inputs = document.querySelectorAll('.input')
let name = document.querySelector('.name')
let email = document.querySelector('.email')
let text = document.querySelector('.text')
let btn = document.querySelector('.btn')
let form = document.querySelector('form')


function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}


form.onsubmit = function ()  {
    console.log('111')
    inputs.forEach(function (input){
        if (input.value === ''){
            console.log('ffff')
            input.classList.add('err')
        }else {
            input.classList.remove('err')
        }
    }
    )

    if (!validateEmail(email.value)){
        email.value.classList.add('err')
        return false
    }else {
        email.value.classList.remove('err')
    }
     return false
}


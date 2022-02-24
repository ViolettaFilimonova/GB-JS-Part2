'use strict'
document.querySelector('button').addEventListener('click', () => {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', 'text.json', true)
    xhr.onreadystatechange = () => {
        if (xhr.readyState !== 4) return
        if (xhr.status !== 200) console.log(`Error: ${xhr.status} ${xhr.readyState}`)
        else {
            var {name, age, numPhone} = JSON.parse(xhr.responseText)
            document
                .querySelector('div')
                .insertAdjacentHTML('beforeend',
                    ` <p>${name} ${ age}</p>
                            <p><strong>${numPhone}</strong></p>`
                    )
            console.log(xhr.responseText)
        }
    }
    xhr.send()
})
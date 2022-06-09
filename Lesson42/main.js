let number = document.querySelector('.card-num-input')
let userName = document.querySelector('.name-input')
let month = document.querySelector('.month')
let year = document.querySelector('.year')
let type = document.querySelector('type-card')
let cardNumber = document.querySelector('.card-num')
let cardName = document.querySelector('.name')
let cardMonth = document.querySelector('.p-mon')
let cardYear = document.querySelector('.p-year')

number.addEventListener('keyup', setNumber)
userName.addEventListener('keyup', setName)
month.addEventListener('mouseup', setMonth)
year.addEventListener('mouseup', setYear)

function chekType(e){
    if (e.includes('5168')){
        type.innerHTML = 'VISA'
    } else if (e.includes('4149')){
        type.innerHTML = 'MASTER CARD'
    }else {
        type.innerHTML = 'DISCOVER'
    }


    
}


function setNumber(e) {
    e.preventDefault

    cardNumber.innerHTML = number.value
    chekType(number.value)
}
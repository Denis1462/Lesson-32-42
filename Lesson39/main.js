// let b = document.querySelectorAll('li')
// console.log(b[0])
// console.log(b[1])
// console.log(b[2])
// console.log(b[3])

// let titleElem = document.getElementById('main-heading')

// let newTitle = prompt('Pleas provide a new title')

// titleElem.innerHTML = newTitle

// let text = document.querySelector('.one')
// text.style.width = '200px'
// text.style.height = '100px'
// text.style.paddingLeft= '50px'
 

// text.classList.add('two', 'three')
// let btn = document.querySelector('.btn')

// btn.onclick = function () {
//     this.classList.toggle('two')
// }

let block = document.querySelector('.block')
let btnDown = document.querySelector('.down')
let btnRight = document.querySelector('.right')
let btnLeft = document.querySelector('.left')
let btnUp = document.querySelector('.up')
let blockTop = 0
let blockLeft = 0

btnLeft.onclick = function (){
    blockLeft += 17
    newBlock.style.left = blockLeft + 'px'
    if(blockLeft >= 740){
        blockLeft += 17
        block.style.left = blockLeft + 'px'
        alert('You lose')
    }
}

btnDown.onclick = function (){
    blockTop += 17
    newBlock.style.top = blockTop + 'px'
    if(blockTop >= 540){
        blockTop += 17
        block.style.top = blockTop + 'px'
        alert('You lose')
    }

}

btnUp.onclick = function (){
    blockTop += -17
    newBlock.style.top = blockTop + 'px'
    if(blockTop <= -1){
        blockTop += -17
        block.style.top = blockTop + 'px'
        alert('You lose')
    }
}

btnRight.onclick = function (){
    blockLeft += -17
    newBlock.style.left = blockLeft + 'px'
    if(blockLeft <= -1){
        blockLeft += -17
        block.style.left = blockLeft + 'px'
        alert('You lose')
    }
}

let inputWidth = document.getElementById('input-width')
let inputHeight = document.getElementById('input-height')
let inputRadius = document.getElementById('input-radius')
let inputColor = document.getElementById('input-color')
let inputRound = document.getElementById('input-round')
let btnCreate = document.querySelector('.btn-create')
let btnClr = document.querySelector('.btn-clr')

btnCreate.onclick = () => {
    let iwValue = inputWidth.value + 'px'
    let ihValue = inputHeight.value + 'px'
    let icValue = inputColor.value

    newBlock = document.querySelector('div')
    newBlock.style.width = iwValue
    newBlock.style.height = ihValue
    newBlock.style.backgroundColor = icValue
    newBLock.style.position = 'absolute'
    newBlock.style.left = '0px'
    newBlock.style.top = '0px'

    if (inputRound.checked == true) {
        newBlock.style.borderRadius = inputRadius.value + 'px'
    }

    document.querySelector('.field').append(newBlock)
}
btnClr.onclick = () => {
    newBlock.style.display = 'none'
}
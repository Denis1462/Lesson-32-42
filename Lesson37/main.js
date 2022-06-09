//  function one(){
//      console.log('Hello')
// }

// let btn = document.querySelector('.btn')


// btn.onclick = one







//return

// console.log(1+one())




// function two(){
//     console.log('World')
//     return 25
// }

// console.log(1+two())


// a = 5
// b = 6
// function multiply(a = 5, b = 6){
//     return a * b
// }
// console.log(multiply(2,7))
// console.log(multiply(2))
// console.log(multiply())

// let c1 = multiply()
// let c2 = 10 * multiply(2, 5)
// console.log(c1, c2)

// Aнонимная функция

// document.querySelector('.click2').onclick = function(){
//     console.log('++++++++++++++++++')
// }



//Стрелочная функция
// document.querySelector('.btn3').onclick = () =>{
//         console.log('Arrow')
//          console.log('++++++++++++++++++')
//      }



//      function (a,b){

    //  }
    //  (a,b) =>{

    //  }



    //  function (a){

    //  }
    //  a => {

    //  }
    //  function (){
    //      console.log('Hello')
    //  }
    //  () => 'Hello'


    
//     document.querySelector('.btn4').onclick = function one(){
//     let a = 'Hi'
//     document.querySelector('.out').innerHTML = a
// }
// one()
// let x = +prompt('Напиши свой год рождения') 
// userAge = (x) =>{
 
//      return 2022 - x
//  }
//  alert (userAge(x))


// let b = prompt('Введи свое имя')
// one = (b) =>{
//     return b.length
// }
// alert (one(b))




// let a = +prompt('Введи любое число')
// num = (a) =>{
//     if (a % 2 == 0){
//         return ('True')
//     } else {
//         return ('False')
//     }

// }

// console.log(num(a))



//LOCAL STORAGE

localStorage.setItem('data', 5)
console.log(localStorage.getItem('data'))


let a = [1, 2, 3, 4,]
//localStorage.setItem('arr', a)
localStorage.setItem('arr', JSON.stringify(a))
let b = localStorage.getItem('arr')
b = JSON.parse(b)
console.log(b[0])
console.log(b[1])
console.log(typeof b)

let user = {
    userName: 'Andrey',
    userAge: '27',
    isSmoker: false,
}
// console.log(user)



localStorage.setItem('form', JSON.stringify(user))
let c = localStorage.getItem('form')
c = JSON.parse(c)
// console.log(form.userAge)
console.log(c)
console.log(c[0])


document.querySelector('.btn').onclick = btn = () =>{ 
    localStorage.setItem('5', JSON.stringify(11))
}

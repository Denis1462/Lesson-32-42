// let opady = 'true'
// if (opady == true){
//     console.log('Взяти парасольку!')
// } else (opady == false)
//     console.log('Не бери парасольку')

// function chekStudent(name, age) {
//     if (age > 17) {
//         console.log(name + ' Уже окончил школу')
//     } else {
//         consolelog(name + ' Ещё учится в школе')
//     }
// }

// chekStudent('Peter', 25)

// function sum(a, b){
//     return a + b
// }

// console.log(sum(5, 1))
// let result = sum (10, 25)
// console.log(result)


// function max(a, b){
//     if (a>b){
//         return a
//     } else if (a < b){
//         return b
//     }
// }
// console.log(max(2,5))
// console.log(max(2,-5))
// console.log(max(1,1))



// function pow(x, n) {
//     let result = x
//     for (let i = 1; i < n; i ++){
//         result = result * x 
//     } return result
// }

// console.log(pow(2, 3))
// console.log(pow(2, -3))

// let b = 9824
// let c = 777
// let a = 36325

// function add(a,b){
//     return a + b
// }


// function multiply(a,b){
//     return a*b
// }


// let result = add(multiply(36325, 9824), 777)
// console.log(result)
// let x = a**2 + 5 * b * c + d/3 + e

// function solver()

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
  }

  function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
  }
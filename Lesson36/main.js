// let fruct = ['Апельсин', 'банан', 'груша']
// alert (fruct)
// alert( 'Число продуктов в корзине ' +  fruct.length)
// fruct.push('Яблуко', 'Ананас')
// fruct.unshift('Грейпфрут')
// alert('В корзину мы добавили яблоко, ананс и грейпфрут. ' + 'Число продуктов в корзине ' +  fruct.length)
// fruct.pop()
// fruct.shift()
// alert('Число продуктов в корзине ' +  fruct.length)

//splice
// let friends = ['Алексей','Вячеслав','Григорий','Настя', 'Павел']
//  friends.splice(1, 0, 'Ольга', 'Сергей')
// friends.splice(1, 1, 'Максим')
// alert(friends)

// let fruct = ['Апельсин', 'апельсин', 'груша', 'гранат']

// fruct.splice(fruct.length - 2, 1, 'Ананас')
// console.log(fruct)




// let a = [1, 2, 3, 4]
// let t = a[0]
// a[0] = a[a.length - 1]
// a[a.length - 1] = t 
// console.log(a)

// for (let i = 0; i < a.length; i ++) {
//     document.querySelector('.out').innerHTML +=a[i] + '_'
// } 
// let out = ' '
// for (let i = 0; i < a.length; i ++) {
//     out += a[i] + '--'
// }

// document.querySelector('.out').innerHTML = out



// let out = ' '

// let mass = [15, 'hello', 'trump', 23, 'world', 999, 176]
// for (let i = 0; i < mass.length; i ++) {
//          out += mass[i] + '-'
//      }
//      document.querySelector('.out').innerHTML = out


// mass = [2, 3, 4, 5, 6, 4, 77, 32, 4]

// for (let i = 0; i < mass.length; i ++ ){
//     if (mass[i] > 5){
//         console.log(`${i} - ${mass[i]}`)
//     }
// }

// for ( num of mas){
//     if (num == 4){
//         alert('Есть')
//         break
//     }
// }



// mas = [10, 20, 30, 50, 235, 3000]

// for (let i = 0; i < mas.length; i++){
//     let num = String(mas[i])
//     let char = num[0]
//     if ((char == 1) || (char == 2) || (char == 5)){
//         console.log(num)
//     }
// }

// let a = [12, 5, 6, 17, 13]
// let max = a[0]
// for (let i = 0; i < a.length; i ++){
//     if (a[i] > max){
//         max = a[i]
//     }
// }

// console.log('Максимальный елемент массива:' + max)

 let a = [12, 5, 6, 17, 13]
// let min = a[0]
// for (let i = 0; i > a.length; i ++){
//     if (a[i] < min){
//         min = a[i]
//     }
// }

// console.log('Минимальный елемент массива:' + min)




//sum

let sum = 0
for ( let i = 0; i < a.length; i ++){
    sum +=a[i]
}
console.log('Сумма элементов массыва: ' + sum)
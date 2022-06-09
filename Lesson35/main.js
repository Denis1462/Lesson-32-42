//  let products = ['Tea', 'Bread', 'Butter', 'Sugar']

// // products[4] = 'Chocolate'
// // // alert(products.length)
// // products.pop()
// // products.push('Cake')
// // alert (products)


// // let arr = [1, {name: 'Ann'}, true, function()]


// // for (let i = 0; i < products.length; i ++){
// //     alert(products[i])
// // }


// for (let product of products){
//     alert(product)
// }
// let styles = ['Джаз', 'Блюз']
// styles.push('Рок-н-ролл')
// alert(styles.shift())
// styles[Math.floor((styles.length - 1) / 2)] = 'Классика'
// styles.unshift('Рэп', 'Регги');
// alert(styles)


 let arr = ['']
 while (1){
     let a = prompt( 'Введи число!' )
     arr.push(a)
     console.log(arr)
     if (a === ''){
         continue
     }
     if (a === ' '){
         continue
     }
     if (isNaN(a)) {
         continue
     } else {
         break
     }
 }




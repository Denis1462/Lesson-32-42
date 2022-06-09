// let b = [1, 5, 7, 102, 456, -782, 2, -1, -45]
// let result = 1
// for (let a = 0; a < b.length; a ++) {
//           if(b[a] > 0){
//               result *= b[a]
//           }
//       }
// console.log(result)

let textBlock = document.querySelectorAll('.blockP')
let btn = document.querySelectorAll('.btn')

for ( let i = 0; i < btn.length; i ++){
    btn[i].onclick = () =>{
        if (textBlock[i].style.display === 'block'){
            textBlock[i].style.display = 'none'
        } else{
            textBlock[i].style.display = 'block'
        }
    }
}

let bntAdd = document.querySelector(".add")
let btnRem = document.querySelector(".rem")
let count = 0

bntAdd.onclick = () => {
    count += 1
    if (count < 11){
        let circle = document.createElement("div")
        circle.classList.add("circle")
        document.querySelector(".field").append(circle)
    } else{
        alert("Erorr")
    }
}

btnRem.onclick = () => {
    count -= 1
    if (count > -1){
        let circle = document.querySelector(".circle")
        circle.remove()
    } else{
        alert("Erorr")
    }
}


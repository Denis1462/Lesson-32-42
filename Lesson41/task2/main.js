let btnCreate = document.querySelector(".btn-add")
let btnDel = document.querySelector(".btn-del")

let count = 0

btnCreate.onclick = () => {
    count += 1
    
    let card = document.createElement("div")
    let img = document.createElement("div")
    let temp = document.createElement("p")
    let picture = document.createElement("img")

    let classImg = document.querySelector("weather").value
    let classTemp = document.querySelector(".temp").value

    card.classList.add("card" + count)
    img.classList.add("image")
    temp.classList.add("temp")
    temp.innerHTML = classTemp + "C"

    if (count < 8){
        switch (classImg){
            case 'sunny' :
                document.querySelector(".cards").appendChild(card)
                document.querySelector(".card" + count).appendChild(img)
                document.querySelector(".card" + count).appendChild(temp)
                document.querySelector('.img' + count).appendChild(picture)
                picture.setAttribute("src", "/sunny.png") 
            break
        
            case 'cloudy' :
                document.querySelector(".cards").append(card)
                document.querySelector(".card" + count).appendChild(img)
                document.querySelector(".card" + count).appendChild(temp)
                picture.setAttribute("src", "/cloudy.png") 
            break
            default:
                break
        }
    } else{
        alert("You can only remouve card!")
    }
}
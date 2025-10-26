const bars =document.querySelector("#open")
const menu = document.querySelector(".menu")
const navbar = document.querySelector("#bg-color")

bars.addEventListener("click" , ()=>{
    menu.classList.toggle("active")
    if (menu.classList.contains("active")) {
        bars.src="./assest/img/close.png"
        navbar.style.backgroundColor = "white"
    }
    else{
        bars.src="./assest/img/pars.png"
        navbar.style.backgroundColor = " #EFF8FF"
    }
})
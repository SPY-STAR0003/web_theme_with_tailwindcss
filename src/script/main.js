// elements
const closeMenu = document.getElementById("closeMenu")
const openMenu = document.getElementById("showMenu")
const menu = document.getElementById("menu")

// functions

const toggleMenu = (e) => {
    menu.classList.toggle("hidden")
    menu.classList.toggle("flex")
}

// listeners
openMenu.addEventListener("click" , (e) => toggleMenu(e))
closeMenu.addEventListener("click" , (e) => toggleMenu(e))

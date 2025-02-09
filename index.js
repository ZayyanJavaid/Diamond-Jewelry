burger = document.querySelector(".burger")
navbar = document.querySelector(".navbar")
logo = document.querySelector(".logo")
ul = document.querySelector("ul")

burger.addEventListener("click", () => {
    ul.classList.toggle("v-class-resp")
    logo.classList.toggle("v-class-resp")
    navbar.classList.toggle("h-class-resp")
})
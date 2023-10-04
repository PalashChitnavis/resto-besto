let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.addEventListener('click' , () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

let searchIcon = document.querySelector('#search-icon')
let close = document.querySelector('#close')
let searchForm = document.querySelector('#search-form')
searchIcon.addEventListener('click' , () => {
    searchForm.classList.toggle('active')
})
close.addEventListener('click' , () => {
    searchForm.classList.toggle('active')
})

window.onscroll = () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
    searchForm.classList.remove('active')
}
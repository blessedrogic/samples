const buttons = document.querySelectorAll('.carousel-button');
const container = document.querySelector('.carousel');
const indicator = document.querySelector('.indicator'); 

buttons.forEach((but) => {
    but.addEventListener('click', () => {
        container.classList.toggle('active');
        indicator.classList.toggle('show');
    })
})

const toggler = document.querySelectorAll('.link .link-toggle');
const togglerHeader = document.querySelectorAll('.link-header')

toggler.forEach((tog) => {
    tog.addEventListener('click', () => {
        tog.classList.toggle('toggle');
    })
})

const toggleBackground = document.querySelector('.toggle-background');

toggleBackground.addEventListener('click', () =>{
    toggleBackground.classList.toggle('response')
})
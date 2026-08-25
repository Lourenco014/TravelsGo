const navBar = document.querySelector("#header");

document.addEventListener("scroll", ()=> {
    const scrollTop = window.scrollY;

    if (scrollTop > 0){
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});

// botão menu mobile
const btnMenuMob = document.querySelector('#btn-menu-mob');
const menu = document.querySelector('.menu-desktop');

btnMenuMob.addEventListener('click', ()=>{
    btnMenuMob.classList.toggle('ativo');
    menu.classList.toggle('ativo');

});

const as = document.querySelectorAll('.menu-desktop nav ul li a');
as.forEach(link => {
    link.addEventListener('click', () => {
        btnMenuMob.classList.remove('ativo');
        document.body.classList.remove('menu-opened');
        menu.classList.remove('ativo');
    });
});
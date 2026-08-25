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
// const line1 = document.querySelector('.line-menu-mob-1');
// const line2 = document.querySelector('.line-menu-mob-2');

btnMenuMob.addEventListener('click', ()=>{
    btnMenuMob.classList.toggle('ativo');
    menu.classList.toggle('ativo');

});
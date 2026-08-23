const navBar = document.querySelector("#header");

document.addEventListener("scroll", ()=> {
    const scrollTop = window.scrollY;

    if (scrollTop > 0){
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
})
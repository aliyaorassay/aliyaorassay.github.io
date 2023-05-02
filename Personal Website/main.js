const hamburger = document.getElementById("hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach (n=> n.addEventListener("click", ()=> {
    hamburger.classList.remove("active");
    navMenu.classList.remove ("active");
}));


window.addEventListener('scroll', ()=> {
    let content=document.querySelector('.row');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPosition=window.innerHeight;
    if(contentPosition<screenPosition) {
        content.classList.add('active');
    }
    else {
        content.classList.remove('active');

    }
});

window.addEventListener('scroll', ()=> {
    let content=document.querySelector('.row2');
    let contentPosition=content.getBoundingClientRect().top;
    let screenPosition=window.innerHeight;
    if(contentPosition<screenPosition) {
        content.classList.add('active');
    }
    else {
        content.classList.remove('active');

    }
});













let eltMobNavToggle = document.getElementsByClassName("mobile-nav-toggle")[0]; // the button
let eltMobNavIcon = eltMobNavToggle.firstElementChild; // the Icon inside the button
let eltNavBar = document.getElementsByClassName("nav-bar")[0]; // the nav bar that opens/closes


// --- Mobile nav toggle ---- //
eltMobNavToggle.addEventListener("click",()=>{
    let ariaExpended = eltMobNavIcon.getAttribute("aria-expanded");
    if ( ariaExpended == 'false'){
        eltNavBar.style.transform = 'translateX(0%)';
        eltMobNavIcon.setAttribute("aria-expanded","true");
        eltMobNavToggle.style.backgroundImage = 'url("../../assets/shared/icon-close.svg")';
    }
    else if ( ariaExpended == 'true'){
        eltNavBar.style.transform = 'translateX(100%)';
        eltMobNavIcon.setAttribute("aria-expanded","false");
        eltMobNavToggle.style.backgroundImage = 'url("../../assets/shared/icon-hamburger.svg")';
    }
})







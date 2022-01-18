let eltMobNavToggle = document.getElementsByClassName("mobile-nav-toggle")[0]; // the button
let eltMobNavIcon = eltMobNavToggle.firstElementChild; // the Icon inside the button
let eltNavBar = document.getElementsByClassName("nav-bar")[0]; // the nav bar that opens/closes


// --- Mobile nav toggle ---- //
eltMobNavToggle.addEventListener("click",()=>{
    let ariaExpended = eltMobNavIcon.getAttribute("aria-expanded");
    if ( ariaExpended == 'false'){
        eltNavBar.classList.add('notranslate');
        eltMobNavIcon.setAttribute("aria-expanded","true");
        eltMobNavToggle.classList.add('close');
    }
    else if ( ariaExpended == 'true'){
        eltNavBar.classList.remove('notranslate');
        eltMobNavIcon.setAttribute("aria-expanded","false");
        eltMobNavToggle.classList.remove('close');
    }
})


let eltLiNavBar = eltNavBar.children;
for ( item of eltLiNavBar){
    let eltANavBar = item.firstElementChild;
    eltANavBar.addEventListener('focus',(e)=>{
        e.currentTarget.parentNode.classList.add('focused');
    })
    eltANavBar.addEventListener('blur',(e)=>{
        e.currentTarget.parentNode.classList.remove('focused');
    })
}








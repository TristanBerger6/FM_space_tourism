// ------- Get Elements -----------//

let eltBtnCom = document.getElementById("btCom");
let eltBtnSpe = document.getElementById("btSpe");
let eltBtnPil = document.getElementById("btPil");
let eltBtnEng = document.getElementById("btEng");
let eltBtns = [ eltBtnCom, eltBtnSpe, eltBtnPil, eltBtnEng];

let eltName = document.getElementById("crew-name");
let eltImage = document.getElementById("crew-image");
let eltBio = document.getElementById("crew-bio");
let eltRole = document.getElementById("crew-role");


//----- Load JSON file -----------//

let contentJSON = null;

async function loadJSON() {
    const response = await fetch("data.json");
    const data = await response.json();   
    let promise = new Promise ((resolve,reject)=>{
        contentJSON = data;
        resolve('');
    })
    promise.then();
}
loadJSON();

// ------- add listeners --------//


for(let i =0; i<eltBtns.length; i++){
    eltBtns[i].addEventListener("click",CrewSwap);
}


// --------- Switch destination ------------//
function CrewSwap(event){
    // Set aria-selected true for the new destination
    for(let i =0; i<eltBtns.length; i++){
        eltBtns[i].setAttribute("aria-selected","false");
    }
    event.currentTarget.setAttribute("aria-selected","true");

    let role = event.currentTarget.innerText;
    for ( let i =0; i<eltBtns.length; i++){
        if ( role == contentJSON.crew[i].role){
            eltName.innerHTML = contentJSON.crew[i].name;
            eltBio.innerHTML = contentJSON.crew[i].bio;
            eltRole.innerText = contentJSON.crew[i].role;
            eltImage.setAttribute("src",`${contentJSON.crew[i].images.png}`);
        }
    }
    
}

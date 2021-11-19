// ------- Get Elements -----------//

let eltBtnVeh = document.getElementById("btVeh");
let eltBtnSpa = document.getElementById("btSpa");
let eltBtnCap = document.getElementById("btCap");
let eltBtns = [ eltBtnVeh, eltBtnSpa, eltBtnCap ];

let eltName = document.getElementById("techno-name");
let eltImageLand = document.getElementById("techno-image-landscape");
let eltImagePort = document.getElementById("techno-image-portrait");
let eltDesc = document.getElementById("techno-description");



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
    eltBtns[i].addEventListener("click",TechnoSwap);
}


// --------- Switch destination ------------//
function TechnoSwap(event){
    // Set aria-selected true for the new destination
    for(let i =0; i<eltBtns.length; i++){
        eltBtns[i].setAttribute("aria-selected","false");
    }
    event.currentTarget.setAttribute("aria-selected","true");

    let role = event.currentTarget.getElementsByTagName("span")[0].innerHTML;
    for ( let i =0; i<eltBtns.length; i++){
        if ( role == contentJSON.technology[i].name){
            eltName.innerHTML = contentJSON.technology[i].name;
            eltDesc.innerHTML = contentJSON.technology[i].description;
            eltImagePort.setAttribute("src",`${contentJSON.technology[i].images.portrait}`);
            eltImageLand.setAttribute("src",`${contentJSON.technology[i].images.landscape}`);
        }
    }
    
}

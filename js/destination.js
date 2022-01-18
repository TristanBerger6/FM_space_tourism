// ------- Get Elements -----------//

let eltBtnMoon = document.getElementById("btMoon");
let eltBtnMars = document.getElementById("btMars");
let eltBtnEuropa = document.getElementById("btEuropa");
let eltBtnTitan = document.getElementById("btTitan");
let eltBtns = [ eltBtnMoon, eltBtnMars, eltBtnEuropa, eltBtnTitan];

let eltName = document.getElementById("planet-name");
let eltImage = document.getElementById("planet-image");
let eltDescription = document.getElementById("planet-description");
let eltDistance = document.getElementById("planet-distance");
let eltTravel = document.getElementById("planet-travel");

//----- Load JSON file -----------//

let contentJSON = null;

async function loadJSON() {
    const response = await fetch("../data.json");
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
    eltBtns[i].addEventListener("click",destinationSwap);
}




// --------- Switch destination ------------//
function destinationSwap(event){
    // Set aria-selected true for the new destination
    for(let i =0; i<eltBtns.length; i++){
        eltBtns[i].setAttribute("aria-selected","false");
    }
    event.currentTarget.setAttribute("aria-selected","true");

    let name = event.currentTarget.innerHTML;
    for ( let i =0; i<eltBtns.length; i++){
        if ( name == contentJSON.destinations[i].name){
            eltName.innerHTML = contentJSON.destinations[i].name;
            eltDescription.innerHTML = contentJSON.destinations[i].description;
            eltDistance.innerHTML = contentJSON.destinations[i].distance;
            eltTravel.innerHTML = contentJSON.destinations[i].travel;
            eltImage.setAttribute("src",`${contentJSON.destinations[i].images.png}`);
            eltImage.setAttribute("alt",`${contentJSON.destinations[i].name}`);
        }
    }
    
}

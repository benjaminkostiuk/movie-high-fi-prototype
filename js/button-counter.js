//Add and subtract adult
let addAdult = document.getElementById("incrementAdult");
let removeAdult = document.getElementById("decrementAdult");

let numAdult = document.getElementById("numberAdults");
let x = 0;

addAdult.addEventListener("click", function(){
    x++;
    numAdult.innerHTML = x;
});

removeAdult.addEventListener("click", function(){
    if (x > 0) {
        x--;
    }
    numAdult.innerHTML = x;
});

// Add and subtract Child
let addChild = document.getElementById("incrementChild");
let removeChild = document.getElementById("decrementChild");

let numChild = document.getElementById("numberChilds");
let y = 0;


addChild.addEventListener("click", function(){
    y++;
    numChild.innerHTML = y;
});

removeChild.addEventListener("click", function(){
    if (y > 0) {
        y--;
    }
    numChild.innerHTML = y;
});

//Add and subtract senior
let addSenior = document.getElementById("incrementSenior");
let removeSenior = document.getElementById("decrementSenior");

let numSenior = document.getElementById("numberSeniors");
let z = 0;


addSenior.addEventListener("click", function(){
    z++;
    numSenior.innerHTML = z;
});

removeSenior.addEventListener("click", function(){
    if (z > 0) {
        z--;
    }
    numSenior.innerHTML = z;
});
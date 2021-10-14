let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let boton = document.querySelector(".boton");

function colors(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    css.textContent = body.style.background + ";";
}

function load(){
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
    css.textContent = body.style.background + ";";
}


function randomBackgroundColor(){
    let primerNumero = (Math.random() * 0xfffff * 1000000).toString(16);
    let segundoNumero = (Math.random() * 0xfffff * 1000000).toString(16);


    body.style.background = "linear-gradient(to right, " + "#" + primerNumero.slice(0, 6)
    + ", " + "#" + segundoNumero.slice(0, 6) + ")";

    color1.value = "#" + primerNumero.slice(0, 6);
    color2.value = "#" + segundoNumero.slice(0, 6);

    css.textContent = body.style.background + ";";
}



boton.addEventListener("click", randomBackgroundColor);

load();

color1.addEventListener("input", colors);

color2.addEventListener("input", colors);
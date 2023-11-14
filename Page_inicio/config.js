const Overlay = document.getElementById('overlay');
const Char = document.getElementById('boneco');
const Baloon = document.getElementById('balao');
const Bastoes = document.getElementById('boneco');
const Bastoes2 = document.getElementById('balao');
const saida = document.getElementById('sair');
/*const sistema = document.getElementById('titulo')*/;


function callConfig(){
    Overlay.style.visibility = "visible";
    Bastoes.style.visibility = "hidden";
    Bastoes2.style.visibility = "hidden";
    saida.style.visibility = "visible";
}

function exitConfig(){
    Overlay.style.visibility = "hidden";
    Bastoes.style.visibility = "visible";
    Bastoes2.style.visibility = "visible";
    saida.style.visibility = "hidden";
}

function callCredits(){
    Overlay.style.visibility = "visible";
    Bastoes.style.visibility = "hidden";
    Bastoes2.style.visibility = "hidden";
    saida.style.visibility = "visible";
}

function exitCredits(){
    Overlay.style.visibility = "hidden";
    Bastoes.style.visibility = "visible";
    Bastoes2.style.visibility = "visible";
    saida.style.visibility = "hidden";
}
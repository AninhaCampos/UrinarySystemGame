const erro = document.getElementById("audioErro");

function audioErro(){
    erro.play();
}

const acerto = document.getElementById("audioAcerto")

function audioAcerto(){
    acerto.currentTime = 0;
    acerto.play();
}

const aUrina = document.getElementById("audioUrina")

function audioUrina(){
    aUrina.play();
}

const perdeu = document.getElementById("audioPerdeu")

function audioPerdeu(){
    perdeu.play();
}

const somMija = document.getElementById("audioMijando")

function audioMijando(){
    somMija.play();
}

const descarga = document.getElementById("audioDescarga")

function audioDescarga(){
    descarga.play();
}

const bom = document.getElementById("audioParabens")

function audioParabens(){
    bom.play();
}
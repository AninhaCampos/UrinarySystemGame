function Reiniciar(){
    document.getElementById("veia").style.opacity = "0.40";
    document.getElementById("rins").style.opacity = "0.40";
    document.getElementById("urina").style.opacity = "0.40";
    document.getElementById("ureter").style.opacity = "0.40";
    document.getElementById("bexiga").style.opacity = "0.40";

    const mija = document.getElementById("gotaMj")
    mija.style.width = "12vw";
    mija.style.transform = "rotate(225deg)";

    if(casaAtual <= 5){
        document.getElementById("gotaSg").style.left = "-1.5vw";
        document.getElementById("gotaSg").style.top = "3.25vh";
        document.getElementById("gotaSg").style.transform = "rotate(270deg)";
    }else if(casaAtual >= 6){
        document.getElementById("gotaMj").style.display = "none"
        document.getElementById("gotaSg").style.display = "block"
        document.getElementById("gotaSg").style.left = "-1.5vw";
        document.getElementById("gotaSg").style.top = "3.25vh";
        document.getElementById("gotaSg").style.transform = "rotate(270deg)";
    }
    vidas = 5;
    document.getElementById('nefron1').style.display = "block"
    document.getElementById('nefron2').style.display = "block"
    document.getElementById('nefron3').style.display = "block"
    document.getElementById('nefron4').style.display = "block"
    document.getElementById('nefron5').style.display = "block"
    casaAtual = 1;
}

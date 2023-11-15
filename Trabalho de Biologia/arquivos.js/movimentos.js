var x = 0;
var y = 0;

function permitirMover() {
    if (desbloqueado) {
        window.removeEventListener("keydown", moverBoneco); 
    }
}

function moverBoneco(event) {
    permitirMover();

    var tecla = event.keyCode;

    if (tecla == "38") {
        y = y - 24;
        document.getElementById("gotaSg").style.rotate = "270deg";
        document.getElementById("gotaSg").style.top = y + "vh";
        desbloqueado = false
    }

    if (tecla == "40") {
        y = y + 24;
        document.getElementById("gotaSg").style.rotate = "90deg";
        document.getElementById("gotaSg").style.top = y + "vh";
        desbloqueado = false
    }

    if (tecla == "39") {
        x = x + 12;
        document.getElementById("gotaSg").style.rotate = "0deg";
        document.getElementById("gotaSg").style.left = x + "vw";
        desbloqueado = false
    }

    if (tecla == "37") {
        x = x - 12;
        document.getElementById("gotaSg").style.rotate = "180deg";
        document.getElementById("gotaSg").style.left = x + "vw";
        desbloqueado = false
    }

}

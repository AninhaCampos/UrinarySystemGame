var x = 0;
var y = 0;
var casaAtual = 1;

function moverParaCasa(casa) {
    switch(casa){
        case 1: 
        x=10.75 + 'vw';
        y=3.25 + 'vh';
        break;

        case 2: 
        x=10.75 + 'vw';
        y=25.25 + 'vh';
        break;

        case 3: 
        x=10.75 + 'vw';
        y=48.25 + 'vh';
        break;

        case 4: 
        x=10.75 + 'vw';
        y=72.25 + 'vh';
        break;

        case 5: 
        x=22.5 + 'vw';
        y=72.25 + 'vh';
        break;

        case 6: 
        x=34.25 + 'vw';
        y=72.25 + 'vh';
        break;

        case 7: 
        x=34.25 + 'vw';
        y=48.25 + 'vh';
        break;

        case 8: 
        x=34.25 + 'vw';
        y=25.25 + 'vh';
        break;

        case 9: 
        x=34.25 + 'vw';
        y=3.25 + 'vh';
        break;

        case 10: 
        x=46.0+ 'vw';
        y=3.25 + 'vh';
        break;

        case 11:             
        x=57.75 + 'vw';
        y=3.25 + 'vh';
        break;

        case 12: 
        x=57.75 + 'vw';
        y=25.25 + 'vh';
        break;

        case 13: 
        x=57.75 + 'vw';
        y=48.25 + 'vh';
        break; 

        case 14: 
        x=57.75 + 'vw';
        y=72.25 + 'vh';
        break;

        case 15: 
        x=66.75 + 'vw';
        y=77 + 'vh';
        break;

        case 16: 
        x=76.25 + 'vw';
        y=77 + 'vh';
        break;
    }
        
    document.getElementById("gotaSg").style.left = x;
    document.getElementById("gotaSg").style.top = y;
    document.getElementById("gotaMj").style.left = x;
    document.getElementById("gotaMj").style.top = y;
            
}

    function verificarResposta() {
        if (casaAtual <= 15) {
            moverParaCasa(casaAtual);
            casaAtual++; 
            mudarPosicao();
        } else {
            alert("Parabéns! Você concluiu o jogo.");
        }
    }

    function mudarPosicao(){
        if (casaAtual == 2) {
            document.getElementById("gotaSg").style.transform = "rotate(0deg)";
        }
        if (casaAtual == 5) {
            document.getElementById("gotaSg").style.transform = "rotate(270deg)";
        }
        if (casaAtual == 6) {
            document.getElementById('gotaSg').style.display = "none";
            document.getElementById('gotaMj').style.display = "block";
            clearOverlay('sn','correct')
            callHow('sn','urina');

            //exibe a mensagem de erro por 3 segundos
            setTimeout(function (){
                clearOverlay('sn','urina')
            }, 3000);
        }
        if (casaAtual == 7) {
            document.getElementById("gotaMj").style.transform = "rotate(180deg)";
        }
        if (casaAtual == 10) {
            document.getElementById("gotaMj").style.transform = "rotate(270deg)";
        }
        if (casaAtual == 12) {
            document.getElementById("gotaMj").style.transform = "rotate(0deg)";
        }
        if (casaAtual == 15) {
            document.getElementById("gotaMj").style.transform = "rotate(270deg)";
        }
    }
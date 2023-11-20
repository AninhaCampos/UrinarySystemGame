let vidas = 5
var errou = true;

function perderVida() {
    if (!errou && document.getElementById('nefron1').style.display === 'block') {
        document.getElementById('nefron1').style.display = 'none';
    } else if (!errou && document.getElementById('nefron2').style.display === 'block' && 
        document.getElementById('nefron1').style.display === 'none') {
        document.getElementById('nefron2').style.display = 'none';
    } else if (!errou && document.getElementById('nefron3').style.display === 'block' && 
        document.getElementById('nefron1').style.display === 'none' && 
        document.getElementById('nefron2').style.display === 'none') {
        document.getElementById('nefron3').style.display = 'none';
    } else if (!errou && document.getElementById('nefron4').style.display === 'block' && 
        document.getElementById('nefron1').style.display === 'none' && 
        document.getElementById('nefron2').style.display === 'none' && 
        document.getElementById('nefron3').style.display === 'none') {
        document.getElementById('nefron4').style.display = 'none';
    } else if (!errou && document.getElementById('nefron5').style.display === 'block' && 
        document.getElementById('nefron1').style.display === 'none' && 
        document.getElementById('nefron2').style.display === 'none' && 
        document.getElementById('nefron3').style.display === 'none' && 
        document.getElementById('nefron4').style.display === 'none') {
        document.getElementById('nefron5').style.display = 'none';
    }
}

/*
function pararJogo(){
    if(vidas > 0){
        carregarPergunta();
    }else{
        !carregarPergunta();
        clearOverlay('overlay','quiz-div'); 
        callHow('sn','perdeu');
    }
}
*/
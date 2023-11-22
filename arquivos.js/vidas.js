let vidas = 5
let cont = 0;

const nefrons = [
    document.getElementById('nefron1'),
    document.getElementById('nefron2'),
    document.getElementById('nefron3'),
    document.getElementById('nefron4'),
    document.getElementById('nefron5'),
];

function perderVida(){
    if(cont < nefrons.length){
        nefrons[cont].style.display = 'none';
        cont++;
    }
}
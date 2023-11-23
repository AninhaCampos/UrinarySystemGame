function callHow(o,m){
    document.getElementById(o).style.display = "block";
    document.getElementById(m).style.display = "block";
}

function callOverlay(e,o,m){
    document.getElementById(e).style.display = "none";
    document.getElementById(o).style.display = "block";
    document.getElementById(m).style.display = "block";
}

function clearOverlay(o,d){
    document.getElementById(o).style.display = "none";
    document.getElementById(d).style.display = "none";
}

function clearBnt(d,e){
    document.getElementById(d).style.display = "none";
    document.getElementById(e).style.display = "block";
}
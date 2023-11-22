const timer = document.querySelector('.timer')
const c = document.getElementById('myCanvas')
const timerCtx = c.getContext('2d')

var segundos 
var intervalId
var timeoutId
var x = 0

function startTimer() {
  clearInterval(intervalId)
  clearTimer()
  
  timer.style.display = 'flex'
  segundos = 30
  milissegundos = 10
  x = 0
  intervalId = setInterval(updateTimer, 10)  
}

function updateTimer() {


  milissegundos--;

  if (segundos == 0){
    stopTimer();
  }
  if (milissegundos % 100 == 0){
    segundos--;
    milissegundos = 100;
  }

    document.getElementById('time').innerHTML = `${segundos}:${milissegundos}`
    requestAnimationFrame(animate)
  
}

function closeOverlay(){
  clearOverlay('overlay','quiz-div')
  clearBnt('iniciar','next');
}

function stopTimer() {
  clearInterval(intervalId)
  closeOverlay();
  segundos = 0
  milissegundos = 0
}

function clearTimer() {
  timer.style.display = 'none'
  timerCtx.clearRect(0, 0, 5000, 40)
}

function animate() {
  timerCtx.beginPath()
  timerCtx.arc(x, 20, 20, 0, 10 * Math.PI)
  timerCtx.fillStyle = 'rgb(200, 60, 100)'
  timerCtx.fill()
  timerCtx.closePath()
  x = x + window.innerWidth / 3350
}

//Para o Timer Global

/*var intervalId2
var unidade//segundos
var unidade_sem_decimal//segundos sem decimal
var dezena//minutos
unidade = 1
dezena = 0

function iniciarTempo(){
  intervalId2 = setInterval(rodarTempo, 10)//intervalo pra aumentar os segundos
}

function rodarTempo(){

  unidade += 0.1;

  if(unidade % 600 == 0){//se a unid for divisivel por 60, aumenta minutos e diminui os segundos
    dezena++;
    unidade -= 600;//NAO FUNCIONA
  }
  unidade_sem_decimal = Math.trunc(unidade); //arredonda as unidades
  document.getElementById('timer-global').innerHTML = `${dezena}:${unidade_sem_decimal}`//exibe o timer la
}

function pararTempo(){
  clearInterval(intervalId2)//PARA O TEMPO
}



document.getElementById("iniciar").addEventListener("click", iniciarTempo);*/
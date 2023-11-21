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
  segundos = 0
  milissegundos = 0
  x = 0
  intervalId = setInterval(updateTimer, 10)  
}

function updateTimer() {

  if (segundos == 25){
    stopTimer();
  }
  
  milissegundos++;
  if (milissegundos % 100 == 0){
    milissegundos -= 100;
    segundos++;
  }

    document.getElementById('time').innerHTML = `${segundos}:${milissegundos}`
    requestAnimationFrame(animate)
  
}

/*function seconds() {
  document.getElementById('time').innerHTML = `${
    (Math.floor(segundos / 60) <= 25.00) + Math.floor(segundos / 1000)
  }:${Math.floor((segundos % 1000) / 10)}`
  requestAnimationFrame(animate)
  segundos += 1000 
}*/

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
  x = x + window.innerWidth / 4000
}
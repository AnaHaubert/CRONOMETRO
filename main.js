const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stop');
const btnReset = document.querySelector('#reset');

let seconds = 00;
let minutes = 00;

let time = 1000; //1 segundo em milissegundos
let stopwatch;

btnStart.addEventListener('click', function () {
  start();
});

btnStop.addEventListener('click', function () {
  stop();
});

btnReset.addEventListener('click', function () {
  reset();
});

function start() {
  stopwatch = setInterval(timer, time); //executa a função a cada segundo
}

function stop() {
  clearInterval(stopwatch); //limpa o intervalo
}

function reset() {
  clearInterval(stopwatch); //limpa o intervalo e zera o cronômetro
  seconds = 00;
  minutes = 00;
  document.querySelector('.stopwatch').innerHTML = '00:00';
}

function timer() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  let format = `${minutes < 10 ? '0' + minutes : minutes} : ${
    seconds < 10 ? '0' + seconds : seconds
  }`; //define o formato do cronometro (00:00)
  document.querySelector('.stopwatch').innerHTML = format;
}

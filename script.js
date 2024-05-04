let timer;
let startTime;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timerActive = false;

function startTimer() {
  if (!timerActive) {
    startTime = new Date().getTime();
    timer = setInterval(updateTimer, 1000);
    timerActive = true;
    document.getElementById('startButton').classList.add('hidden');
    document.getElementById('stopButton').classList.remove('hidden');
    document.getElementById('resetButton').classList.add('hidden');
    document.getElementById('completionMessage').classList.add('hidden');
  }
}

function stopTimer() {
  clearInterval(timer);
  timerActive = false;
  document.getElementById('startButton').classList.remove('hidden');
  document.getElementById('stopButton').classList.add('hidden');
  document.getElementById('resetButton').classList.remove('hidden');
}

function resetTimer() {
  clearInterval(timer);
  timerActive = false;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById('hours').textContent = padTime(hours);
  document.getElementById('minutes').textContent = padTime(minutes);
  document.getElementById('seconds').textContent = padTime(seconds);
  document.getElementById('startButton').classList.remove('hidden');
  document.getElementById('stopButton').classList.add('hidden');
  document.getElementById('resetButton').classList.add('hidden');
  document.getElementById('completionMessage').classList.add('hidden');
}

function updateTimer() {
  let currentTime = new Date().getTime();
  let elapsedTime = Math.floor((currentTime - startTime) / 1000);
  hours = Math.floor(elapsedTime / 3600);
  minutes = Math.floor((elapsedTime % 3600) / 60);
  seconds = elapsedTime % 60;
  document.getElementById('hours').textContent = padTime(hours);
  document.getElementById('minutes').textContent = padTime(minutes);
  document.getElementById('seconds').textContent = padTime(seconds);
  if (hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(timer);
    timerActive = false;
    document.getElementById('completionMessage').classList.remove('hidden');
  }
}

function padTime(time) {
  return time < 10 ? `0${time}` : time;
}

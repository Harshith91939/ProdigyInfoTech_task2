let timerDisplay = document.getElementById('timer');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');
let lapsContainer = document.getElementById('laps');

let interval;
let milliseconds = 0;

function formatTime(ms) {
  const hours = String(Math.floor(ms / 3600000)).padStart(2, '0');
  const minutes = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
  const seconds = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
  const microseconds = String(ms % 1000).padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${microseconds}`;
}

function updateTimer() {
  timerDisplay.textContent = formatTime(milliseconds);
}

startButton.addEventListener('click', () => {
  if (!interval) {
    interval = setInterval(() => {
      milliseconds += 10; // Increment by 10ms
      updateTimer();
    }, 10);
  }
});

pauseButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
});

resetButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  milliseconds = 0;
  updateTimer();
  lapsContainer.innerHTML = '';
});

lapButton.addEventListener('click', () => {
  if (interval) {
    const lapItem = document.createElement('li');
    lapItem.textContent = formatTime(milliseconds);
    lapsContainer.appendChild(lapItem);
  }
});

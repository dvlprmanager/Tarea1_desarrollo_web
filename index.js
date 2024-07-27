let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;

const timerDisplay = document.getElementById('timer');
const startStopButton = document.getElementById('startStop');
const resetButton = document.getElementById('reset');

startStopButton.addEventListener('click', () => {
    if (isRunning) {
        stopTimer();
    } else {
        startTimer();
    }
});

resetButton.addEventListener('click', resetTimer);

function startTimer() {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateTimer, 1000);
    startStopButton.textContent = 'Detener';
    isRunning = true;
}

function stopTimer() {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    startStopButton.textContent = 'Iniciar';
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    elapsedTime = 0;
    timerDisplay.textContent = '00:00:00';
    startStopButton.textContent = 'Iniciar';
}

function updateTimer() {
    const now = Date.now();
    const difference = now - startTime;
    
    const hours = Math.floor(difference / 3600000);
    const minutes = Math.floor((difference % 3600000) / 60000);
    const seconds = Math.floor((difference % 60000) / 1000);

    timerDisplay.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
console.log(randomIntegerFromInterval);

const body = document.querySelector('body');

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}
createColors = () => {
    const color = colors[randomIntegerFromInterval(0, colors.length - 1)];
    console.log(color);
    body.style.backgroundColor = color;
}



refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

let intervalId = null;

function onStartBtnClick() {
    refs.startBtn.setAttribute('disabled', true);
    intervalId = setInterval(() => {
        createColors();
    }, 1000);
}


function onStopBtnClick() {
    clearInterval(intervalId);
    refs.startBtn.removeAttribute('disabled', true);
}


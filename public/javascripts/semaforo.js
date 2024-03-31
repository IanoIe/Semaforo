const img = document.getElementById('img');
const buttons = document.getElementById('buttons');

let colorIndex = 0;
let setIntervalId  = null;

const trafficLight = (event) => {
    /**A chamada de stoAutomatic */
    stopAutomatic();
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;


const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}


const stopAutomatic = () => {
    clearInterval (setIntervalId);
}

const turnOn = {
    'red': () => img.src = './images/vermelho.png',
    'yellow': () => img.src = './images/amarelo.png',
    'green': () => img.src = './images/verde.png',
    'automatic': () => setIntervalId = setInterval( changeColor, 1000)
}

buttons.addEventListener('click', trafficLight);
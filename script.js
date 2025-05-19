let min = 0;
let max = 100;
let midrange = Math.round((min + max) / 2);
const guessDisplay = document.getElementById('guess');
const messageDisplay = document.getElementById('message');

document.getElementById('higher').addEventListener('click', () => {
    min = midrange;
    midrange = Math.round((min + max) / 2);
    if (min === midrange && midrange !== 100) {
        midrange += 1;
    }
    updateGuess();
});

document.getElementById('lower').addEventListener('click', () => {
    max = midrange;
    midrange = Math.round((min + max) / 2);
    updateGuess();
});

document.getElementById('correct').addEventListener('click', () => {
    messageDisplay.textContent = `Ура! Я угадал ваше число ${midrange}!`;
});

function updateGuess() {
    guessDisplay.textContent = midrange;
    messageDisplay.textContent = '';
}

import getPosition from './getPosition';
import GameState from './GameState';
import Elements from './Elements';

const documentElements = new Elements();
const Game = new GameState();
const {
  message, cells, skipElement, countElement, field, character,
} = documentElements;

function refreshMessage() {
  countElement.textContent = Game.count;
  skipElement.textContent = Game.skip;
}

let position = 0;

function getCharacter() {
  let number;
  do {
    number = getPosition();
  } while (number === position);
  position = number;
  cells[position].appendChild(character);
}

refreshMessage();
getCharacter();
field.addEventListener('click', (event) => {
  const target = event.target.closest('.cell');
  if (!Game.isComplited) {
    if (target.querySelector('.character')) {
      Game.count += 1;
      refreshMessage();
    } else {
      Game.skip += 1;
      refreshMessage();
    }
    Game.isComplited = true;
  }
});
const timerID = setInterval(() => {
  if (!Game.isComplited) {
    Game.skip += 1;
    refreshMessage();
  }
  getCharacter();
  Game.isComplited = false;
  if (Game.skip >= 5 || Game.count >= 5) {
    clearInterval(timerID);
    if (Game.skip >= 5) {
      message.textContent = 'Поражение...';
    } else {
      message.textContent = 'Победа!';
    }
    document.body.appendChild(message);
  }
}, 1000);

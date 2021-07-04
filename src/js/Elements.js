import img from '../img/goblin.png';

export default class Elements {
  constructor() {
    this.cells = [...document.querySelectorAll('.cell')];
    this.field = document.querySelector('.field');
    this.countElement = document.querySelector('.count');
    this.skipElement = document.querySelector('.skip');
    this.message = document.createElement('span');
    this.message.className = 'message';
    this.character = document.createElement('img');
    this.character.src = img;
    this.character.className = 'character';
  }
}

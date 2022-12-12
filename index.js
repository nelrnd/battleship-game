import { Gameboard } from './modules/gameboard.js';
import { createGameboardElem, displayGameboardElem } from './modules/dom.js';

const gameboard = new Gameboard();
const gameboardElem = createGameboardElem(gameboard);
displayGameboardElem(gameboardElem);

console.log(gameboard);

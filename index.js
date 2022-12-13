import { Gameboard } from './modules/gameboard.js';
import { createGameboardElem, displayElem } from './modules/dom.js';
import { game } from './modules/game.js';

const gameboard = new Gameboard();

const gameboardElem = createGameboardElem(gameboard);
displayElem(gameboardElem);

game.setShipPlacement();

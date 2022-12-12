import { Gameboard } from './modules/gameboard.js';
import {
  createShipElem,
  createGameboardElem,
  displayGameboardElem,
} from './modules/dom.js';
import { Ship } from './modules/ship.js';

const gameboard = new Gameboard();
const ship = new Ship(3);
gameboard.placeShip(ship, 4, 2);

const gameboardElem = createGameboardElem(gameboard);

displayGameboardElem(gameboardElem);

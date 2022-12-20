import {
  createGameboardElem,
  createHarborElem,
  createShipElem,
  displayElem,
  makeElemDraggable,
} from './dom.js';
import { Gameboard } from './gameboard.js';
import { fleet, Ship } from './ship.js';

export const game = (() => {
  const players = [];

  const setPlacingShips = () => {
    // create and display gameboard elem
    const gameboard = new Gameboard();
    const gameboardElem = createGameboardElem(gameboard);
    displayElem(gameboardElem);

    // create ships and ship elems
    const ships = [];
    for (let ship of fleet) {
      ship = new Ship(ship.length, ship.name);
      ship.elem = createShipElem(ship);
      ships.push(ship);
    }

    // create and display harbor elem
    const harborElem = createHarborElem(ships);
    displayElem(harborElem);

    // make ship elems draggable
    for (const ship of ships) {
      makeElemDraggable(ship.elem);
    }
  };

  return {
    setPlacingShips,
  };
})();

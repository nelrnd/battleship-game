import { fleet } from './ship.js';

const pageContent = document.querySelector('#content');

function createSquareElem() {
  const squareElem = document.createElement('div');
  squareElem.className = 'square';
  return squareElem;
}

function createShipElem(ship) {
  const shipElem = document.createElement('div');
  shipElem.className = 'ship';

  for (let i = 0; i < ship.length; i++) {
    const squareElem = createSquareElem();
    shipElem.appendChild(squareElem);
  }

  if (ship.dir === 'h') {
    shipElem.style.gridTemplateColumns = `repeat(${ship.length}, var(--square-size))`;
  } else if (ship.dir === 'v') {
    shipElem.style.gridTemplateRows = `repeat(${ship.length}, var(--square-size))`;
  }

  if (ship.x && ship.y) {
    shipElem.style.top = `calc(var(--square-size) * ${ship.y})`;
    shipElem.style.left = `calc(var(--square-size) * ${ship.x})`;
  }

  return shipElem;
}

export function createGameboardElem(gameboard) {
  const gameboardElem = document.createElement('div');
  const squaresWrapper = document.createElement('div');
  const shipsWrapper = document.createElement('div');
  gameboardElem.className = 'gameboard';
  squaresWrapper.className = 'grid';
  shipsWrapper.className = 'ships';

  for (const square of gameboard.grid) {
    const squareElem = createSquareElem();
    squaresWrapper.appendChild(squareElem);
  }

  for (const ship of gameboard.placedShips) {
    const shipElem = createShipElem(ship);
    shipsWrapper.appendChild(shipElem);
  }

  gameboardElem.appendChild(squaresWrapper);
  gameboardElem.appendChild(shipsWrapper);

  return gameboardElem;
}

export function createHarborElem(ships) {
  const harborElem = document.createElement('div');
  harborElem.className = 'harbor';

  for (const ship of ships) {
    const shipElem = createShipElem(ship);
    harborElem.appendChild(shipElem);
  }

  return harborElem;
}

export function displayElem(elem) {
  pageContent.appendChild(elem);
}

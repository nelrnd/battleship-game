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
    ship.elem = shipElem;
    harborElem.appendChild(shipElem);
  }

  return harborElem;
}

export function displayElem(elem) {
  pageContent.appendChild(elem);
}

/* Drag ships */

const mouseCoords = { startX: 0, startY: 0, newX: 0, newY: 0 };
const gridCoords = { x: 0, y: 0 };
let pointerOnGrid = false;

export function makeElemDraggable(elem) {
  elem.classList.add('moveable');

  elem.addEventListener('touchstart', dragStart);
  elem.addEventListener('mousedown', dragStart);

  let startTop, startLeft;

  function dragStart(e) {
    startTop = elem.offsetTop;
    startLeft = elem.offsetLeft;

    if (e.type === 'touchstart') {
      mouseCoords.startX = e.touches[0].clientX;
      mouseCoords.startY = e.touches[0].clientY;
    } else {
      mouseCoords.startX = e.clientX;
      mouseCoords.startY = e.clientY;
    }

    document.addEventListener('touchmove', checkIfPointerOnGrid);
    document.addEventListener('mousemove', checkIfPointerOnGrid);

    document.addEventListener('touchmove', dragElem);
    document.addEventListener('mousemove', dragElem);

    document.addEventListener('touchend', stopCheckingIfPointerOnGrid);
    document.addEventListener('mouseup', stopCheckingIfPointerOnGrid);

    document.addEventListener('touchend', dragEnd);
    document.addEventListener('mouseup', dragEnd);
  }

  function dragElem(e) {
    elem.classList.add('moving');

    if (pointerOnGrid) {
      dragElemOnGrid();
    } else {
      if (e.type === 'touchmove') {
        mouseCoords.newX = mouseCoords.startX - e.touches[0].clientX;
        mouseCoords.newY = mouseCoords.startY - e.touches[0].clientY;

        mouseCoords.startX = e.touches[0].clientX;
        mouseCoords.startY = e.touches[0].clientY;
      } else {
        mouseCoords.newX = mouseCoords.startX - e.clientX;
        mouseCoords.newY = mouseCoords.startY - e.clientY;

        mouseCoords.startX = e.clientX;
        mouseCoords.startY = e.clientY;
      }

      const moveX = elem.offsetLeft - mouseCoords.newX;
      const moveY = elem.offsetTop - mouseCoords.newY;

      setElemPos(elem, moveX, moveY);
    }
  }

  function dragElemOnGrid() {
    const grid = document.querySelector('.gameboard');
    const rect = grid.getBoundingClientRect();

    const moveX = gridCoords.x * (rect.width / 10);
    const moveY = gridCoords.y * (rect.height / 10);

    setElemPos(elem, moveX, moveY);

    console.log(moveX);
  }

  function dragEnd() {
    elem.classList.remove('moving');

    document.removeEventListener('touchmove', dragElem);
    document.removeEventListener('mousemove', dragElem);

    setElemPos(elem, startLeft, startTop);
  }
}

function setElemPos(elem, posX, posY) {
  elem.style.top = posY + 'px';
  elem.style.left = posX + 'px';
}

function checkIfPointerOnGrid(e) {
  const grid = document.querySelector('.gameboard');
  const rect = grid.getBoundingClientRect();

  if (e.type === 'touchmove') {
    pointerOnGrid =
      e.touches[0].clientX > rect.left &&
      e.touches[0].clientX < rect.width + rect.left &&
      e.touches[0].clientY > rect.top &&
      e.touches[0].clientY < rect.height + rect.top;
  } else {
    pointerOnGrid =
      e.clientX > rect.left &&
      e.clientX < rect.width + rect.left &&
      e.clientY > rect.top &&
      e.clientY < rect.height + rect.top;
  }

  document.querySelector('#test').textContent = pointerOnGrid;
}

function stopCheckingIfPointerOnGrid() {
  document.removeEventListener('touchmove', checkIfPointerOnGrid);
  document.removeEventListener('mousemove', checkIfPointerOnGrid);
  pointerOnGrid = false;
}

function getGridCoords(e) {
  const grid = document.querySelector('.gameboard');
  const rect = grid.getBoundingClientRect();

  // get distance between pointer position and top left corner of grid
  let leftDist, topDist;
  if (e.type === 'touchmove') {
    leftDist = e.touches[0].clientX - rect.left;
    topDist = e.touches[0].clientY - rect.top;
  } else {
    leftDist = e.clientX - rect.left;
    topDist = e.clientY - rect.top;
  }

  // get x and y coords of mouse on grid
  const x = Math.floor((leftDist * 10) / (rect.width - 1));
  const y = Math.floor((topDist * 10) / (rect.height - 1));

  gridCoords.x = x;
  gridCoords.y = y;
}

document.addEventListener('mousemove', getGridCoords);
document.addEventListener('touchmove', getGridCoords);

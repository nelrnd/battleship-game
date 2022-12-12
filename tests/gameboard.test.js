import { Gameboard } from '../modules/gameboard.js';
import { Ship } from '../modules/ship.js';

test('Creating a gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.grid.length).toBe(100);
});

test('Finding square on gameboard grid', () => {
  const gameboard = new Gameboard();
  const square = gameboard.findSquare(3, 4);
  expect(square.x).toBe(3);
  expect(square.y).toBe(4);
});

test('Linking squares', () => {
  const gameboard = new Gameboard();
  const square = gameboard.findSquare(2, 7);
  expect(square.top.x).toBe(2);
  expect(square.top.y).toBe(6);
  expect(square.bottom.x).toBe(2);
  expect(square.bottom.y).toBe(8);
  expect(square.left.x).toBe(1);
  expect(square.left.y).toBe(7);
  expect(square.right.x).toBe(3);
  expect(square.right.y).toBe(7);
});

test('Placing a ship', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  gameboard.placeShip(ship, 3, 4);
  expect(gameboard.placedShips.length).toBe(1);
  expect(gameboard.findSquare(3, 4).ship).toBe(ship);
});

test('Placing ship horizontally', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  gameboard.placeShip(ship, 2, 2, 'h');
  expect(gameboard.findSquare(4, 2).ship).toBe(ship);
  expect(gameboard.findSquare(2, 4).ship).toBeUndefined();
});

test('Placing ship vertically', () => {
  const gameboard = new Gameboard();
  const ship = new Ship(3);
  gameboard.placeShip(ship, 2, 2, 'v');
  expect(gameboard.findSquare(2, 4).ship).toBe(ship);
  expect(gameboard.findSquare(4, 2).ship).toBeUndefined();
});

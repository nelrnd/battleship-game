import { Ship } from '../modules/ship.js';
import { Gameboard } from '../modules/gameboard.js';

test('Creating a ship', () => {
  const ship = new Ship(3);
  expect(ship.length).toBe(3);
  expect(ship.name).toBe('Ship');
});

test('Hitting a ship', () => {
  const ship = new Ship(3);
  ship.hit();
  expect(ship.hitsNb).toBe(1);
  expect(ship.isSunk).toBe(false);
});

test('Sunking a ship', () => {
  const ship = new Ship(3);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hitsNb).toBe(3);
  expect(ship.isSunk).toBe(true);
});

test('Placing ship, checking if ship is placed', () => {
  const ship = new Ship(3);
  const gameboard = new Gameboard();
  expect(ship.isPlaced).toBe(false);
  gameboard.placeShip(ship, 3, 3, 'v');
  expect(ship.isPlaced).toBe(true);
});

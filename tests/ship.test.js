import { Ship } from '../modules/ship.js';

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

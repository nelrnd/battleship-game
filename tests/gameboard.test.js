import { Gameboard } from '../modules/gameboard.js';

test('Creating a gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.grid.length).toBe(100);
});

test('Finding square on gameboard grid', () => {
  const gameboard = new Gameboard();
  expect(gameboard.findSquare(3, 4)).toEqual({ x: 3, y: 4 });
});

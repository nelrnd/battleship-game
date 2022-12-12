import { Gameboard } from '../modules/gameboard.js';

test('Creating a gameboard', () => {
  const gameboard = new Gameboard();
  expect(gameboard.grid.length).toBe(100);
});

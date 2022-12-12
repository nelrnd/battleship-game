import { Gameboard } from '../modules/gameboard.js';

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

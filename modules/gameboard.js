export class Gameboard {
  constructor() {
    this.grid = this.createGrid();
    this.placedShips = [];
  }

  createGrid() {
    const grid = [];
    for (let i = 0; i < 100; i++) {
      const square = { x: i % 10, y: Math.floor(i / 10) };
      grid.push(square);
    }
    return grid;
  }
}

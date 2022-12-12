export class Gameboard {
  constructor() {
    this.grid = this.createGrid();
    this.placedShips = [];
  }

  createGrid() {
    const grid = [];
    for (let i = 0; i < 100; i++) {
      const square = {};
      grid.push(square);
    }
    return grid;
  }
}

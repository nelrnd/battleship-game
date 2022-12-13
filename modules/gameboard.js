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
    this.linkSquares(grid);
    return grid;
  }

  findSquare(x, y, grid = this.grid) {
    return grid.find((square) => square.x == x && square.y == y);
  }

  linkSquares(grid) {
    for (const square of grid) {
      square.top = this.findSquare(square.x, square.y - 1, grid);
      square.bottom = this.findSquare(square.x, square.y + 1, grid);
      square.left = this.findSquare(square.x - 1, square.y, grid);
      square.right = this.findSquare(square.x + 1, square.y, grid);
    }
  }

  placeShip(ship, x, y, dir = 'h') {
    // check if ship placement is valid
    const isValid = this.checkShipPlacement(ship, x, y, dir);
    if (!isValid) throw 'Invalid ship placement';

    let square = this.findSquare(x, y);
    for (let i = 0; i < ship.length; i++) {
      square.ship = ship;
      square = dir == 'h' ? square.right : square.bottom;
    }
    ship.x = x;
    ship.y = y;
    ship.dir = dir;
    this.placedShips.push(ship);
  }

  checkShipPlacement(ship, x, y, dir) {
    let square = this.findSquare(x, y);
    for (let i = 0; i < ship.length; i++) {
      if (!square || square.ship) return false;
      square = dir == 'h' ? square.right : square.bottom;
    }
    return true;
  }
}

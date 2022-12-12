export class Ship {
  constructor(length, name) {
    this.length = length;
    this.name = name || 'Ship';
    this.hitsNb = 0;
  }

  hit() {
    this.hitsNb++;
  }

  get isSunk() {
    return this.hitsNb >= this.length;
  }

  get isPlaced() {
    return !!(this.x && this.y && this.dir);
  }
}

export const fleet = [
  { length: 5, name: 'Carrier' },
  { length: 4, name: 'Battleship' },
  { length: 3, name: 'Cruiser' },
  { length: 3, name: 'Submarine' },
  { length: 2, name: 'Destroyer' },
];

import { createHarborElem, displayElem } from './dom.js';
import { fleet, Ship } from './ship.js';

export const game = (() => {
  const players = [];

  const setPlaceShips = () => {
    const ships = [];
    for (const ship of fleet) {
      ships.push(new Ship(ship.length, ship.name));
    }
    const harborElem = createHarborElem(ships);
    displayElem(harborElem);
  };

  return {
    setPlaceShips,
  };
})();

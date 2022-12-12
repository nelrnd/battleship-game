const pageContent = document.querySelector('#content');

export function createGameboardElem(gameboard) {
  const gameboardElem = document.createElement('div');
  gameboardElem.className = 'gameboard';
  for (const square of gameboard.grid) {
    const squareElem = document.createElement('div');
    squareElem.className = 'square';
    gameboardElem.appendChild(squareElem);
  }
  return gameboardElem;
}

export function displayGameboardElem(gameboardElem) {
  pageContent.appendChild(gameboardElem);
}

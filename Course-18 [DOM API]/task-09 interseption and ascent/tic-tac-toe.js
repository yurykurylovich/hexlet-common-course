/* tic-tac-toe.js
Using already premade grid, realize simple mechanism for the tic-tac-toe game.
There're no winners or losers or any event on win or lose. Just the mechanism of checking with o's and x's cells.
- o goes first
- if clicking on the already checked cell, the turn goes to the next player
*/

////// SHOWCASE ON CODEPEN - https://codepen.io/yury-kurylovich/pen/zYwpvLE

//// PREGENERATED FIELD
const generatedFields = () => {
  const tableEl = document.createElement('table');
  tableEl.className = 'table-bordered';
  for (let i = 0; i < 3; i ++) {
    const row = tableEl.insertRow();
    for (let j = 0; j < 3; j ++) {
      const cell = row.insertCell();
      cell.className = 'py-2 px-3';
      cell.innerHTML = '<span class="invisible">s</span>'
    }
  }
  return tableEl;
}

const root = document.querySelector('.root');
root.prepend(generatedFields());
const cells = document.querySelectorAll('.py-2');
let player = 'x';
cells.forEach(cell => {
  cell.addEventListener('click', () => {
    playerTurn();
    if (cell.textContent === 's') {
      cell.innerHTML = player;
    }
  })
})

const playerTurn = () => (player === 'x') ? player = 'o' : player = 'x';

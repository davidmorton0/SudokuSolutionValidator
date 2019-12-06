function validSolution(board) {
  for (i = 0; i < 9; i++) {
      if (!(getRow(board[i]) && getColumn(i, board) && getSquare(i, board))) {
        return false;
      };
  }
  return true;
}

function getColumn(col, board) {
  return checkNums(board.map( row => row[col] ))
}

function getRow(row) {
  return checkNums(row)
}

function getSquare(n, board) {
  return checkNums(board
    .map( (row, idx) => row.slice((n % 3) * 3, (n % 3) * 3 + 3) )
    .slice(Math.floor(n / 3) * 3, Math.floor(n / 3) * 3 + 3)
    .reduce((acc,val) => acc.concat(val), [])
  )
}

function checkNums(arr) {
  return arr.filter((val, i, self) => self.indexOf(val) === i && val > 0).length == 9;
}

var assert = require('assert');
assert.equal(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                            [6, 7, 2, 1, 9, 5, 3, 4, 8],
                            [1, 9, 8, 3, 4, 2, 5, 6, 7],
                            [8, 5, 9, 7, 6, 1, 4, 2, 3],
                            [4, 2, 6, 8, 5, 3, 7, 9, 1],
                            [7, 1, 3, 9, 2, 4, 8, 5, 6],
                            [9, 6, 1, 5, 3, 7, 2, 8, 4],
                            [2, 8, 7, 4, 1, 9, 6, 3, 5],
                            [3, 4, 5, 2, 8, 6, 1, 7, 9]]), true);

assert.equal(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2],
                            [6, 7, 2, 1, 9, 0, 3, 4, 8],
                            [1, 0, 0, 3, 4, 2, 5, 6, 0],
                            [8, 5, 9, 7, 6, 1, 0, 2, 0],
                            [4, 2, 6, 8, 5, 3, 7, 9, 1],
                            [7, 1, 3, 9, 2, 4, 8, 5, 6],
                            [9, 0, 1, 5, 3, 7, 2, 1, 4],
                            [2, 8, 7, 4, 1, 9, 6, 3, 5],
                            [3, 0, 0, 4, 8, 1, 1, 7, 9]]), false);

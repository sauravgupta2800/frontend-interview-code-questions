function solve(m) {
  let row = m.length,
    col = m[0].length;
  let currRow = 0,
    currCol = 0;
  while (currRow < row && currCol < col) {
    if (currRow + 1 >= row) break;

    let prev = m[currRow + 1][currCol];

    for (let c = currCol; c < col; c++) {
      const save = m[currRow][c];
      m[currRow][c] = prev;
      prev = save;
    }
    currRow++;
    for (let r = currRow; r < row; r++) {
      const save = m[r][col - 1];
      m[r][col - 1] = prev;
      prev = save;
    }
    col--;
    for (let c = col - 1; c >= currCol; c--) {
      const save = m[row - 1][c];
      m[row - 1][c] = prev;
      prev = save;
    }
    row--;
    for (let r = row - 1; r >= currRow; r--) {
      const save = m[r][currCol];
      m[r][currCol] = prev;
      prev = save;
    }
    currCol++;
  }
  return m;
}

console.log(
  solve([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);

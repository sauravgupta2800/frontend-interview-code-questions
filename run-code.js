function solve(m) {
  let row = m.length,
    col = m[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < i; j++) {
      const tmp = m[i][j];
      m[i][j] = m[j][i];
      m[j][i] = tmp;
    }
  }

  for (let r = 0; r < row; r++) {
    let st = 0;
    let end = col - 1;
    while (st <= end) {
      const tmp = m[r][st];
      m[r][st] = m[r][end];
      m[r][end] = tmp;
      st++;
      end--;
    }
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

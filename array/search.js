function solve(A, B) {
  const row = A.length;
  const column = A[0].length;
  let i = 0,
    j = column - 1;

  let minValue = Number.MAX_VALUE;
  while (i < row && j >= 0) {
    if (A[i][j] === B) minValue = Math.min(minValue, (i + 1) * 1009 + (j + 1));
    if (A[i][j] < B) i++;
    else j--;
  }
  if (minValue !== Number.MAX_VALUE) return minValue;
  return -1;
}

console.log(
  solve(
    [
      [1, 2, 3],
      [4, 5, 6],
      [8, 8, 9],
    ],
    8
  )
);

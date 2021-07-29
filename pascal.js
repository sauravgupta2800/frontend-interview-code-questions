function pascal(n) {
  const matrix = [...new Array(n)].map(() => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    matrix[i][0] = 1;
  }
  if (n <= 1) {
    return matrix;
  }
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n; j++) {
      matrix[i][j] = matrix[i - 1][j - 1] + matrix[i - 1][j];
    }
  }
  return matrix;
}

console.log(pascal(1));

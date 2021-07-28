function merge(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i += 2) {
    if (i + 1 < A.length) [A[i], A[i + 1]] = [A[i + 1], A[i]];
  }
  return A;
}

console.log(merge([1, 2, 3]));

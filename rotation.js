function rotate(arr, start, end) {
  while (start <= end) {
    const tmp = arr[end];
    arr[end] = arr[start];
    arr[start] = tmp;
    start++;
    end--;
  }
}

function rotation(A, B) {
  const res = [];
  for (let item of B) {
    const pos = item % A.length;
    const arr = [...A];
    rotate(arr, 0, pos - 1);
    rotate(arr, pos, arr.length - 1);
    rotate(arr, 0, arr.length - 1);
    res.push(arr);
  }
  return res;
}

console.log(
  rotation(
    [
      6, 31, 33, 13, 82, 66, 9, 12, 69, 21, 17, 2, 50, 69, 90, 71, 31, 1, 13,
      70, 94, 46, 89, 13, 55, 54, 67, 97, 28, 27, 62, 34, 41, 18, 15, 35, 13,
      84, 93, 27, 89, 23, 6, 56, 94, 40, 54, 95, 47,
    ],
    [
      88, 85, 98, 36, 66, 40, 30, 26, 51, 77, 62, 60, 92, 64, 53, 86, 24, 53,
      85, 49, 57, 29, 32, 60, 75, 82, 17, 23, 67, 51, 23, 11, 70, 59,
    ]
  )
);

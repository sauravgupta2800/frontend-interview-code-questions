function solve(arr) {
  function reverse(arr, st, end) {
    while (st <= end) {
      const tmp = arr[end];
      arr[end] = arr[st];
      arr[st] = tmp;
      st++;
      end--;
    }
    return arr;
  }

  function rotateBy1(arr, st, end) {
    reverse(arr, st, end - 1);
    reverse(arr, st, end);
  }
  for (let i = 0; i < arr.length; i++) {
    const isEvenIdx = i % 2 === 0;
    if (isEvenIdx && arr[i] > 0) {
      // find next negative element to the right
      let nextNegIdx = i;
      while (arr[nextNegIdx] >= 0 && nextNegIdx < arr.length) nextNegIdx++;

      if (nextNegIdx < arr.length) {
        rotateBy1(arr, i, nextNegIdx);
      }
    }
    if (!isEvenIdx && arr[i] < 0) {
      // find next positive element to the right
      let nextPosIdx = i;
      while (arr[nextPosIdx] < 0 && nextPosIdx < arr.length) nextPosIdx++;

      if (nextPosIdx < arr.length) {
        rotateBy1(arr, i, nextPosIdx);
      }
    }
  }
  return arr;
}

console.log(solve([-1, -1, 0, 4, 6, 7, -8]));

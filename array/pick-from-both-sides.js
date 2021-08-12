function solve(arr, B) {
  const findPivot = (arr) => {
    let st = 0;
    let en = arr.length - 1;
    while (st <= en) {
      const mid = Math.floor((st + en) / 2);

      if (arr[mid - 1] < arr[mid] && arr[mid] > arr[mid + 1]) {
        return mid;
      }
      if (arr[st] < arr[mid]) {
        st = mid + 1;
      } else {
        en = mid - 1;
      }
    }
    return -1;
  };

  const binarySearch = (arr, B, _st, _en, inc) => {
    let st = _st;
    let en = _en;

    while (st <= en) {
      const mid = Math.floor((st + en) / 2);

      if (arr[mid] === B) {
        return mid;
      }
      if (inc) {
        if (B > arr[mid]) {
          st = mid + 1;
        } else {
          en = mid - 1;
        }
      } else {
        if (B < arr[mid]) {
          st = mid + 1;
        } else {
          en = mid - 1;
        }
      }
    }
    return -1;
  };
  const pivot = findPivot(arr);
  const leftIdx = binarySearch(arr, B, 0, pivot, true);
  const rightIdx = binarySearch(arr, B, pivot, arr.length - 1, false);

  if (leftIdx !== -1) return leftIdx;
  if (rightIdx !== -1) return rightIdx;
  return -1;
}

console.log(solve2([1, 2, 4, 4, 6], 4));

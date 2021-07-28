function solve(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i) {
      count++;
      const temp = arr[arr[i]];
      arr[arr[i]] = arr[i];
      arr[i] = temp;
    }
  }
  return count;
}

console.log(solve([1, 2, 3, 4, 0]));

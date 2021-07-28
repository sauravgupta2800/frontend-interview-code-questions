function solve(intervals, new_interval) {
  const arr = [...intervals];
  new_interval.sort((a, b) => a - b);
  arr.push(new_interval);
  arr.sort((a, b) => a[0] - b[0]);
  if (arr.length <= 1) return arr;

  let res = [];
  let currStart = arr[0][0];
  let currEnd = arr[0][1];

  for (let i = 1; i < arr.length; i++) {
    const [start, end] = arr[i];
    if (start > currEnd) {
      res.push([currStart, currEnd]);
      currStart = start;
      currEnd = end;
    } else {
      currEnd = Math.max(currEnd, end);
    }
  }
  res.push([currStart, currEnd]);
  return res;
}

console.log(
  solve(
    [
      [2, 3],
      [6, 9],
    ],
    [1, 60]
  )
);

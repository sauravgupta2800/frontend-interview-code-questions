function solve(A) {
  if (A.length <= 1) return 0;
  const arr = [...A];
  const leftMax = new Array(A.length).fill(0);
  const rightMax = new Array(A.length).fill(0);

  leftMax[0] = arr[0];
  for (let i = 1; i < A.length; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], arr[i]);
  }

  rightMax[arr.length - 1] = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    rightMax[i] = Math.max(arr[i], rightMax[i + 1]);
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + Math.min(leftMax[i], rightMax[i]) - arr[i];
  }
  return sum;
}

console.log(solve([0, 1, 0, 2]));

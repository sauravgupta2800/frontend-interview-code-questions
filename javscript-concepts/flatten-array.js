const arr = [1, [2, [3, 4, [5, 6], 7], 8], 9, 10];

function flatten(arr) {
  return arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc = [...acc, ...flatten(item)];
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

function flattenRecursion(arr) {
  if (!arr.length) return [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (Array.isArray(item)) {
      res = [...res, ...flattenRecursion(item)];
    } else {
      res.push(item);
    }
  }
  return res;
}

const result = flattenRecursion(arr);

console.log(result); // 1,2,3,4,5,6,7,8,9,10

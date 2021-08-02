function multiply(a, b) {
  return a * b;
}

function memoise(callback) {
  var cache = {}; // memory
  return function (...arg) {
    // Hoisting ->
    const key = JSON.stringify(arg);
    if (cache[key]) return cache[key];
    cache[key] = callback(...arg);
    return cache[key];
  };
}

const memoiseMultply = memoise(multiply);

console.log(memoiseMultply(2, 3));
console.log(memoiseMultply(2, 3));
console.log(memoiseMultply(2, 3));

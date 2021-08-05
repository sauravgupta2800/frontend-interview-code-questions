const arr = [1, 2, 3, 5];

// ForEach
Array.prototype.myForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// Map
Array.prototype.myMap = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

// Filter
Array.prototype.myFilter = function (callback, context) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

//Reduce
Array.prototype.myReduce = function (callback, initialValue) {
  var accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    if (accumulator !== undefined) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }

    console.log(accumulator);
  }
  return accumulator;
};

// arr.myForEach((item) => {
//   console.log("item: ", item);
// });

// const ans = arr.myMap((item) => {
//   return item;
// });

// let filteredAns = arr.myFilter((item, index, patannhi) => {
//   return true;
// });

// console.log(filteredAns);

const sum = arr.myReduce((acc, el) => acc + el, 0);
console.log(sum);

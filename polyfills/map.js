const arr = [1, 2, 3, 5];

Array.prototype.myForEach = function (callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

Array.prototype.myMap = function (callback) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push(callback(this[i], i, this));
  }
  return arr;
};

Array.prototype.myFilter = function (callback, context) {
  var arr = [];
  for (var i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      arr.push(this[i]);
    }
  }
  return arr;
};

arr.myForEach((item) => {
  console.log("item: ", item);
});

const ans = arr.myMap((item) => {
  return item;
});

let filteredAns = arr.myFilter((item, index, patannhi) => {
  return true;
});

console.log(filteredAns);

+14694872938;

function counterModule() {
  var counter = 0;
  return function () {
    return {
      increment: function () {
        counter++;
      },
      decrement: function () {
        counter--;
      },
      getValue() {
        return counter;
      },
    };
  };
}

const countFun = counterModule();
const count = countFun();

console.log(count.getValue());
count.increment();
console.log(count.getValue());
count.increment();
console.log(count.getValue());

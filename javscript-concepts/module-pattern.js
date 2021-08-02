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

for (var i = 0; i < 9; i++) {
  (function (value) {
    setTimeout(() => {
      console.log(value);
    }, 1000);
  })(i);
}

/*
https://www.linkedin.com/pulse/top-10-tricky-javascript-questions-i-used-ask-interviews-amit-pal/

point number 8 onwards check in details.

*/

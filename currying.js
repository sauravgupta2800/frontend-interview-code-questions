/*

CURRYING: when a function, instead of taking all arguments at one
time, takes the first one and return a new function that takes
the second one and returns a new function which takes the third
one, and so forth, until all arguments have been fulfilled.


In currying we tranform a function with multiple arguments into 
the nested functions with single arguments

Link: https://dev.to/suprabhasupi/currying-in-javascript-1k3l

transforing into this is currying => sum(1,2,3) => sum(1)(2)(3)

  Why it is useful
   1. helps avoiding passing the same arg again-n-again
   2. helps to create higher order function

  It Can be achieved in 2 ways
    1. using function's bind method
    2. Using closure

*/

//curried version function using BIND
function sum(a, b, c) {
  return a + b + c;
}
const add2And3Fn = sum.bind(this, 2, 3);
console.log(add2And3Fn(4));

//curried version function using CLOSURE
function sum1(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
console.log(sum1(2)(3)(4));

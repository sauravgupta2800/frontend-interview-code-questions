const arr = ["Saurav", "Sachin"];
const object = {
  name: "Saurav",
  city: "Shimla",
  info: function () {
    console.log(this.name + " from " + this.city);
  },
};

const object2 = {
  name: "Sachin",
};

function randomFun() {
  //
}

/*

Prototype: This is an object which automatically get attached to 
our variables or functions

We can see  it by __proto__
example:
arr.__proto__ or Array.prototype
object.__proto__ or Object.prototype
randomFun.__proto__ or Function.prototype

** Everything in JS is object.


Prototype Chain: if we see the __proto__ to each subsequence variable till be get null

arr.__proto__ => arr.__proto__.__proto__  => arr.__proto__.__proto__.proto__ => null
*/

/*
Prototypal Inheritance
*/
object2.__proto__ = object;
object2.info(); // It has acces of info method of object. It comes through inheritance

Function.prototype.myBind = function () {
  console.log("I am my Bind .");
};

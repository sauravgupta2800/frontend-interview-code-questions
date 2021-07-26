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

// Conclusion : https://codeburst.io/javascript-under-the-hood-pt-5-prototype-and-prototypal-inheritance-e5c400dba41d
// Here’s what we’ve covered in this article:
// Every object has something called a “prototype”. A prototype is an object connected to an object that allows it to access properties and methods from another, related object.
// Prototypal inheritance is allowing an object to access the methods and properties of another object by using prototypes.
// The JavaScript engine uses something called the “prototype” chain to access properties and methods on objects. If we try to access a property or method on an object that doesn’t directly have the property or method, the JavaScript engine will look at the prototype of each object, going all the way down the chain, until it finds it or doesn’t.

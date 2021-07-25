/*
CALL, BIND & APPLY
==================
call: call method used to invoke a method directly. Its arguments are refernce of variable & comma separated arguments. 
bind: call: call method used to invoke a method directly. Its arguments are refernce of variable & array formed arguments.
apply: gives the copy of the method which we can use later on the code. It form closure with the refernce & args
*/

function printName(hometown1, hometown2) {
  console.log(
    this.first + " " + this.last + " from " + hometown1 + "," + hometown2
  );
}

names = {
  first: "Saurav",
  last: "Gupta",
};

let names2 = {
  first: "Sachin",
  last: "Tendulkar",
};

// printName Function borroed in names & names1 objects.

printName.call(names, "Delhi", "Agra");
printName.call(names2, "Mumbai", "Pune");

printName.apply(names, ["Delhi", "Agra"]);
printName.apply(names2, ["Mumbai", "Pune"]);

// bind method: Gives copy of the function, which can be invoke later after binding the arguments & reference

const copyOfMethod = printName.bind(names, "Delhi", "Agra");

copyOfMethod();

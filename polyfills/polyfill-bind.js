function printName(hometown1 = "A", hometown2 = "B") {
  console.log(
    this.first + " " + this.last + " from " + hometown1 + "," + hometown2
  );
}

let names = {
  first: "Saurav",
  last: "Gupta",
};

const saveNameFn = printName.bind(names);
// saveNameFn();

Function.prototype.myBind = function () {
  const fn = this;
  const args = arguments;
  return function () {
    fn.call(...args);
  };
};

const saveNameFn2 = printName.myBind(names, "Hello");

saveNameFn2();

function Person(name) {
  this.name = name;
}

Person.prototype.sayHi = function () {
  return `Hi ${this.name}`;
};
Person.prototype.func1 = function(){
    console.log("inside func1");
}

let obj = new Person("raj");
console.log(obj.sayHi());
obj.func1();


function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  numLegs: 4,
  eat: () => {
    console.log("eat");
  },
  describe: () => {
    console.log("describe");
  },
};

console.log(Dog.hasOwnProperty("name"));
let tt = new Dog();
console.log(tt.hasOwnProperty("name"));
tt.eat();
tt.describe();

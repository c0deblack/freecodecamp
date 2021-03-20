function Animal() {}
Animal.prototype.eat = function () {
  console.log("nom nom nom");
};

function Dog() {}

// Create new object
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = () => {
  console.log("Woof!");
};

let beagle = new Dog();
beagle.eat();
beagle.bark();

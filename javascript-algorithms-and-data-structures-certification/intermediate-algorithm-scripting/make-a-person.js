/*
var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};
*/

var Person = function(firstAndLast) {


  this.getLastName = () => (this.lastName)
                            ? this.lastName
                            : this.lastName = firstAndLast
                                                .split(" ")[1]
  this.getFirstName = () => (this.firstName)
                            ? this.firstName
                            : this.firstName = firstAndLast
                                                .split(" ")[0]
  this.getFullName = () => `${this.getFirstName()} ${this.getLastName()}`;

  this.setFirstName = (firstName) => this.firstName = firstName;

  this.setLastName = (lastName) => this.lastName = lastName;

  this.setFullName = (firstAndLast) => [this.firstName, this.lastName] = firstAndLast.split(" ")

};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
console.log(bob instanceof Person);
console.log(bob.firstName);
console.log(bob.lastName);
console.log(bob.getFirstName());
console.log(bob.getLastName());
console.log(bob.getFullName());
console.log(bob.setFirstName("Haskel"));
console.log(bob.getFullName());
console.log(bob.setFullName("Haskel Curry"));
console.log(bob.getFullName());
console.log(bob.getLastName());

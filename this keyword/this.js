// this = Reference to the object where This is used
//(the object depend upon immediate context)
//   person.name = this.name

const person1 = {
  name: "Spongebob",
  favFood: "hamburgure",
  sayHello: function () {
    console.log(`Hi am ${this.name}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

person1.sayHello();
person1.eat();

// outside the object "this" return the window object
// technically we are returning a window
console.log(this);

// this keyword does not work with the arrow function
//it will show undefined

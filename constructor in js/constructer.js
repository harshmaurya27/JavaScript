// Constructer = special method for defining the properties
// and methods of objects
// constructer start with capital latter
function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.drive = function () {
      console.log(`you drive the ${this.model}`);
    }),
    (this.color = color); // color we receive
}

const car1 = new Car("Ford", "Mustang", 2024, "red");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);

// this Car method is reusable we can create another
// object using this

const car2 = new Car("Cheverlet", "Camaro", 2026, "black");
console.log("properties of car two");

console.log(car2.make);

console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

car1.drive();
car2.drive();

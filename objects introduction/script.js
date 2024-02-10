// object = A collection of related properties and/or methods
//      can represent real world objects(people,products,places)
//     object = {key:value,
//                function()}

const person1 = {
  firstName: "Spongebob",
  lastName: "Suarepants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("hi am Spongebob");
  },
  eat: () => console.log("Iam eatiing a pizza"),
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

person1.sayHello();

person1.eat();

// objects ca have arrow function too
// objects can not have same name

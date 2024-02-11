// JSON= (Javascript Object Notation) data-interchange format
// Used to exchange the data between  a server and a web application
//JSON files {key:value} OR [value1,value2,value3] OR [{},{},{}]

//JSON.stringify()= converts a js object to a JSON string here JSON is built in object
//JSON.parse() =convert a JSON string to a js object

// const names = ["Ironman", "Spiderman", "Batman", "Thor", "Superman"];

// const person = {
//   name: "Ironman",
//   age: 30,
//   isEmployed: true,
//   hobbies: ["helping", "invention", "technology", "eating"],
// };

const people = [
  {
    name: "Ironman",
    age: 30,
    isEmployed: true,
  },
  {
    name: "Spiderman",
    age: 30,
    isEmployed: false,
  },
  {
    name: "thor",
    age: 35,
    isEmployed: true,
  },
  {
    name: "Sandy",
    age: 16,
    isEmployed: false,
  },
];

// const jsonString1 = JSON.stringify(names);
// console.log(names);
// console.log(jsonString1);

// const jsonString2 = JSON.stringify(person);
// console.log(person);
// console.log(jsonString2);

const jsonString3 = JSON.stringify(people);
console.log(people);
console.log(jsonString3);

// how to fetch a json file
// fetch returns a promise
// res.json also return promise

// fetch("person.json").then((res) => {
//   res.json().then((value) => console.log(value));
// });

fetch("people.json") // here can be url too
  .then((res) =>
    res.json().then((value) =>
      value.forEach((element) => {
        console.log(element.name);
      })
    )
  )
  .catch((error) => console.log(error));

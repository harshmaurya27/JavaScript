// Async-Await
// async function always repromise.

// Sytax =  async function myFunc(){...}

// await pauses the execution of its surrounding sync function until the promise is settled

// async function hello() {
//   console.log("hello");
// }

// console.log(hello()); // returning a promise
// we can  use await keyword only inside the async funtion

// function api() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Weather data");
//       resolve(200);
//     }, 2000);
//   });
// }

// async function getWeatherData() {
//   await api(); // 1st call and stop other execution of this fuction
//   await api();
// }
// getWeatherData();

// let see in the term of getData function that we have use earlier

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data:", dataId);
      resolve("success");
    }, 3000);
  });
}

// Async-Await

async function getAllData() {
  await getData(1);
  await getData(2);
  await getData(3);
  await getData(4);
}
getAllData();

// a callback is a function passes as in argument to another function
//and while calling we can pass reference or full function as parameter

function sum(a, b) {
  console.log("the sum is:", a + b);
}

function calculate(x, y, callback) {
  callback(x, y);
}

calculate(5, 9, sum);

// callback as asychronous

function hello() {
  console.log("hello I am callback");
}

setTimeout(hello, 2000);

// now we will see callback hell problem or nested callback
//this style of programing becomes dificult to understand

function getdata(dataId) {
  setTimeout(() => {
    console.log("data:", dataId);
  }, 2000);
}

getdata("x"); //2s
getdata("y"); //2s
//here we want data y after data x but we will get them simulteneously
// here we use callbacks

function getData(dataID, getNextData) {
  setTimeout(() => {
    console.log("data:", dataID);
    if (getNextData) {
      getNextData();
    }
  }, 2000);
}

getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4, () => getData(5));
    });
  });
}); // this callback hello stacked below one another

// to solve this problem we have promises

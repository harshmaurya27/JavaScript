// Promise is an object in js
// solution to callback hell

//  syntax = let promise = new Promise((resolve, reject) => {});
// resolve and rejects are two callback function/handler provided by js

// let promise = new Promise((resolve, reject) => {
//   console.log("Iam a promise");
//   resolve("success");
// });

// we can also  reject the promise
// let promise = new Promise((resolve, reject) => {
//     console.log("Iam a promise");
//     reject("error");
//   });

// Generrally we get promises from APIs but here we have creating by ourselves
// but we are creating our own here
// now let se we have APIs getData returning some data
// getData not returning data immidiately but returnig a promise
// let see how

// function getData(dataID, getNextData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data:", dataID);
//       resolve("success");
//       if (getNextData) {
//         getNextData();
//       }
//     }, 5000);
//   });
// }

// let promise2 = getData(5);
// console.log(promise2); // this promise is pending right now

// after 5 sec promise2 will be fullfiled
// setTimeout(() => {
//   console.log(promise2);
// }, 5000);

// Generally promises hamako APIs se return hoke milata hai

// Now we will learn how to use promise after we find it from APIs

// if promise is fullfilled  we use =promise.then((res)=>{...})
// .then() method will only execute when our promide is fullfilled otherwise not
// if reject we use =  promise.catch((err)=>{...})

// let see when promise is resolved

// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
//   });
// };

// let promise = getPromise();

// promise.then((res) => {
//   console.log("promise is fullfilled:", res);
// });
// res automatic parameter and res = success which is pass as resolve("success")

// similarally for rejected
// const getPromise = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("Network  error");
//   });
// };

// let promise = getPromise();

// promise.then((res) => {
//   console.log("promise is fullfilled:", res);
// });
// promise.catch((err) => {
//   console.log("promise is rejected:", err);
// });

// now what is promise chaining

// function asycnFunc1() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data1");
//       resolve("success");
//     }, 4000);
//   });
// }

// function asycnFunc2() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("data2");
//       resolve("success");
//     }, 4000);
//   });
// }

// console.log("fatching data1 .... ");

// let P1 = asycnFunc1();
// P1.then((res) => {
//   console.log(res);

//   console.log("fatching data2.... ");

//   let P2 = asycnFunc2();
//   P2.then((res) => {
//     console.log(res);
//   });
// });

// another way of promise chainig is

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data:", dataId);
      resolve("success");
    }, 3000);
  });
}

// chaining
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then(() => {
    return getData(3);
  })
  .then(() => {
    return getData(4);
  })
  .then((res) => {
    console.log(res);
  });

// better then promises we will learn aync await

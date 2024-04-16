// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("async task is ocmpleted");
//   }, 1000);
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2");
//     resolve();
//   }, 1000);
// }).then(() => {
//   console.log("Async 2 resolved");
// });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve({ username: "Chai", email: "chai@Chaiaurcode.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "hiteshChoudhary", password: "123@chai" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// const username = promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(`error is ${error}`);
//   })
//   .finally(() => console.log("The promise is either resolve or rejected"));

// //    --  5   --    //

const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "javscript", password: "123@chai" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

//    --    FETCH     --    //

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json()
//     console.log(data);
//   } catch (error) {
//     console.log("E: ",error);
//   }
// }

// getAllUsers()

//    --  FETCH using .then()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=> console.log(error))

// PROMISES

// Promises in JS is simply an Object that represents the eventual completion of an asynchronous operation and its resulting value.

// --> Pending
// --> Fulfilled (Resolved)
// --> Rejected

// let promise = new Promise((resolve, reject) => {
//   let success = false;
//   if (success) {
//     resolve("Operation was a success");
//   } else {
//     reject("Operation failed");
//   }
// });

// promise
//   .then((message) => {
//     console.log("🚀 ~ message:", message);
//   })
//   .catch((err) => {
//     console.log("🚀 ~ err:", err);
//   });

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Operation was a success");
      } else {
        reject("Operation failed");
      }
    }, 3000);
  });
};

fetchData()
  .then((data) => {
    console.log("🚀 ~ data:", data);
  })
  .catch((err) => {
    console.log("🚀 ~ err:", err);
  });

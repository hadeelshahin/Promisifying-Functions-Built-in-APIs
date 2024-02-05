const button = document.querySelector("button");
const output = document.querySelector("p");

// function trackUserHandler() {
//   console.log("Clicked!");
// }

button.addEventListener("click", trackUserHandler); //handed this eventlistner to the browser to use callback mechansim

//javascript is a single-threaded langauge means that:
/**
 * it uses only one main thread for execution
 */

//see single threaded in action :
//an example of blocking code
let result = 0;
for (i = 0; i <= 100000000; i++) {
  result += i;
}
//console.log(result);

//this operation takes time , and we see the button is clicked after the result showed!
//we see the single threading in action
//js excution is blocked here after the result calculation is done
/************************************************************************************************ */
//focus on callbacks

// function trackUserHandlerr() {
//   //get the user location
//   //1-success callback
//   //2-faild fetching,callback
//   //
//   navigator.geolocation.getCurrentPosition(
//     (posData) => console.log(posData),
//     (error) => console.log(error)
//   );

//   console.log("Getting Position"); //will always run before the previous callbacks
//because of how eventloop structre works using callback queue and call stack ds
//}

/********************************************************************************************** */
//adding multible callbacks :
function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (error) =>
      setTimeout(() => {
        console.log(error), 5000;
      }),
    (error) => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("timer is done");
  }, 0);

  console.log("getting position...");
}
//will log : 1- console statment 2- event timer is let to 0  3- positioin


//promises concept:
/**
 * a Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value
 * Promises provide a cleaner and more organized way to work with asynchronous code compared to traditional callback-based approaches
 * A Promise has three states:

1-Pending: The initial state; the promise is neither fulfilled nor rejected.
2-Fulfilled: The operation completed successfully, and the promise has a resulting value.
3-Rejected: The operation failed, and the promise has a reason for the failure.
 */

const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation or task
  // If successful, call resolve with the result
  // If an error occurs, call reject with the reason
});

myPromise.then(
  (result) => {
    // Handle the fulfilled state (success)
    console.log(result);
  },
  (reason) => {
    // Handle the rejected state (error)
    console.error(reason);
  }
);
/************************************************************ */
function setTimer(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Timer set for ${time} milliseconds`);
      resolve("Timer completed");
    }, time);
  });
}

function handler() {
  setTimer(2000)
    .then((data) => {
      console.log(data);
    });

  console.log("Setting Timer");
}

handler();
/******************************************************************************* */
function asyncOperation() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      const success = true; // Set to false to simulate an error
      if (success) {
        resolve("Operation completed successfully");
      } else {
        reject(new Error("Operation failed"));
      }
    }, 1000);
  });
}

asyncOperation()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });

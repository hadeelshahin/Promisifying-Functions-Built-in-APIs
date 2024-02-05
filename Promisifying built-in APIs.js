//Promisifying built-in APIs
//Promisifying these APIs involves wrapping them in a Promise

const btn = document.querySelector("button");
console.log(btn);
btn.addEventListener("click", userTrackHandler);

/***************************************************************************************** */
//Promisifying setTimeOut:

function setTimer(duration) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
    //async code or operation
  });
  return myPromise;
  //1- callback function , 2-delay
}
//the timer is set when the promise is created

/***************************************************************************************** */
//Promisifying getCurrentPosition:

function getPosition(opts) {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      },
      opts
    );
  });

  return promise;
}

/*****************************************************************************************/
function userTrackHandlerr() {
  let positionData;
  //console.log("clicked");
  //navigator.geolocation.getCurrentPosition(
  getPosition()
    .then((posData) => {
      positionData = posData;
      return setTimer(2000);
    })
    .catch((err) => {
      console.log(err);
      return "on we go .."; //this will be wrapped into a promise
    })
    .then((data) => {
      console.log(data);
    }), //setTimer does return a promise at the end because that what we do inside of the setTimer we created a promise and return the promise
    //then will execute whenever the promise resolves
    // (error) => {
    //   console.log(error);
    // };
    setTimer(3000).then((data) => {
      console.log(data);
    });

  console.log("Getting position ..");
}

/*****************************************************************************************/
//using Async,Await

async function userTrackHandlerrr() {
  let posData;
  try {
    posData = await getPosition();
  } catch (error) {
    console.log(error);
  }

  // {
  //   console.log(error);
  // }
  //const timer = await setTimer(3000);

  console.log(posData);

  console.log("Getting position ..");
}

btn.addEventListener("click", userTrackHandler);
/*****************************************************************************************/
//multible promises=>using promise.all() ,promise.race()
function userTrackHandler() {
  //if i want to make sure that just one of these p[romises will execute =>the faster one :
  // getPosition();
  // setTimer(1000);
  // Promise.race([getPosition(), setTimer(2000)]).then((data) => {
  //   console.log(data);
  // });
  // Promise.all([getPosition(), setTimer(1000)]).then((data) => {
  //   console.log(data);
  // });
  Promise.allSettled([getPosition(), setTimer(1000)]).then((data) => {
    console.log(data);
  });
}

const promise1 = new Promise((resolve) => setTimeout(resolve, 1000, 'one'));
const promise2 = new Promise((resolve) => setTimeout(resolve, 2000, 'two'));
const promise3 = new Promise((_, reject) => setTimeout(reject, 500, 'three'));

Promise.race([promise1, promise2, promise3])
  .then((value) => {
    console.log(value); // Will be 'three' since it resolved first
  })
  .catch((reason) => {
    console.error(reason); // Will not be called in this example
  });


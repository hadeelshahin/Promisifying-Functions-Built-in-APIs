"# Promisifying-Functions-Built-in-APIs" 
#JavaScript Asynchronous Nature
JavaScript operates on a single-threaded model, meaning it processes one task at a time. This synchronous nature can be limiting when dealing with asynchronous operations, such as handling events or making API calls. 

*Callbacks
Callbacks are introduced as a mechanism for handling asynchronous events. They involve passing a function as an argument to another function, which will be executed later in response to an event. However, the discussion highlights the downsides of using callbacks extensively, leading to issues like "callback hell" and "callback spaghetti."

*Promises
To address the shortcomings of callbacks, the discussion moves on to promises. Promises are objects that represent the eventual completion or failure of an asynchronous operation. The then and catch methods are explained as tools for handling successful resolution and errors, respectively. The concept of "promisifying" functions is explored to promote a non-blocking coding style.

*ECMAScript 2017 (ES8) Features
async and await keywords introduced in ECMAScript 2017 (ES8). Functions marked with async automatically wrap the entire function in a promise, making the syntax cleaner and more readable.

Advanced Promise Methods: Promise.all, Promise.race, Promise.allSettled
 an exploration of advanced promise methods. Promise.all is highlighted as a tool for waiting until all promises in an iterable are fulfilled. Promise.race allows for racing promises, resolving or rejecting based on the first promise to settle. Lastly, Promise.allSettled is introduced as a method that handles all promises in an iterable, regardless of their outcome.

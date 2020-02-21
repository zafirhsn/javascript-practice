// ! PROMISES AND ASYNC/AWAIT

// Promises are a way to perform asynchronous actions in JavaScript. Very helpful in not blocking the call stack so that our application can do other things.

// Promises are either resolved or rejected.

// Async/Await is just new syntax to deal with promises. The underlying concept is the same. However, we don't use .then() syntax with async, await, which allows us to write asynchronous code that feels synchronous to read

// Async functions always begins with the async keyword
async function test() {
  throw Error("err");
}

test().then(res=> {
  console.log(res);
}).catch(e=>{
  console.log(e);
})


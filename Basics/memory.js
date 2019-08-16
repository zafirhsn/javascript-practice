// ! MEMORY AND THE JAVASCRIPT RUNTIME ENVIRONMENT

// ? The Run-Time Environment
// You can't have just the engine in order to run javascript. You need the run-time environment. The run-time environment is where the program uses the familiar call stack and memory heap, in addition to some other tools that are specific to JS

// ? Basics
// JS is a single-thread, non-blocking language. Single-threaded means it has one call stack only. In multi-threaded languages, you have to deal with situations where two functions on different threads are accessing a shared pool of memory. You need to handle deadlocks. In single-threaded languages, you dont have to do that and functions are called synchronously, which is easier to understand. However, it is slow. JavaScript is single-threaded, but it can emulate asynchronous behavior, which is the "non-blocking" part.

//? Web APIs
// There are parts of the run-time environment that aren't part of JS, like the Web APIs. This includes the DOM, AJAX, and Timeout (setTimeout). So these things are external to JS. They are part of our browser. JS is given access to these tools.

// ? The Callback Queue
// When the call stack is empty, the callback queue will start placing callbacks on the call stack.

// ? The Event Loop 
// The event loop is constantly checking if the call stack is empty, if it is, it triggers the callback queue to move the callback to the call stack. 



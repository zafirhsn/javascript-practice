// ! WEB WORKERS AND WORKER THREADS

// JavaScript is single-threaded, so how can we have multi-threads? We've already seen how JavaScript can be non-blocking and emulate multi-thread behavior by using callbacks and the event loop

// Web Workers (browser) and worker threads (Node.js) are ways we can have mutli-threading in JavaScript. The basic idea is that a web worker file does the heavy lifting in the background and gives us back messages when that heavy lifting is done. 

// From MDN "The worker thread can perform tasks without interfering with the user interface". However, you have some limitations; web workers can't manipulate the DOM and don't have access to some of th default Window object properties. 
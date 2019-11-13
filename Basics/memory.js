// ! MEMORY AND THE JAVASCRIPT RUNTIME ENVIRONMENT

// ? The Run-Time Environment
// You can't have just the engine in order to run javascript. You need the run-time environment. The run-time environment is where the program uses the familiar call stack and memory heap, in addition to some other tools that are specific to JS

// ? Basics
// JS is a single-thread, non-blocking language. Single-threaded means it has one call stack only. In multi-threaded languages, you have to deal with situations where two functions on different threads are accessing a shared pool of memory. You need to handle deadlocks. In single-threaded languages, you dont have to do that and functions are called synchronously, which is easier to understand. However, it is slow. JavaScript is single-threaded, but it can emulate asynchronous behavior, which is the "non-blocking" part.

//? Web APIs
// There are parts of the run-time environment that aren't part of JS, like the Web APIs. This includes the DOM, AJAX, and Timeout (setTimeout). So these things are external to JS. They are part of our browser. JS is given access to these tools.

//? What are Callbacks?
// Callbacks allow JavaScript to complete a task once another task finishes. This allows our code to be "non-blocking" meaning that JavaScript can go on to do other things. Formally, the definition of a callback is a function that is passed as an argument to another function. 
//* https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced 

// ? The Callback Queue
// When the call stack is empty, the callback queue will start placing callbacks on the call stack.

// ? The Event Loop 
// The event loop is constantly checking if the call stack is empty, if it is, it triggers the callback queue to move the callback to the call stack. 

// ? Rendering
// There is something akin to a render queue in JS which queues up a repaint of the screen. It has priority over our callback queue. Ideally, JS wants to re-render the screen at 60 FPS. Just like the callback queue, JS will wait until the call stack is empty in to push a render from the reder queue to the callstack. So, if you block the call stack with very slow code, you end up with an application that is slow or frozen because it can't render and it can't move on to the next parts of the code

// ? Final Thoughts
/*1. Don't block the call stack with slow code
  2. You can use setTimeout(cb, 0) to defer some code until the stack is clear
  3. The JS run-time environment/engine includes only the call stack and heap. The browser provides us the other tools (event loop, callback queue, Web APIs)
  4. DOM manipulation is provided by the browser as a web API
  5. In Node.js, these other tools are abstracted with C++ APIs
*/


// ! MEMORY MANAGEMENT IN JAVASCRIPT
// V8 allocates memory in the heap in 6 different spaces
// ^ 1. New space - where memory is allocated as soon as an object is created. Tend to be smaller and newer, obviously
// ^ 2. Old pointer space - When an object in the new space is used frequetly, it "graduates" to the old pointer space. Happens when u have a reference to an object
// ^ 3. Old data space - where the actual object goes when you use it frequently
// ^ 4. Large Object Space
// ^ 5. Code Space - Contains executable memory.
// ^ 6. Map space

// ? Reachability 
// We know that JS has a garbage collector that handles freeing up memory, but how does it decide what to clean up? It depends on what is no longer reachable in your code. So what is no longer reachable? Well if you look at the heap you'll see this tree like structure with a root node going down to leaf nodes which contains our actual variables. If a variable is reachable from that root node, JS doesn't garbage collect it. Variables that are no longer reachable are garbage collected.


// ? Stop the World GC
// JS stops the program, nothing runs. Then the GC runs quickly. This cycle happens many times. 

// ? New vs. Old
// JS treats garbage collection different in the new space from the old space. This idea of treating different ages of memory different in a GC context is known as a generational garbage collector. 

// ? Scavenging for the new space
// When the new space becomes full, the GC will do this thing called "scavenging". When scavenging, JS will traverse the heap starting from the root node and copy everything over. Then it will delete the old memory space. Therefore, everything that was reachable is kept intact and everything that wasn't is gone. Problem is, this carries a very high space complexity because JS is copying everything over. However, remember te new space has smaller data, so it's nt too big a deal. 

// ? Mark and Sweep for the old space
// Traverse the nodes, mark the ones which are active, and remove the ones that aren't.











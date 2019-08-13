// ! THE JAVASCRIPT ENGINE

/* Let's explore the engine that allows JavaScript code to be run in our browsers and in Node.js. We'll take a look at Chrome's V8 engine */

//? Intro
/* Every browser has it's own engine that takes the source code we write and turns it into machine executable code. For Chrome, that engine is called V8. It is the same engine used in Node.js */

/* Chrome's V8 is written in C++ and the core of its job is to convert JavaScript in optimized machine code */

// ? History
/* In the beginning, JavaScript was mostly an interpreted language. This means that the compiler executed instructions directly line by line. Python, for example, is an interpreted language. However, interpreted languages are very slow because they're not optimized for machines. The advantage is that your code is portable because you only need the interpreter to run the source code, you don't need to worry about system architectures like you would for compiled languages. */

// ? JIT Compilation
/* A special feature of V8 engine is its JIT compilation. Google dedicated two threads to the compiler ralted operations. There are other threads, but these two are the main. They were named full-codegen and crankshaft. */

// ? Full-codegen
// The function of full-codegen was to consume JavaScript and compile it just before execution. 
// ! THE JAVASCRIPT ENGINE

/* Let's explore the engine that allows JavaScript code to be run in our browsers and in Node.js. We'll take a look at Chrome's V8 engine */

// ? Intro
/* Every browser has it's own engine that takes the source code we write and turns it into machine executable code. For Chrome, that engine is called V8. It is the same engine used in Node.js */

/* Chrome's V8 is written in C++ and the core of its job is to convert JavaScript to optimized machine code */

// ? History
/* In the beginning, JavaScript was mostly an interpreted language. This means that the compiler executed instructions directly line by line without creating a compiled file of source code. It just communicated directly with the computer to execute code. Python, for example, is an interpreted language. However, interpreted languages are very slow because they're not optimized for machines. The advantage is that your code is portable because you only need the interpreter to run the source code,you don't need to worry about system architectures like you would for compiled languages. This proved too slow, so Google wanted to come up with another solution. Google wanted to add some features of compiled languages to make JavaScript faster.*/

// ? JIT Compilation
/* A special feature of V8 engine is its JIT compilation. This means compilation is done at run-time, like an interpreter. Google dedicated two threads to the compiler related operations. There are other threads, but these two are the main. They were named full-codegen and crankshaft. Today, full-codegen and crankshaft are replaced by Ignition and Turbofan, respectively.*/

// ? Threads
// There are four main threads in V8, the main thread, compiler thread, profiler thread, and garbage collection threads

// ? Main Thread
// Take the source code, compile it, execute it

// ? GC Threads
// Handles memory in JS

// ? Full-codegen
// The function of full-codegen was to consume JavaScript and compile it just before execution. Certain sections of the code are known as "hot" segments. These hot segments are hit multiple times. For example, a for loop is a hot segment.

// ? Profiler 
// Looks through the code we've written and marks hot segments

// ? Crankshaft
// Takes hot segments and turns it into optimized machine code. What makes it optimized? Well crankshaft does 3 major things to optimize it.
  // ^ Inlining
    // All the function calls in the code are replaced with the actual code for that function
  // ^ Hidden Classes
    // So many objects and properties of objects in JavaScript, lookup of objects and properties in memory can take time. Hidden classes are almost like a hashtable holding pointers to our objects and properties
  // ^ Inline Caching
    // Similar to hidden classes. Saves lookup time by caching object types most likely to be passed to a function.


// ? Flow of Code Conversion
//          FULL-CODEGEN                                        CRANKSHAFT                      
// Source code --> Hydrogen graph (static single state assignment) --> Lithium (lower level code) --> Machine Code --> On stack replacement (registers swapped) 


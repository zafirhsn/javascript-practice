// JavaScript has 7 primitive types. They are null, undefined, boolean string, number, object, and symbol. Symbol was added in ES6
console.log("===01===")
let nullType = null;
let undefType = undefined;
let boolType = false;
let strType = "";
let numType = 0;
let objType = {};
let symType = Symbol();

// Typeof operator will return a string of the type of the value it's evaluating
console.log("===02===")
// Null is of type "object". This is a 20 year bug in JavaScript.
console.log(`nullType is of type ${typeof nullType}`);
console.log(`undefType is of type ${typeof undefType}`);
console.log(`boolType is of type ${typeof boolType}`);
console.log(`strType is of type ${typeof strType}`);
console.log(`numType is of type ${typeof numType}`);
console.log(`objType is of type ${typeof objType}`)
console.log(`symType is of type ${typeof symType}`);

// Uninitiated variables are initiated as undefined, in both type and value
console.log("===03===")
let random;
console.log(`random is of type ${typeof random}`);
console.log(random);

// Arrays are objects
console.log("===04===");
let arr = [];
console.log(typeof arr);

// Functions are objects, but they're a special type of object called a function object. Function objects are first-class objects, meaning they aren't restricted in any way. They have all the abilities and properties an object can have. 
console.log("===05===");
let func = function add(a, b) {
  // return a + b;
}
console.log(typeof func);
console.log(func);
//  ! NEW KEYWORD IN JAVASCRIPT 

// There are a few questions we want to answer about the "new" keyword in JS. First, what happens under the hood when we use this keyword. And second, where is this new object stored? (Heap vs. Stack)

// Let's write a class using the constructor function of ES5

function myFunc() {
  this.x = 100;
}

let obj1 = new myFunc();

console.log(obj1.x);

// So what is happening here?
// ? First, we have declared a function and a property of that function using the "this" keyword. We'll look at this keyword more later. Anyway, we are setting the x property of this function to 100. This completes our function declaration. Remember that in javascript, anything that isn't one of the 6 primitive types, is an object, which is why a function is able to have properties. 

// ? Second, we are creating an instance of that function (object) using the new keyword. 

// Internally, jS is doing 4 things
// ^ 1. Creates an empty object { }
// ^ 3. All properties and functions are now assigned to the object { __proto__ = myFunc.prototype, x=100}
// ^ 4. JS returns the object to us (It adds "return this" at the end of our function). If there is no return statement, JS returns implicitly, like mentioned. If return is primitive value, JS ignores it. If return a JS object, JS will not complete the above 3 steps.

function MyFunc() {
  this.x = 100;     
  return { a: 123 };
}

var obj2 = new MyFunc();

console.log(obj2.x); // undefined

obj3 = myFunc();
console.log(obj3 instanceof myFunc);

// ! Memory 



// While some people would say JavaScript does not have types because it is a dynamically typed language, it still has loose definitions of types
// A dynamically typed language means you don’t have to declare types in the language. The language places types at runtime. 
// JavaScript has 7 primitive types. They are null, undefined, boolean string, number, object, and symbol. Symbol was added in ES6

/* JavaScript is also said to be a weakly typed language. This means that JS allows types to be inferred as other types. For example, 1 + ‘2’ would output ‘12’ in JS, but in many languages it would throw an error. The reason this works is because JS is coercing 1 from number type to string. Coercion happens very frequently in JS and is something to be very aware of.  */

/* 6 of these types are said to be “primitive” (everything except object). A primitive is not an object and has no methods of its own. All primitives are immutable.  */
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

// Functions are objects, but they're a special type of object called a function object. Function objects are first-class objects, meaning they aren't restricted in any way. They have all the abilities and properties an object can have. This is what allows us to store fucntions in variables. What's special about a function object, however, is that it can be called.
console.log("===05===");
let func = function add(a, b) {
  return a + b;
}
console.log(typeof func);

// Everything that isn't one of the 6 primitive types is some form of object.
// I thought this would throw an error, but JS is probably copying by value so the original string doesn't change
console.log("===06===");
let str = "Zafir";
try {
  str[2] = 'c';
} catch(err) {
  console.log(err);
}
console.log(str);

// NaN is a number...
// Why? Because JavaScript says so
console.log("===07===");
console.log(`NaN is of type ${typeof NaN}`);

// Type coercion is extremely inportant in JavaScript because it happens all the time. Let's see what get coerced to what. It is important to know that there are only 3 types of coercion/cassting possible in JavaScript. You can only cast to string, number, and boolean. Nothing else gets cast as anything else.

// https://dorey.github.io/JavaScript-Equality-Table/
// https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/?source=post_page-----3ac039f9877b----------------------

// Number Coercions
// Only an empty string will be coerced to 0. Any single alphabet or words will be NaN
console.log(Number()); //0
console.log(Number([])); //0
console.log(Number("")); //0
console.log(Number(null)) //0
console.log(Number([9])); //9
console.log(Number(false)); //0 
console.log(Number({})); //NaN
console.log(Number(undefined)); //NaN
console.log(Number("12+3")); //NaN


console.log("===08===");
// String coercions
console.log(String()); // 
console.log(String(9)) // '9'
console.log(String(false)); // "false"
console.log(String([])); //
console.log(String({})); // [object Object]
console.log(String([[]])); //
console.log(String([9, 1])); //'9'
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"



console.log("===09===");
console.log(Boolean()) //false
console.log(Boolean("")) //false
console.log(Boolean([])) // true
console.log(Boolean([9])) //true
console.log(Boolean({})); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(18)); //true





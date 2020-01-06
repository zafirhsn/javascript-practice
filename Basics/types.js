// ! JAVASCRIPT, A WEAKLY TYPED LANGUAGE
// While some people would say JavaScript does not have types because it is a dynamically typed language, it still has loose definitions of types
// A dynamically typed language means you don’t have to declare types in the language. The language places types at runtime. 
// JavaScript has 7 built-in types. They are null, undefined, boolean, string, number, object, and symbol. Symbol was added in ES6

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
console.log(`objType is of type ${typeof objType}`);
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

// Functions are objects, but they're a special type of object called a function object. Function objects are first-class objects, meaning they aren't restricted in any way. They have all the abilities and properties an object can have. This is what allows us to store functions in variables. What's special about a function object, however, is that it can be called.
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
console.log(str); //Even so, without an error, we still see that the original string didn't change, because primitives are immutable

// NaN is a number...
// Why? Because JavaScript says so
console.log("===07===");
console.log(`NaN is of type ${typeof NaN}`);

// Type coercion is extremely important in JavaScript because it happens all the time. Let's see what get coerced to what. It is important to know that there are only 3 types of coercion/casting possible in JavaScript. You can only cast to string, number, and boolean. Nothing else gets cast as anything else.

//* https://dorey.github.io/JavaScript-Equality-Table/
//* https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/?source=post_page-----3ac039f9877b----------------------

//! Number Coercions
// Only an empty string will be coerced to 0. Any single alphabet or words will be NaN
/* 
Implicit conversion to Number happens in more cases.
? Comparison operators (>, <, <=, >=)
? bitwise operators (|, &, ^, ~)
? arithmetic operators (-, +, *, /, %) (+ does not trigger numeric conversion if one of the operands is a string)
? Unary + operator
? loose equality (==, !=)
*/

/*
? When applying == to null or undefined, numeric conversion does not happen. Null equals only to null or undefined, and does not equal anything else. 
 */
console.log(Number()); //0
console.log(Number([])); //0
console.log(Number("")); //0
console.log(Number(null)) //0
console.log(Number([9])); //9
console.log(Number(false)); //0
console.log(Number({})); //NaN
console.log(Number(undefined)); //NaN
console.log(Number("12+3")); //NaN
console.log(Number(NaN)); //NaN


console.log("===08===");
//! String coercions
// ? Implicit string conversion is triggered by the binary + operator when any operand is a string
// ? When converting a string to a number, the engine first trims leading and trailing whitespace, \n, \t characters, returning NaN if the trimmed string does not represent a valid number. If string is empty, it returns 0
console.log(String()); // 
console.log(String(9)) // '9'
console.log(String(false)); // "false"
console.log(String([])); //
console.log(String({})); // [object Object]
console.log(String([[]])); //
console.log(String([9, 1])); //'9,1'
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log(String(NaN)); // "NaN"
console.log(String("\n")) // 


//! Boolean Coercions
// ? Implicit boolean conversion is triggered by logical operators (||, &&, !) or conditinal context (if, for, else, else if, while)

/* 
Logical operators such as || and && do boolean conversions internally, but actually return the value of original operands, even if they are not boolean
?'hello' and 123 are still coerced to boolean internally to calculate the expression
?let x = 'hello' && 123;   // x === 123
*/

//! User defined types all evaluate to true
console.log("===09===");
console.log(Boolean()) //false
console.log(Boolean("")) //false
console.log(Boolean([])) // true
console.log(Boolean([9])) //true
console.log(Boolean({})); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(18)); //true
console.log(Boolean(NaN)); //false

// You said primitives have no methods, but then how can I do this: "abc".length? 
// ? Primitives don't have methods. When you call a method on a primitive, JS takes your primitive, makes an object out of it, calls the method on the object, returns the method evaluation to you and deletes the object (garbage collection)
console.log("===10===");
str = "abc";
console.log(str.length);


// ! PRIMITIVES VS. REFERENCE TYPES 
// So the 6 primitive types in JS, as mentioned before, are string, number, booolean, null, undefined, and symbol. Object is the one reference type. What does this mean? What is the difference? 

console.log("===11===");
let name = "Zafir";
console.log(name);

let secondName = name;
console.log(secondName);

name = "Bob";
console.log(secondName);

// In this example, after we change the name variable to be "Bob", secondName does not change. This is because secondName does not contain a reference to name. Instead, JavaScript copies the contents of name into secondName

let person = {
  age: 22,
  name: "Zafir",
  hobbies: ["fishing", "sports"]
};

let secondPerson = person;
console.log(secondPerson);

person.age = 30;
console.log(secondPerson);

secondPerson.name = "Bob";
console.log(person);

// In this example, we've done the same thing as previously, but with an object. When person changes, secondPerson does as well because secondPerson is a reference to person. 

// ? Stack vs. Heap
// All primitive values are stored on the stack. When you declare a primitive variable, the value is stored directly in the memory location the variable accesses. All primitive values have object equivalents which are wrappers for the primitives. (string vs. String, String is the object equivalent of string). Object equivalents allow us to call methods on primitives. Ex: "abc".length. It's important to remember that the method is NOT being called on the primitive, but on the object version of it. 

// All reference values are stored on the heap. When you declare a reference variable, the location the variable accesses contains a pointer to the actual location where the object is stored in the heap.















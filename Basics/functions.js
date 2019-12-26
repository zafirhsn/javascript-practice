// ! FUNCTIONS
// In JS, functions are objects. But unlike regular objects, functions are callable. They have an internal method that makes them callable. Functions can get complicated in JS as there are function declarations, function expressions, IIFE, anonymous functions, callbacks, and things to know about scope and closures.

//^ A function declaration vs. function expression 
// First, what is an expression and what is a statement? An expression evaluates to a single value, whether that value be an object, string, number, etc. A statement performs an action. Think if statements and loops. 
//* https://2ality.com/2012/09/expressions-vs-statements.html
//? Some examples of expressions
/* 
  3 + x
  myVar
  myFunc("a","b")
*/ 

// ? Examples of statements
/* 
  if (y >=0) {
    x = y;
  } else {
    x = -y;
  }
*/


// This is a function declaration or statement. It defines the function addTwo. 
function addTwo(a, b) {
  return a + b;
}

// However, there is another major way to define functions and that is using a function expression
// In this example, the function on the right side is an expression that we are putting into a variable called addThree. The function itself is an anonymous function because there is no name afer the function keyword. So how do we call this function? With the variable name addThree(a,b,c). 
// What about a named function expression? What if we put a name after the function keyword, like addThree? This is legal, however, various web browsers have bugs related to named function expressions, so it is best to avoid using it. 
let addThree = function(a,b,c) {
  return a + b + c;
}



console.log(addThree(1,2,3))

// For most purposes, these two ways of writing a function are equivalent. But there is a major way in which they are different. That difference is hoisting. In JS, functions and variables are hoisted to the top of their respective scope. This means they are declared at the top of the scope even if you as the programmer declare them later on. This means that a function declaration will be defined at the top of the scope and is callable right after. This means you could call that function before you yourself declare it, because JS has hoisted it. HOWEVER, function expressions are not hoisted. You can not call the function before it is declared. The variable itself is hoisted, but the right hand side that contains the function is not hoisted. 




// IIFE (Immediately invoked function expression) 
//* https://2ality.com/2012/09/expressions-vs-statements.html


//^ Callback
// What is a callback? While there are some different definitions out there, a callback is simply a function that is passed as an argument for another function.

//^ Closures
// Closures are the function and the variables that make up the current context of the program. 
// ! CLASSES AND PROTOTYPES
// Javascript is not a class based language, it is a prototype based language. Classes don't really exist in JS like they do in Java and Python. In the example below, we use the "class" syntax from ES6, but this is just "syntactical sugar", meaning that it devolves to prototypal inheritance under the hood, WITH SOME CAVEATS. 

class car {
  constructor() {
    this.model = "Ford",
    this.year = 2015,
    this.color = "red", 
    this.plate = "HXY-1234"
  }
}

// I attach a "wheels" property to the prototype object of the class car. Every instance of car will now have access to this property since it will be linked to this prototype object.
car.prototype.wheels = 4;

myCar = new car();
myCar.color = "blue"

hisCar = new car();

// The cars have different colors because we changed one, but the same number of wheels
console.log(myCar.color);
console.log(hisCar.color);
console.log(myCar.wheels);

myCar.wheels = 3;

// Since wheels is of reference type, aka, both instances of car are pointing to the SAME wheels property. So when one instance updates the wheels property, it is updated for both. 
console.log(myCar.wheels);
console.log(hisCar.wheels);

let arr = [];
arr[9] = 5;
let str = "hello";


console.log(arr.length);
console.log(str.length);
console.log(Math.floor(5 / 2));

console.log(typeof arr);
let s = new String("zafir");
console.log(`String s is of type ${typeof s}`);
console.log(typeof(null));

// ^ EXTENDING CLASSES
// Lets take our car class and extend it to create a specific brand. 

class Toyota extends car {
  constructor() {
    super();
    this.model = "Toyota";
  }

  // In ES6, this is directly equivalent to adding a method or property to the prototype of the object like [[Object]].prototype
  drive() {
    console.log("We're driving!");
  }
}

// ^ VARIABLE PROPERTIES IN ES6 CLASS SYNTAX  
// You're probably wondering how we can add variable properties to our class like we would do with [[Object]].prototype.wheels = 4; And...we can't. There is no syntax to do so from within the class declaration. Why? Don't know, you can only add methods for now. Babel supports adding variable in class syntax. 


let rav4 = new Toyota();
// We override the model property in the constructor
console.log(rav4.model);
// Wheels is not a property of the child class or the child class's prototype, so javascript will go up the prototype chain and look in the parents class's prototype
console.log(rav4.wheels);
rav4.drive();

// This will throw an error because the method drive is a property of Toyota's prototype object, not the parent class's (car) prototype
try {
  myCar.drive()
} catch(e) {
  console.log(e);
}

// Let's check a few things
// Does Toyota's prototype equal rav4 prototype? Yes, it should
console.log(rav4.__proto__ === Toyota.prototype); // true
// Does rav4's prototype equal myCar's prototype? No, it shouldn't
console.log(rav4.__proto__ === myCar.__proto__) // false
// Does Toyota's prototype's prototype's equal mycar's prototype? Yes, it should, because we are going up the prototype chain to the parent's prototype.
console.log(Toyota.prototype.__proto__ === myCar.__proto__) // true





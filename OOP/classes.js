class car {
  constructor() {
    this.model = "Ford",
    this.year = 2015,
    this.color = "red", 
    this.plate = "HXY-1234"
  }
}

car.prototype.wheels = 4;

myCar = new car();
myCar.color = "blue"

hisCar = new car();

console.log(myCar.color);
console.log(hisCar.color);
console.log(myCar.wheels);

myCar.wheels = 3;

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




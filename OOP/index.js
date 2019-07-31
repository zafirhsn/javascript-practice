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


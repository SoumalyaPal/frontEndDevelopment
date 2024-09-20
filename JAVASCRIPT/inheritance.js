class Vehicle {
    constructor(name,color,wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }
    getDetails(){
        console.log(`This ${this.name} is ${this.color} color,
            It has ${this.wheels} wheels`);
    }
}
class Car extends Vehicle {
    constructor(color,brand,purposes){
        super('car',color,4);
        this.brand = brand;
        this.purposes = purposes;
    }
    getDetails(){
        console.log(`This ${this.name} is ${this.color} color,
            It has ${this.wheels} wheels, ${this.brand} company and ${this.purposes} purposes.`);
    }
}
const car1 = new Car(
    'Red',
    'Audi',
    'Luxury travelling'
);
car1.getDetails();
console.log(car1);
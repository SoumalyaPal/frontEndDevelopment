class Vehicle {
    name;
    color;
    wheels;
    #regNumber; // private properties

    constructor(name,color,wheels,number){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
        this.#regNumber = number
    }
    // private methods
    #getNumber(number){
        return number;
    }
    getDetails(){
        console.log(`This ${this.name} is ${this.color} color,
            It has ${this.wheels} wheels and Registraton number is ${this.#getNumber(this.#regNumber)}`);
    }
}
const veh1 = new Vehicle('Scooter','Grey',2,35468733);
console.log(veh1);
veh1.getDetails();
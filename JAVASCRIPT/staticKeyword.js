class Vehicle {
    static vName = 'Static Name';
    constructor(name,color,wheels){
        this.name = name;
        this.color = color;
        this.wheels = wheels;
    }
    getDetails(){
        console.log(`This ${this.name} is ${this.color} color,
            It has ${this.wheels} wheels`);
    }
    static showMsg(){
        console.log('This is the static method of the class');
    }
}
const v1 = new Vehicle('Car','Blue',4);
console.log(v1);
Vehicle.showMsg();
console.log(Vehicle.vName);
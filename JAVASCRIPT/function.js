// declare the function
function greetUser(){
    console.log("Hello user, welcome to the APP");
}

// call the function
greetUser();

// function expression 
const sum = function(a,b){
    return a+b;
};
console.log(sum(2,3));

// arrow function
var prod = (num1, num2) => num1*num2;
console.log(prod(4,5));

// IIFE (Immediately Invoked Function Expressions)
(function(a,b){
    console.log(a ** b);
})(4,2);

const user = (function() {
    const userData = {
        userName:'John',
        userAge: 20,
    };
    function getName() {
        console.log(userData.userName);
    }
    function updateAge(age){
        console.log(userData.userAge + age);
    }
    return{getName,updateAge};
})();
console.log(user);
user.getName();
user.updateAge(8);

// callback functions

function greet(wish){
    console.log(`${wish()} Welcome to JavaScript Course`);
}
function sayHi(){
    return 'Hi';
}
function sayHello(){
    return 'Hello';
}

greet(sayHi);
greet(sayHello);

// Function returning function

function greetWish(message){
    return function(wishes){
        console.log(`${wishes},${message}`);
    };
}
greetWish('Welcome to JavaScript')('Hi');

// higher order functions

const inputs = [1,2,3,4,5,6,7];

// function square(input){
//     const squared = [];
//     for(let num of input){
//         squared.push(num*num);
//     }
//     return squared;
// }

// function cubic(input){
//     const cube = [];
//     for(let num of input){
//         cube.push(num*num*num);
//     }
//     return cube;
// }

// console.log(square(inputs));
// console.log(cubic(inputs));
function operation(input, fn){
    const output = [];
    for(let num of input){
        output.push(fn(num))
    }
    return output;
}

function square(number){
    return number*number;
}

function cube(number){
    return number*number*number;
}
console.log(operation(inputs,square));
console.log(operation(inputs,cube));
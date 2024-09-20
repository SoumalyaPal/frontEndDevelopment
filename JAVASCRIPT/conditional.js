//if statement
let num = 12;
if(num%2==0){
    console.log("Number is Even");
}
console.log("Outside");

//if-else statement
let num1 = 11;
if(num1%2==0){
    console.log("Number is Even");
} else {
    console.log("Number is odd");
}
console.log("Outside");

//if-else-if statement
let month = prompt("Enter the month number");
if(month >= 1 && month <= 3){
    console.log("First Quarter");
} else if(month >= 4 && month <= 6){
    console.log("Second Quarter");
} else if(month >= 7 && month <= 9){
    console.log("Third Quarter");
} else if(month >= 10 && month <= 12){
    console.log("Fourth Quarter");
} else {
    console.log("Invalid Month");
}
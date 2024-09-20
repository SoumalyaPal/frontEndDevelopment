function power(b){
    return function (a){
        return a**b;
    };
}
const square = power(2);
console.log(square(4));

const cube = power(3);
console.log(cube(4));
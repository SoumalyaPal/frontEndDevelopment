const inputs = [1,2,3,4,5,6,7,8,9,10];
const evenNumbers = [];
for(let i in inputs){
    if(i%2 !== 0){
        continue;
    }
    evenNumbers.push(i);
    if(evenNumbers.length === 5){
        break;
    }
    console.log(evenNumbers);
}
console.log(evenNumbers);
//map function

const inputs = [2,4,6,8];
const squaredArray = inputs.map((num) => num*num);
console.log(squaredArray);

// reduce function

const sum = inputs.reduce((total,num) => {
    return total+num;
},0);
console.log(sum);

// filter function

const number = [4,5,8,-1,-4,-5];
const positives = number.filter(noNegative);
function noNegative(num){
    return num > 0;
}
console.log(positives);
const negatives = number.filter((num) => num < 0);
console.log(negatives);

// find and findIndex function

const search = [22,44,63,74,58];
const find1 =search.find((num) => num == 63);
console.log(find1);
const find2 = search.findIndex((num) => num == 63);
console.log(find2);
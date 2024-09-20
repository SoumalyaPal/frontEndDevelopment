let str = 'JavaScript is a Dynamically typed language';

//includes
console.log(str.includes('is'));

// replace
console.log(str.replace('is','was'));

//replaceAll
console.log(str.replaceAll('a','@'));

//trin
console.log(str.trim());

//substring
console.log(str.substring(3,12));
console.log(str.substring(-3,-12));

//slice
console.log(str.slice(3,12));
console.log(str.slice(-12,-3));

//split
let words = str.split(' ');
console.log(words);
let str = "JavaScript is an amazing language";
let charToFind = 'a';
countChars(str,charToFind);

function countChars(str,ch){
    let count = 0;
    for(let i in str){
        if(str.charAt(i) === ch){
            count++;
        }
    }
    console.log(`Occurances of character ${ch} is ${count}`);
}
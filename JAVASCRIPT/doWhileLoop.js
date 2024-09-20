let randomNum = Math.round(Math.random()*10);
console.log(randomNum);
let guessNum;

do{
    guessNum = prompt("Enter the number: ");
    if(guessNum==randomNum){
        console.log('Guessed Number');
    } else {
        console.log("Take another chance");
    }
} while(guessNum != randomNum);
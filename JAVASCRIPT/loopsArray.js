const Students = ['Soumalya','Ananya','Soumili','Sourav'];
//for loop
for(let i=0;i<Students.length;i++){
    console.log(`Roll No ${i+1}: ${Students[i]}`);
}
//for-in loop
for(let i in Students){
    console.log(`Roll No ${Number(i)+1}: ${Students[i]}`);
}
//for-of loop
for(let i of Students){
    console.log(i);
}
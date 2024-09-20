const aprilBatch = ['Tina','Madhur'];
const mayBatch = ['Ritik','Deepak','Shalini'];
const juneBatch = ['Saba','Shivani'];
const julyBatch = [];

// rest operator
function addStudents(batch,...students){
    for(let i of students){
        batch.push(i);
    }
    console.log(batch);
}
addStudents(aprilBatch,'Sunny','Ritu','Sheena');

//spread operator
const newBatch = [...mayBatch];
console.log(newBatch);
mayBatch.push('newStudent');
console.log(mayBatch);
console.log(newBatch);

//concatenate
const mergedBatch = [...mayBatch,...juneBatch];
console.log(mergedBatch);
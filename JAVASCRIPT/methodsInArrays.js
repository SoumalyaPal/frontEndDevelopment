/**Adding the element*/
// push()
const teams = ['CSK','RCB','MI'];
teams.push('GT');
console.log(teams);

//unshift()
teams.unshift('KKR');
console.log(teams);
console.log(teams.length);

/**Remove the element*/
//pop()
teams.pop();
console.log(teams);

//shift()
teams.shift();
console.log(teams);

/**checking the element is present or not*/
//indexOf()
const cskIndex = teams.indexOf('CSK');
console.log(cskIndex);
const kkrIndex = teams.indexOf('KKR');
console.log(kkrIndex);

//include()
const cSkIndex = teams.includes('CSK');
console.log(cSkIndex);
const kKrIndex = teams.includes('KKR');
console.log(kKrIndex);

//slice()
console.log(teams);
console.log(teams.slice(2));
console.log(teams);

//splice()
teams.splice(2,1,'GT','RR');
console.log(teams);

//concat()
const teams2 = ['India','Australia','England'];
const mergedTeam = teams.concat(teams2);
console.log(mergedTeam);
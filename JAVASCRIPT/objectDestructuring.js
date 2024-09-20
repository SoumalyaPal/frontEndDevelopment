const obj = {
    a: 1,
    b: 2,
    c: ['O','B','J'],
    d: {value: 'Val'}
};

const {a: a1} = obj;
console.log(a1);

let b;
({b: b} = obj);
console.log(b);
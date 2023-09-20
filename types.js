// strongly typed Language.

// int a = 5;
// string b = 'shamim sikdar';
// bool c = true;
// object student = {name:'shamim', id: 11};
// int[] numbers = [12, 23, 34];
// string[] friends = ['shamim', 'mamun'];


// Javascript is a dynamic type Language.

// primitive type
const a = 5;
const b = 'shamim sikdar';
const d = true;

// non-primitive type
const age = [12, 23, 34];
const student ={id: 12, class: 10};

// console.log(typeof a, typeof b, typeof d);




let x = 5;
let y = x;
console.log(x, y);
y = 7;
console.log(x, y);


// let p = {job:'Web developer'};
// let q = p;
// q = {job: 'Backend'};
// console.log(p, q);


let p = {job:'Web developer'};
let q = p;
q.job= 'Front end developer';
console.log(p, q);

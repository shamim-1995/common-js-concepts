// primitive types are pass by value.
let num1 = 5;
let num2 = 10;

function multiply(a, b){
    a = 21;
    const result = a * b;
    return result;

}
console.log(num1);
const output = multiply(num1, num2);
console.log(output);

// object and array are pass by reference.
let student1 = {name: 'shamim', partner: 'sikdar'}
let student2 = {name: 'kala', partner: 'sala'}

function makeMovie(couple1, couple2){

couple1.name = 'sabrina';
couple2.partner = 'mim';

}

console.log(student1);
console.log(student2);

makeMovie(student1, student2);
console.log(student1, student2);
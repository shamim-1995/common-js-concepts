
// Arguments is a array like object.

function sum(a, b, c){
    // console.log(arguments);
    // console.log( typeof arguments);
    // console.log(arguments[4]);
    const args = [...arguments];
    // console.log(args);

    const result = a + b + c;
    return result;
    
    

}

const total = sum(12, 23, 121, 123, 56, 78, 90);
// console.log(total);

console.log(sum.length); // parameter count.
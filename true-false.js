
/*
Truthy:
1.true.
2. any number (+ve or -ve) will be truthy other than 0.
3. any string is other than empty string.
4. '0', 'false' is truthy.
5. {} empty object is truthy.
6. [] empty array is truthy.


Falsy:
1. false
2. 0
3. '' (empty string is falsy.)
4. undefined is falsy value.
5. null is falsy.

*/ 



let x;
console.log(x);
if(x){
    console.log('value of x is truthy');
}
else{
    console.log('value of x is falsy');
}




// Optional.
// Check falsy.
const y = '';
if( !x){
console.log('value is falsy');
}



// Check truthy.

const z = {class: 12};
if(!!x){
    console.log('value is truthy');
}
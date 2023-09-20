

// == and === check only primitive value.
// so always use ===.
// equal comparison does not work non- primitive value.


const first = 2;
const second = 2;
if(first === second){
    console.log('value is equal');

}
else{
    console.log('values are not equal');
}


const first1= 2;
const second1 = '2';
if(first1 == second1){
    console.log('value is equal');

}
else{
    console.log('values are not equal');
}

const first2 = 2;
const second2 = '2';
if(first2 === second2){
    console.log('value is equal');

}
else{
    console.log('values are not equal');
}



// type coercion.
// type conversion.
// type casting.
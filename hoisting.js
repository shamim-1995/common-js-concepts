// for(var i = 0; i < 5; i++){
//     console.log(i);

// }
// console.log('outside', i);


print5();
print10();
for(let i = 0; i < 5; i++){
    // console.log(i);

}
// console.log('outside', i);


function print5(){
    console.log('Inside print5', 5);
}


const print10 = function(){
    console.log('Inside print10', 10);
}
function greetings(greetingHandler, name){
   greetingHandler(name);



}

// const numbers = [45, 12, 34, 67, 89];
// const laptop = {price: 123000, brand: 'lenovo', memory: '8gb'}

function greetingHandler(name){
    console.log('Good morning', name);
}


function greetEvening(name){
    console.log('Good evening', name);
}


function greetNight(name){
    console.log('Good night', name);
}

greetings(greetingHandler, 'shamim');
greetings(greetingHandler, 'sikdar');
greetings(greetingHandler, 'sabrina');
greetings(greetEvening, 'sabbir');
greetings(greetNight, 'soleman');
greetings(greetNight, 'soleman');
greetings(greetNight, 'soleman');

function submitHandler(){
    console.log('submit button clicked');
}
document.getElementById('btn-submit').addEventListener('click', submitHandler)

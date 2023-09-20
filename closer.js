function kitchen(){
    let counter = 0;
    return function(){
        roast++;
        return roast;
    }
}

const firstServer = kitchen();
console.log(firstServer());

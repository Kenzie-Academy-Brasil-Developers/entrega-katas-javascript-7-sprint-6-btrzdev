function callSome(item){
   let finalValue = false;
    for(let i = 0; i < item.length; i++){
        if(item[i] > 10){
            finalValue = true;
        } else {
            finalValue = finalValue
        }
    }
    return finalValue;
}
function newSome(item, callback){
    return callback(item)
}
console.log(newSome([1,2,3,11,4,5,6], callSome))

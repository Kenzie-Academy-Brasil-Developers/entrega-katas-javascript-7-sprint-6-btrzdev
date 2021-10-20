function callEvery(array){  
    let result1 = false;
    let result2 = true;   
    for(let i = 0; i < array.length; i++){
       if (array[i] % 2 === 1){
           result1 = true;                 
       } else if (array[i] % 2 !== 1){
           result2 = false;             
       }              
    }
    
    return result1 === result2;
}
function newEvery(array, callback){
    return callback(array)
}
console.log(newEvery([2,4,6], callEvery))

function callReduce(item){
    let acc = 0;
    for(let i = 0; i < item.length; i++){
        acc += item[i]
    }
    return acc;
}
function newReduce(array, callback){
    return callback(array)
}
console.log(newReduce([1,2,3,4,5,6], callReduce))

function callIncludes(array, x){
    let result = false;
    for (var i = 0; i < array.length; i++){
        if(array[i] === x) {
            result = true;       
        }
    } 
        return result;
}
function newIncludes(array, x, callback){
    return callback(array, x)

}
console.log(newIncludes([1,2,3], 20, callIncludes))
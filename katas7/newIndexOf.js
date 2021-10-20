function callIndexOf(array, item, position) {
    for (let i = 0; i < array.length; i++){
        if(array[i] === item){
            position = i;
        }
    }
    return position;
}
function newIndexOf (array, item, position, callback) {
    return callback(array, item, position)
}
console.log(newIndexOf([1,2,3,4], 4, 1, callIndexOf))
const callJoin = (array, item) => {
    let result = "";
    for (let i = 0; i < array.length; i++) {
       result += array[i]+item
    }    
    return result;
}
function newJoin (array, item, callback) {
    return callback(array, item)
}
console.log(newJoin(["casa","bia","eu"], "-", callJoin))
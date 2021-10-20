function callFill(array, valueX, startIndex, finalIndex){
let resultado = [];
    for(let i = 0; i < array.length; i++){
        if(i === startIndex){
            array[i] = valueX;
            resultado.push(array[i])
        } else if(i === finalIndex){
            array[i] = valueX;            
            resultado.push(array[i])
        } else {
            resultado.push(array[i])
        }
    }
    return resultado;
}
function newFill(array, valueX, startIndex, finalIndex, callback){    
    return callback(array, valueX, startIndex, finalIndex)
}
console.log(newFill([1,2,3,4], 1, 0, 3, callFill))

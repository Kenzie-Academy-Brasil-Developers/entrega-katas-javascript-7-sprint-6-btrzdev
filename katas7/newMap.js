function callMap (array, x){ 
    let resultado = []; 
    for (let i = 0; i < array.length; i++) {
        array[i] += x;
        resultado.push(array[i]);       
     }     
    return resultado;    
}
function newMap(array, x, callback){
   return callback(array, x)    

}
console.log(newMap([1, 2, 3, 4], 3, callMap))

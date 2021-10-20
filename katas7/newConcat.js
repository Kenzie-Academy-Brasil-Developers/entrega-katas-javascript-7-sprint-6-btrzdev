function callConcat(array1, array2){
    let resultado = array1;
    for(let i = 0; i < array2.length; i++) {
        resultado.push(array2[i]);
    }
    return resultado
}
function newConcat (array1, array2, callback){
   return callback(array1, array2)
}
console.log(newConcat([1,2,3], ["bia", "oi", "casa"], callConcat))
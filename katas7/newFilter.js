function callFilter(array){  
    let resultado = [];
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0){
        resultado.push(array[i])
        }
        
    }  
    
    return resultado;     
}

function newFilter(array, callback){
    return callback(array);
}
console.log(newFilter([1, 2, 3, 4, 5, 6], callFilter))


function callForEach(array, item, index){
    let result = [];
  for(let i = 0; i < array.length; i++) {
        item = array[i];
        index = i
        result.push(`${index}:${item}`);
  }
  return result;
}
function newForEach(array, numero, index, callback){    
   return callback(array, numero, index)
}
console.log(newForEach([1, 2, 3],0, 0, callForEach))
function callFind(array,x){ 
  for(var i = 0; i < array.length; i++) {
      if (array[i] > x){
          return array[i]
      }
  }
    return array[0]
}
function newFind(array, x, callback){ 
    return callback(array,x)
}
console.log(newFind([1,2,3,8,4,5,6], 3,  callFind))
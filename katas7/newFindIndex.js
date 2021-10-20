function callFindIndex(item,x){ 
    for (let i = 0; i < item.length; i++) {
        if(item[i] === x){
            return i
        }
    }
}
function newFindIndex(item, x, callback){ 
    return callback(item,x)
} 
console.log(newFindIndex([1,2,3,4,5,6], 3, callFindIndex))

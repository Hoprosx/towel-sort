
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let result = []
  if(matrix == [] || matrix == undefined){
    return result
  }
  for(arr of matrix){

    if(matrix.indexOf(arr) % 2 == 0){
        result.push(...arr)
    } else{
        result.push(...arr.sort((a,b)=>b-a))
    }
    
  }

  return result;
}


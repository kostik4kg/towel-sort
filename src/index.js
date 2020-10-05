
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined){
    return [];
  }
  else{
  let arr = [];
  matrix.map(function(a,i,e){
    if ( i % 2 === 0){
      arr = arr.concat(a);
      
    }
    else if(i% 2 !== 0){
      arr = arr.concat(a.sort(function (b, c) {
        return b < c ? 1 : -1;
      }));
  }
  })
  return arr;
}
}

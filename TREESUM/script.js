var arr = [ 5, 7, [ 4, [2], 8, [1, 3], 2], [9, []], 1, 8 ]
var sum = 0;

function treeSum(array) {

  array.forEach(function(value) {
    Array.isArray(value) ? treeSum(value) : sum += value; 
  });

  return sum;
}

console.log(treeSum(arr));
 


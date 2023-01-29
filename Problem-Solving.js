/* 

Solve the problem using javascript:

The statement that we’ll be getting an array as an input [1,2,3,4,5] along with an integer. Then, we need to shift each of the array’s elements unit to the left. For example, if 2 left rotations are performed on an array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

Function Description: 

Function name => rotateLeft
Parameters => 
Array of any length 
Number (integer)

Sample input => rotateLeft([1, 2, 3, 4, 5], 4 )

Sample output =>  [5, 1, 2, 3, 4]

*/
///  Solution ------------------------------------------------------------

function rotateLeft(arr, integerNumber) {
  const movedNumbers = arr.splice(0, Math.abs(integerNumber));
  const newArray = arr.concat(movedNumbers);
  return newArray;
}

const result = rotateLeft([1, 2, 3, 4, 5], 4);
console.log(result);

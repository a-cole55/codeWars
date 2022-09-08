// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

// Examples:

// [a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

// [1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
// Points:

// The arrays may be of different lengths, with at least one character/digit.
// One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).

function mergeArrays(a, b) {
    // your code here
    let newArr = [];
    if(a.length > b.length){
      for(let i = 0; i < a.length; i++){
      if (a[i] != undefined){
        newArr.push(a[i])
        }
      if (b[i] != undefined){
          newArr.push(b[i])
      }
        }
      }else{
      for(let i = 0; i < b.length; i++){
      if (a[i] != undefined){
        newArr.push(a[i])
        };
      if (b[i] != undefined){
          newArr.push(b[i])};
        };
        };
    console.log(newArr);
    return newArr
  };

mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']) // [1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]);
mergeArrays(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]) //['a', 1, 'b', 2, 'c', 3, 'd', 4, 'e', 5]);
mergeArrays([2, 5, 8, 23, 67, 6], ['b', 'r', 'a', 'u', 'r', 's']) //[2, 'b', 5, 'r', 8, 'a', 23, 'u', 67, 'r', 6, 's']);
mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6]) //['b', 2, 'r', 5, 'a', 8, 'u', 23, 'r', 67, 's', 6, 'e', 'q', 'z']);
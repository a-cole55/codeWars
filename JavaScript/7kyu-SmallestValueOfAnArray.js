// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
    // TODO
    //if-else conditional to see if you are returninng the value or index of smallest val in array
    //sort the array to find smallest value
    const minVal = Math.min(...arr)
    if(toReturn == 'value'){
      return minVal
    } else {
      return arr.indexOf(minVal)
    }
  }
  
  min([1,2,3,4,5], 'value') //(1)
  min([1,2,3,4,5], 'index') //(0)

// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all 
// their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce(
    (previousVal, currentVal) => previousVal + currentVal
  ); //something went wrong
  }
arrayPlusArray([1, 2, 3], [4, 5, 6]) //21);
arrayPlusArray([-1, -2, -3], [-4, -5, -6]) //-21);
arrayPlusArray([0, 0, 0], [4, 5, 6]) //15);
arrayPlusArray([100, 200, 300], [400, 500, 600]) //2100);
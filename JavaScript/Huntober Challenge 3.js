// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.


function sumMix(arr){
    return arr.map((ele) => Number(ele)).reduce((acc, cum) => acc + cum)
}
sumMix([9, 3, '7', '3']) //22);
// sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
// sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 
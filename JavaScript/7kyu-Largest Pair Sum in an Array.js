// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

function largestPairSum (numbers) {
  //TODO: Write your Code here
  const sortNums = numbers.sort((a,b) => b-a)
  return sortNums[0] + sortNums[1]
}
largestPairSum([10,14,2,23,19]) //(42)
largestPairSum([-100,-29,-24,-19,19]) //(0)
largestPairSum([1,2,3,4,6,-1,2]) //(10)
largestPairSum([-10, -8, -16, -18, -19]) //(-18)

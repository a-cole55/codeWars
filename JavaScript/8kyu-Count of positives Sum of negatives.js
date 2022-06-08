// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].



function countPositivesSumNegatives(input) {
  let finalResult = [];
  let pos = 0;
  let neg = 0;
  console.log(input)
  if(input === null){
    return []
  }else{
    for(let i = 0; i < input.length; i++){
      if(input[i] > 0){
        pos += 1
      }else if(input[i] < 0){
        neg += input[i]
      }
      }
  } if( pos === 0 && neg === 0){
    return []
  }else{
    finalResult.push(pos, neg)
    return finalResult;
}
    }

// not my solution

// function countPositivesSumNegatives(input) {
//     if (input == null || input.length == 0)
//       return [];
    
//     var positive = 0;
//     var negative = 0;
    
//     for (var i=0, l=input.length; i<l; ++i)
//     {
//       if (input[i] > 0)
//         ++ positive;
//       else
//         negative += input[i];
//     }
    
//     return [positive, negative];
// }
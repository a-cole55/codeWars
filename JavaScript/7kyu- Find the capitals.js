// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example
// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );


var capitals = function (word) {
	// Write your code here
  //convert to array
  //filtet for capital letters
  //get index
  let arr = word.split('');
  let capitalIndex = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == arr[i].toUpperCase()){
       capitalIndex.push(i)
       };
  }
  return capitalIndex
};

capitals('CodEWaRs') //[0,3,4,6]
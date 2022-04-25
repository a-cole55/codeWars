// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3


function stray(numbers) {
    numbers.forEach((ele,index) => {
      if (index === numbers.lastIndexOf(ele)){
        return ele
      }
    });
  }

//or (second solution not mine)
// function stray(numbers) {
//     let a = numbers.sort();
    
//     if(a[0] != a[1]) {
//       return a[0]
//     } 
// }

stray([1,1,2])
stray([0,7,0,0])
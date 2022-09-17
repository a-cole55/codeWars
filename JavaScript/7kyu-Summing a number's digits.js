// Write a function named sumDigits which takes a number as input and returns the 
// sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5
// Let's assume that all numbers in the input will be integer values.

function sumDigits(number) {
    number = Math.abs(number);
    let arr = String(number).split('')
    let numArr = arr.map((ele) => {
      return Number(ele)
    });
    console.log(numArr)
    return numArr.reduce((a,b) => a + b)
  }
sumDigits(10) //1);
sumDigits(99) //18);
sumDigits(-32) //5);

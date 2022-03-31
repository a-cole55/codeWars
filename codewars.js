//Factorial of number: 
//If number in range of 0-12 find factorial; if not throw RangeError
function factorialOfNumber(num){
    product = 1
    if (num > 0 && num < 13){
        for (let i = 1; i <= num; i++){
            product *= i;
        }
        console.log(product)
    } else if (num === 0){
        return 1

    } else {
        throw new RangeError('Number out of range. Choose a number between 0 and 12')
    }
}
factorialOfNumber(5)

//convert number to get square root of each number then concat together:
function numSquared(n){
    let stringSquared = '';
    let stringOfNum = n.toString();
    const arr = stringOfNum.split('').map(ele => {
        return ele ** 2;
    });
    const squaredArr = arr.forEach((e) => {
        stringSquared += e.toString()
    });
    console.log(stringSquared);
}
numSquared(9119)

//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
//Note: a and b are not ordered!
//Examples (a, b) --> output (explanation)
//(1, 0) --> 1 (1 + 0 = 1)
//(1, 2) --> 3 (1 + 2 = 3)

function getSum( a,b )
{
   a = (a);
   b = (b);
  const arr = [];
   //Good luck!
  if (a === b){
    return a;
  } else if (a > b){
    let i = b;
    while (i <= a){
      arr.push(i);
      (i) += 1;
       } 
    let sum = arr.reduce((acc, cv) => acc + cv);
    return sum;
   } else {
    let i = a;
    while (i <= b){
      arr.push(i);
      (i) += 1;
       } 
    let sum = arr.reduce((acc, cv) => (acc) + (cv));
    return sum
   }
}

//Task
//Given a string str, reverse it omitting all non-alphabetic characters.
//Example
//For str = "krishan", the output should be "nahsirk".
//For str = "ultr53o?n", the output should be "nortlu".
//Input/Output
//[input] string str
//A string consists of lowercase latin letters, digits and symbols.
//[output] a string

function reverseLetter(str) {
    //split string split('')
    //go thru each letter in str
    //does it equal a num or special character?
    //if not, add it to an array
    //arr.reverse().join('')
    let alphaChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const arr = str.split('');
    const filteredArray = arr.filter(function(letter){
      if (alphaChars.includes(letter)){
        return true}
      }); console.log(filteredArray);
    const reversed = filteredArray.reverse().join('');
    console.log(reversed)
  }
  reverseLetter('hey!now?')


  //Count the number of divisors of a positive integer n.
  // Random tests go up to n = 500000.
  // Examples (input --> output)
  // 4 --> 3 (1, 2, 4)
  // 5 --> 2 (1, 5)
  // 12 --> 6 (1, 2, 3, 4, 6, 12)
  // 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
function getDivisorsCnt(n){
    // todo
  let divisors = 0
  for(let i = 1; i <= n; i++){
    if(n % i === 0){
      divisors += 1
    }
  }
  return divisors
}

//You will be given an array and a limit value. You must check that all values in the 
//array are below or equal to the limit value. If they are, return true. Else, return false.
//You can assume all values in the array are numbers.
function smallEnough(a, limit){
  let result = a.every(function(e){
		  return e <= limit;
});
  return result;
}
smallEnough([66, 101], 200)
smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)
smallEnough([101, 45, 75, 105, 99, 107], 107)
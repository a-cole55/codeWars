// Create a function named divisors/Divisors that takes an integer n > 1 and 
// returns an array with all of the integer's divisors(except for 1 and the 
//     number itself), from smallest to largest. If the number is prime return 
//     the string '(integer) is prime' (null in C#) (use Either String a in Haskell 
//         and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(int) {
  let arr = []
  let i = 2;
  while (i < int){
    if(int % i === 0){
      arr.push(i)
    }
    i++
  }
  return arr.length > 0 ? arr : `${int} is prime`
};
divisors(15) //[3, 5]);
divisors(12) //[2, 3, 4, 6]);
divisors(13) //"13 is prime")
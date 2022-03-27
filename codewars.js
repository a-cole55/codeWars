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

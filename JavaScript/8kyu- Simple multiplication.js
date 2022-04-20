// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(num) {
    // your code........
  return num % 2 == 0 ? num*=8 : num*=9
}

simpleMultiplication(2) //16
simpleMultiplication(1) //9
simpleMultiplication(8) //64
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.




function testEven(n) {
    //Your awesome code here!
  //take in number and see if divisible by 2 using modulus
  return n % 2 === 0 ? true : false
}

testEven(0), true, "testEven for 0");
testEven(0.5), false, "testEven for 0.5");
testEven(1), false, "testEven for 1");
testEven(2), true, "testEven for 2");
testEven(-4), true, "testEven for 2");
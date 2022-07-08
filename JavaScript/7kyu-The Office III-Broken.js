// The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

// Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

// Given a string of binary, return the version the photocopier gives you as a string.

function broken(x){
    let arr = x.split('').map((ele) => {
      if( ele === "1"){
        return "0"
      }else{
        return "1"
      }
    });
    return arr.join('')
  }
broken("1") //"0");
broken("10000000101101111110011001000") //"01111111010010000001100110111");
broken("100010") //"011101");


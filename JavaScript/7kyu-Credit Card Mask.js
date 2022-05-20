// Usually when you buy something, you're asked whether your credit card number, phone number 
// or answer to your most secret question is still correct. However, since someone could look 
// over your shoulder, you don't want that shown on your screen. Instead, we mask it.

// Your task is to write a function maskify, which changes all but the last four characters into '#'.

// Examples
// "4556364607935616" --> "############5616"
//      "64607935616" -->      "#######5616"
//                "1" -->                "1"
//                 "" -->                 ""

// // "What was the name of your first pet?"

// "Skippy" --> "##ippy"

// "Nananananananananananananananana Batman!"
// -->
// "####################################man!"






//PREP
// return masked string
//slice last 4 digits off
//subtract 5 from length 
//slice at len -4
//subtract 5 - length and the remaining # should be #'s
//then attach # to sliced numbers
function maskify(cc) {
  let len = cc.length
  if(len <= 4){
    return cc
  } else{
    let digits = cc.slice(-4)
    let num = len - 4
    let mask = '#'
    let string = mask.repeat(num)
    return string.concat(digits)
  }
}


maskify('4556364607935616') //'############5616');
maskify('1') //'1');
maskify('11111') //'#1111')
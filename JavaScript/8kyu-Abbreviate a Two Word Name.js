// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    // code away
  name = name.toUpperCase();
  let arr = name.split(' ')
  let arr2= arr.map((ele) => {
    return ele[0]
  });
  console.log(arr2.join('.'))
}
abbrevName("Sam Harris") //(S.H)
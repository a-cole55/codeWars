// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
  // Go for it
  const arrayList = []
  const arr = str.split(' ')
  console.log(arr)
  for (let i = 0; i < arr.length; i++){
       arrayList.push(arr[i].split('').reverse().join(''))
  }
  console.log(arrayList)
   let joinArray = arrayList.join(" ");
  return joinArray
}
reverseWords('The quick brown fox jumps over the lazy dog.')
//'ehT kciuq nworb xof spmuj revo eht yzal .god');
reverseWords('apple') //'elppa'
reverseWords('a b c d') //'a b c d'
reverseWords('double  spaced  words') //'elbuod  decaps  sdrow'
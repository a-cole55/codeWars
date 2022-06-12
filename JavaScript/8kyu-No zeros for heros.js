// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  let arr = n.toString().split('');
  let index = ""
  // your code
  for(let i = arr.length - 1; i >= 0; i--){
    if(arr[i] != "0"){
      index += i
      break
    }
  }
  index = +index + 1
  return +arr.slice(0, index).join('')
}
noBoringZeros(1450) //145)
noBoringZeros(960000) //96)
noBoringZeros(1050) //105)
noBoringZeros(-1050) //-105)
noBoringZeros(-105) //-105)
noBoringZeros(0) //0)
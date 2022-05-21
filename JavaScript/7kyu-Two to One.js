// Take 2 strings s1 and s2 including only letters from ato z. Return a 
// new sorted string, the longest possible, containing distinct letters - 
// each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


function longest(s1, s2) {
  // your code
  let acc = s1.concat(s2)
  let arr = [...new Set(acc)].sort()
  return arr.join('')
}

longest("aretheyhere", "yestheyarehere") //"aehrsty")
longest("loopingisfunbutdangerous", "lessdangerousthancoding") //"abcdefghilnoprstu")
longest("inmanylanguages", "theresapairoffunctions") //"acefghilmnoprstuy")
// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""


function solution(string) {
  return string.replace(/[A-Z]/g, ' $&')
}
//g in the regex ensures that all capital letters are "replaced"
//'$&' returns the special substring (included added whitespace for space before capital letter)

solution('camelCasing')
solution('camelCasingTest')


//another solution ***NOT MINE***
// function solution(string) {
//     string = string.split('').map(function (el) {
//       if (el === el.toUpperCase()) {
//         el = ' ' + el
//       }
//       return el
//     })
//     return string.join('')
//   }
  
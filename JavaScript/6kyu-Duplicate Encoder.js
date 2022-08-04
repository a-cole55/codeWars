// The goal of this exercise is to convert a string to a new string where each character 
// in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. Ignore 
// capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you 
// read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    // ...
  let lowercase = word.toLowerCase()
  let wordArr = lowercase.split('');
  const countArr = wordArr.map((ele) => {
    let count = 0;
    for(let i=0; i < word.length; i++){
      if(ele === word[i]){
        count += 1
      }
    }
    if(count === 1){
      return "("
    }else{
      return ")"
    }
  })
  return countArr.join("")
}

duplicateEncode("din") //"(((");
duplicateEncode("recede") //"()()()");
duplicateEncode("Success") //")())())","should ignore case");
duplicateEncode("(( @") //"))((");
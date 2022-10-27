// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function convertStr(str){
    let lowerStr = str.toLowerCase();
    let arr = lowerStr.split("");
    let change = arr.map((ele) => {
      if(arr.indexOf(ele) === arr.lastIndexOf(ele)){
        return ")"
      }else{
        return "("
      }
    });
    // console.log(change.join(""));
    return change.join("")
}
convertStr("Hello")
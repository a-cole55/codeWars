// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

function maxCharacter (str){
    const charMap = {}
    let maxCharCount = 0
    let maxChar = null
     
    /*remove spaces*/
     let str1 = str.split(' ').join('')

     for(const char of str1){
       if(charMap[char]){
         charMap[char] = charMap[char] + 1
       } else{
         charMap[char] = 1
       }
     }
     console.log(charMap)
     for(const char in charMap){
      if(charMap[char] > maxCharCount){
        maxChar = char
        maxCharCount = charMap[char]
      }
     }
     console.log(maxChar)
     return maxChar
   }
   maxCharacter("Hello World!")
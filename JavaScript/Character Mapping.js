//Given a string of text, find and return the most recurring character. e.g


function maxRecurringChar(str){
    charMap = {};
    maxCharValue = 0;
  
    for(let char of str){
        if(charMap.hasOwnProperty(char)){
            charMap[char]++
        }else{
            charMap[char] = 1
        }
    }
    console.log(charMap);
      for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    console.log(maxChar)
    return maxChar

}

maxRecurringChar('aabacada') // will return 'a'
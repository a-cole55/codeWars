function isPalindrome(line) {
    if(typeof line === "number"){
      line = line.toString()
    }
    let arr = line.split('')
    let reversed = arr.reverse()
    let reversedStr = reversed.join('')
    return line === reversedStr;
  }

isPalindrome("anna") //true);

isPalindrome("walter") //false);

isPalindrome(12321) //true);

isPalindrome(123456) //false);

isPalindrome(".") //true);

isPalindrome(".!!.") //true);
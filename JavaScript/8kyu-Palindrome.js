// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
    // your code here
    x = x.toLowerCase();
    let reversed = ""
    for(let i = x.length - 1; i >= 0; i--){
      reversed += x[i]
    }
    return x === reversed
  }

isPalindrome("a") //true));
isPalindrome("aba") //true));
isPalindrome("Abba") //true));
isPalindrome("hello") //false));
isPalindrome("Bob") //true));
isPalindrome("Madam") //true));
isPalindrome("AbBa") //true));
isPalindrome("") //true));
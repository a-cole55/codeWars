// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    text = text.toLowerCase()
    let final = ''
    const alphabet = {
      "a" : '1',
      "b" : '2',
      "c" : '3',
      "d" : '4',
      "e" : '5',
      "f" : '6',
      "g" : '7',
      "h" : '8',
      "i" : '9',
      "j" : '10',
      "k" : '11',
      "l" : '12',
      "m" : '13',
      "n" : '14',
      "o" : '15',
      "p" : '16',
      "q" : '17',
      "r" : '18',
      "s" : '19',
      "t" : '20',
      "u" : '21',
      "v" : '22',
      "w" : '23',
      "x" : '24',
      "y" : '25',
      "z" : '26',
    }
    for (let i = 0; i < text.length; i++){
      if(alphabet.hasOwnProperty(text[i])) {
        final += `${alphabet[text[i]]} `
      } 
    }
    
    return final.trim()
  }

alphabetPosition("The sunset sets at twelve o' clock.") //"20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
alphabetPosition("The narwhal bacons at midnight.") //"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");


//not my solution:
// function alphabetPosition(text) {
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   return text.toLowerCase().split('')
//   .filter( letter => {
//     let index = alphabet.indexOf(letter);
//     return index > -1;
//   }  )
//   .map( letter => alphabet.indexOf(letter) + 1 )
//   .join(' ')
// }
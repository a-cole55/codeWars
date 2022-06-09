// A string is considered to be in title case if each word in the string is either (a) capitalised 
// (that is, only the first letter of the word is in upper case) or (b) considered to be an exception 
// and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions 
// (minor words). The list of minor words will be given as a string with each word separated by a space. 
// Your function should ignore the case of the minor words string -- it should behave in the same way even 
// if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first 
// word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for 
// the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
// ###Example

// titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
// titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
// titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'

function titleCase(title, minorWords) {
  let final = [];
  //check length of title
  if(title.length === 0){
    return ""
  }else{
     title = title.toLowerCase();
     let wordArr = title.split(' ');
     //check if minorWords is included as a parameter
    if(minorWords != undefined){
      minorWords = minorWords.toLowerCase();
      const minorWordsArr = minorWords.split(' ');
      //make first word capital
      if(wordArr[0].length > 1){
        final.push(wordArr[0][0].toUpperCase() + wordArr[0].slice(1))
      }else{
        final.push(wordArr[0][0].toUpperCase())
      };
      //capitalize all other words except minorWords
      for(let i = 1; i < wordArr.length; i++){
        if(minorWordsArr.includes(wordArr[i])){
           final.push(wordArr[i])
        }else{
           final.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1))
           }
      };
    //capitalize all other words if not in minor words
    }else{
     for(let i = 0; i < wordArr.length; i++){
       final.push(wordArr[i][0].toUpperCase() + wordArr[i].slice(1))
     }
   }
        return final.join(' ')
  }
}

titleCase('') //'')
titleCase('a clash of KINGS', 'a an the of') //'A Clash of Kings')
titleCase('THE WIND IN THE WILLOWS', 'The In') //'The Wind in the Willows')
titleCase('the quick brown fox') //'The Quick Brown Fox')



// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)


function isIsogram(str){
  //...
  const arr = str.toUpperCase().split('')
  const checkForDupes = new Set(arr)
  return arr.length === checkForDupes.size
}


// isIsogram("Dermatoglyphics"), true );
// isIsogram("isogram"), true );
// isIsogram("aba"), false, "same chars may not be adjacent" );
// isIsogram("moOse"), false, "same chars may not be same case" );
// isIsogram("isIsogram"), false );
// isIsogram(""), true, "an empty string is a valid isogram" );
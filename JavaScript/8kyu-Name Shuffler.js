// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str){
    //Shuffle It
    return str.split(' ').reverse().join(' ')
  }
nameShuffler('john McClane') //'McClane john');
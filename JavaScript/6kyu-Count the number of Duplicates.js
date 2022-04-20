// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic 
// characters and numeric digits that occur more than once in the input string. The input 
// string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric 
// digits
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text){
  //...
  let total = 0;
  text = text.toLowerCase();
  let uniq = [...text].reduce((acc, curr)=>{
    return acc.includes(curr) ?  acc  :  acc + curr;
  }, "")
  console.log(uniq)
  for (let x = 0; x < uniq.length; x++){
      let count = 0;
      for(let i= 0; i < text.length; i++){
        if (uniq[x] == text[i]){
          count++;
        }  
      }
      if (count >= 2){
      total++
  }
  }
  console.log(total)
}

duplicateCount("Indivisibility") //(1)
duplicateCount("Indivisibilities") //(2)
duplicateCount("") //(0)
duplicateCount("abcde") //(0);
duplicateCount("aabbcde") //(2);
duplicateCount("aabBcde") //(2)

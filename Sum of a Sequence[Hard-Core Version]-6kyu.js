// As the title suggests, this is the hard-core version of another neat kata.

// The task is simple to explain: simply sum all the numbers from the first parameter being the beginning to the second parameter being the upper limit (possibly included), going in steps expressed by the third parameter:

// sequenceSum(2,2,2) === 2
// sequenceSum(2,6,2) === 12 // 2 + 4 + 6
// sequenceSum(1,5,1) === 15 // 1 + 2 + 3 + 4 + 5
// sequenceSum(1,5,3) === 5 // 1 + 4
// If it is an impossible sequence (with the beginning being larger the end and a positive step or the other way around), just return 0. See the provided test cases for further examples :)

// Note: differing from the other base kata, much larger ranges are going to be tested, so you should hope to get your algo optimized and to avoid brute-forcing your way through the solution.


function sequenceSum(begin, end, step){
  //your code here
    let total = 0;
    if (begin > end && step < 0){
      while (begin >= end){
        (total) += (begin)
        begin += (step) }
    } else if (begin > end) {
      return 0
    } else if (begin < end && step <0) {
      return 0
    }else {
      while (begin <= end){
        total += (begin)
        begin += (step)
    }
  } 
      return total
};
sequenceSum(2, 6, 2) //(12)
sequenceSum(1, 5, 1) //(15);
sequenceSum(1, 5, 3) //(5);
sequenceSum(-1, -5, -3) //(-5);
sequenceSum(16, 15, 3) //(0);
sequenceSum(-24, -2, 22) //(-26);
sequenceSum(-2, 4, 658) //(-2);
sequenceSum(780, 68515438, 5) //(469436517521190);
sequenceSum(9383, 71418, 2) //(1253127200);
sequenceSum(20, 67338879, 5) //(453452442295970);
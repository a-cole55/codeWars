// Given two integer arrays a, b, both of length >= 1, create a program that returns true 
// if the sum of the squares of each element in a is strictly greater than the sum of the 
// cubes of each element in b.

function arrayMadness(a, b) {
    // Ready, get set, GO!!!
    let aSquared = a.map((ele) => ele**2).reduce((acc, next) => acc + next);
    let bCubed = b.map((ele) => ele**3).reduce((acc, next) => acc + next);
    return aSquared > bCubed
  }

arrayMadness([4,5,6],[1,2,3]) //true);
arrayMadness([5,6,7],[4,5,6]) //false);
arrayMadness([4,5,6],[3,4,5]) //false);
arrayMadness([3,4,5],[2,3,4]) //false);
arrayMadness([2,3,4],[1,2,3]) //false)
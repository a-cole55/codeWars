// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    let filtered = arr.filter(ele => ele != 0)
    let zeroArr = arr.filter(ele => ele === 0)
    console.log(filtered.concat(zeroArr))
  }
  moveZeros([1,2,0,1,0,1,0,3,0,1]) //[1, 2, 1, 1, 3, 1, 0, 0, 0, 0]);


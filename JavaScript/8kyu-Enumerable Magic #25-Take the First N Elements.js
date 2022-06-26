// Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.

function take(arr, n) {
    // Your code here
    let newArr = []
    if(arr.length > 0){
      for(let i = 0; i < n; i++){
        if(arr[i] != undefined){
          newArr.push(arr[i])
        }else{
          break
        };
    }
    }
    return newArr
  }
  take([0, 1, 2, 3, 5, 8, 13], 3) //[0, 1, 2], "should return the first 3 items")
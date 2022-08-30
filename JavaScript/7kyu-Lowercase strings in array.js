// Create a function to lowercase all strings in an array. Non-string items should remain unchanged.

Example
arrayLowerCase(['Red', 'Green']) == ['red', 'green']
arrayLowerCase([1, 'Green']) == [1, 'green']

function arrayLowerCase(arr) {
    // return array of strings in lowercase
    let newArr = arr.map((ele) => {
      if(typeof ele == "string"){
        return ele.toLowerCase()
      }else{
        return ele
      }
    })
    return newArr
  }
arrayLowerCase(['Red', 'Green']) //['red', 'green']);


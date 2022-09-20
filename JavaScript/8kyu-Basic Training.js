
function getLength(arr){
    //return length of arr
    return arr.length
  }
  function getFirst(arr){
    //return the first element of arr
    return arr[0]
  }
  function getLast(arr){
    //return the last element of arr
    return arr[arr.length - 1]
  }
  function pushElement(arr){
    var el=1;
    arr.push(el);
    return arr
  }
  function popElement(arr){
    //pop an element from arr
    arr.pop()
    return arr
  }
getLength([1,2,3]) //3);
getFirst([1,2,3]) //1);
getLast([1,2,3]) //3);
pushElement([1,2,3]).length //4);
popElement([1,2,3]).length //2);
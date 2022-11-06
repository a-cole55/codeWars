//bind the unique values in an array and then sort

function uniqSort(arr){
  
    let breadcrumbs = {};
    let uniqueArr = [];
    
    for (let i = 0; i < arr.length; i++){
      if(!breadcrumbs[arr[i]]){
        uniqueArr.push(arr[i])
        breadcrumbs[arr[i]] = true
    }};
  
    return uniqueArr.sort((a,b) => a-b)
  }
  
uniqSort([5,5,5,9,1,1])
uniqSort([12,25,55,99,100,100])
uniqSort([2,2,2])
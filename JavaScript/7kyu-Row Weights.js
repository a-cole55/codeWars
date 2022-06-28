// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.



function rowWeights(array){
    //your code here
    let team1 = [];
    let team2 = [];
    for(let i = 0; i < array.length; i++){
      if(i % 2 === 0){
        team1.push(array[i])
      }else{
        team2.push(array[i])
      }
    }
    return [team1.reduce((acc,c) => acc + c, 0), team2.reduce((acc,c) => acc + c, 0)]
  }
  rowWeights([80]) //[80,0]);
  rowWeights([100,50]) //[100,50]);
  rowWeights([50,60,70,80]) //[120,140]);
  rowWeights([13,27,49]) //[62,27]);
  rowWeights([70,58,75,34,91]) //[236,92]);
  rowWeights([29,83,67,53,19,28,96]) //[211,164]);
  rowWeights([0]) //[0,0]);
  rowWeights([100,51,50,100]) //[150,151]);
  rowWeights([39,84,74,18,59,72,35,61]) //[207,235]);
  rowWeights([0,1,0]) //[0,1]);
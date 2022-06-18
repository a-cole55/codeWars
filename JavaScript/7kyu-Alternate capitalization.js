// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

function capitalize(s){
    let arr = [];
    let str1 = "";
    for(let i = 0; i < s.length; i++){
      if(i%2 === 0){
        str1 += s[i].toUpperCase()
      }else{
        str1 += s[i]
      };
    }
    arr.push(str1)
      let str2 = "";
      for(let i = 0; i < s.length; i++){
      if(i%2 != 0){
        str2 += s[i].toUpperCase()
      }else{
        str2 += s[i]
      };
    }
    arr.push(str2)
    console.log(arr)
  };
  capitalize("abcdef") //['AbCdEf', 'aBcDeF']);
  capitalize("codewars") //['CoDeWaRs', 'cOdEwArS']);
  capitalize("abracadabra") //['AbRaCaDaBrA', 'aBrAcAdAbRa']);
  capitalize("codewarriors") //['CoDeWaRrIoRs', 'cOdEwArRiOrS']);
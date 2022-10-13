//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
//P: parameters (string) R: extracted string E: examples P: ????

function domainName(str){
      let newStr = str.replace("http://", "").replace("https://", "").replace("www.","").split(".")
      return newStr[0]
  // }
  }
  domainName("http://github.com/carbonfive/raygun") 
  //   == "github" 
  domainName("http://www.zombie-bites.com") 
    // == "zombie-bites"
  domainName("https://www.cnet.com") 
    // == "cnet
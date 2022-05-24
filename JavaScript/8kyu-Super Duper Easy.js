// Make a function that returns the value multiplied by 50 and 
// increased by 6. If the value entered is a string it should 
// return "Error".

function problem(x){
    //your code here
      return typeof x == "number" ? x * 50 + 6 : "Error"
  }

problem("hello") //"Error");
problem(1) //56);
problem(5) //256);
problem(0) //6);
problem(1.2) //66);
problem(3) //156);
problem("RyanIsCool") //"Error");
problem(-3) //-144);
problem("") //"Error");
problem(0.03) //7.5);
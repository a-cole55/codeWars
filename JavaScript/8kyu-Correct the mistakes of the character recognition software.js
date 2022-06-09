// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function correct(string)
{
	// your code here
  return string.replaceAll("0", "O").replaceAll("5", "S").replaceAll("1", "I")
}

//or

function correct(string)
{
	// your code here
  const regex = /["5"]/g;
  const regex1 = /["1"]/g;
  const regex2 = /["0"]/g;
  return string.replace(regex2,"O").replace(regex,"S").replace(regex1,"I")
}

correct("L0ND0N") //"LONDON");
correct("DUBL1N") //"DUBLIN");
correct("51NGAP0RE") //"SINGAPORE");
correct("BUDAPE5T") //"BUDAPEST");
correct("PAR15") //"PARIS");
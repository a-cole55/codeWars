// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false


function validatePIN (pin) {
  //return true or false
  let regex = /[0-9]/g;
  if (pin.length === 4){
    const matches = pin.match(regex);
    return matches.length === 4
  } else if (pin.length === 6){
    const matches = pin.match(regex);
      return matches.length === 6
  } else {
    return false
  }
}

validatePIN("12") 
// false
validatePIN("12345")
// false
validatePIN("123")
// false
validatePIN("1234567")
// false
validatePIN("-1234")
// false
validatePIN("1.234")
// false
validatePIN("-1.234")
// false
validatePIN("a234")
// false
validatePIN(".234")
// false 
validatePIN("1234")
// true
validatePIN("0000")
// true
validatePIN("1111")
// true
validatePIN("123456")
// true
validatePIN("098765")
// true
validatePIN("000000")
// true
validatePIN("123456")
// true
validatePIN("090909")
// true
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

validatePIN("1"),false, "Wrong output for '1'")
    Test.assertEquals(validatePIN("12"),false, "Wrong output for '12'")
    Test.assertEquals(validatePIN("123"),false, "Wrong output for '123'")
    Test.assertEquals(validatePIN("12345"),false, "Wrong output for '12345'")
    Test.assertEquals(validatePIN("1234567"),false, "Wrong output for '1234567'")
    Test.assertEquals(validatePIN("-1234"),false, "Wrong output for '-1234'")
    Test.assertEquals(validatePIN("1.234"),false, "Wrong output for '1.234'")
    Test.assertEquals(validatePIN("-1.234"),false, "Wrong output for '-1.234'")
    Test.assertEquals(validatePIN("00000000"),false, "Wrong output for '00000000'")
  });
  
  it("should return False for pins which contain characters other than digits", function() {
    Test.assertEquals(validatePIN("a234"),false, "Wrong output for 'a234'")
    Test.assertEquals(validatePIN(".234"),false, "Wrong output for '.234'")
  });
  
  it("should return True for valid pins", function() {
    Test.assertEquals(validatePIN("1234"),true, "Wrong output for '1234'");
    Test.assertEquals(validatePIN("0000"),true, "Wrong output for '0000'");
    Test.assertEquals(validatePIN("1111"),true, "Wrong output for '1111'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("098765"),true, "Wrong output for '098765'");
    Test.assertEquals(validatePIN("000000"),true, "Wrong output for '000000'");
    Test.assertEquals(validatePIN("123456"),true, "Wrong output for '123456'");
    Test.assertEquals(validatePIN("090909"),true, "Wrong output for '090909'");
  });
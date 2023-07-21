// Assignment Code


var generateBtn = document.querySelector("#generate");

function generatePassword(passwordLength) {
  //password string for which the randomizer can display the characters
  var password = "";
  // return statement to specify the value returning into the password variable
  return password;

}

//created a prompt and confirmations to select the criteria for their passwords
var passwordLength = window.prompt("Determine your password length. Minimum of 8 Characters and no more than 120 Characters.")
var upperCase = window.confirm("Press OK to include Uppercase characters?");
var lowerCase = window.confirm("Press OK to include to include Lowercase characters?");
var numbers = window.confirm("Press OK to include to include Numeric characters?");
var specialChar = window.confirm("Press OK to include to include Special characters?");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;


  //created a variable string that contains all the possible combinations that will go into their password
  var Ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYS";
  var Lcase = "abcdefghijklmnopqrstuvwxyz";
  var number = "1234567890";
  var symbol = "~`!@#$%^&*()-_=+[]{}|;:,.<>?/";
  var random = "";

  //created conditional statements verifying the users character choices for their intended password
  if (passwordLength < 8 || passwordLength > 120) {
    alert("Password length must be between 8 and 120 characters")
    return false;
  } if (upperCase === true) {
    random = random + Ucase;
  } if (lowerCase === true)
    random = random + Lcase; {
  } if (numbers === true)
    random = random + number; {
  } if (specialChar === true)
    random = random + symbol; {
  }

  console.log(random);

  //created a for-loop referencing my character values to generate a randomized password based on the users imputted length and password requirements 
  for (var i = 0; i < passwordLength; i++) {
    password += random.charAt(Math.floor(Math.random() * random.length));
  }

  passwordText.value = password;

}


generateBtn.addEventListener("click", writePassword);
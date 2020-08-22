// Assignment Code
var generateBtn = document.querySelector("#generate");
var characters = "abcdefghijklMNOPQRSTUVWXYZ";
var lowerCaseLetters = characters.toLowerCase();
var upperCaseLetters = characters.toUpperCase();
var numaricCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./;:<=>?@[\]^_`{|}~ ";
var useLowerCase;
var useUpperCase;
var useNumericrCharacters;
var useSpecialCharacters;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(){
  var values = "";
  var password = "";
  var numberCharacters = parseInt(prompt("How many characters? Must be between 8-128"));
  var useLowerCase = confirm("Use lowercase letters?");
  var useUpperCase = confirm("Use uppercase letters?");
  var useNumericCharacters = confirm("Use numbers characters?");
  var useSpecialCharacters = confirm("Use special characters?");
  

  if (useLowerCase) {
    values = values.concat(lowerCaseLetters);
    console.log(password);
  }
  
  if (useUpperCase) {
    values = values.concat(upperCaseLetters);
    console.log(password);
  }

  if (useNumericCharacters) {
    values = values.concat(numaricCharacters);
    console.log(password);
  }

  if (useSpecialCharacters) {
    values = values.concat(specialCharacters);
    console.log(password);
  }
  
  var possibleCharactersLength = values.length;
  
  for (var i = 0; i < numberCharacters; i++) {
    var randomNumber = Math.floor(Math.random() * possibleCharactersLength);
    var randomValue = values.charAt(randomNumber);
    password = password.concat(randomValue);
    console.log(password)
}

   return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

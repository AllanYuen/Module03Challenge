// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Declaration of required variables to support the password generator
var pwdLength = null;
var UCLength = null;
var LCLength = null;
var numLength = null;
var symbolLength = null;
var lengthRemain = null;
var pwdCriteria = {
  numericChar: "0123456789".split(""),
  upperCaseChar: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),
  lowerCaseChar: "abcdefghijklmnopqrstuvwxyz".split(""),
  specialChar: "!#$%&()*+,-./:;<=>?@[\]^_`{|}~".split("")
};

// Function for user input to indicate the required password length
function passwordLength() {
  var overallLength = prompt("Please indicate your required password length (between 8 to 128 bytes in length)","Enter a numeric value from 8 to 128");
  var pwdLength = Number(overallLength);
  if (pwdLength >= 8 && pwdLength <= 128) {
    alert("You've entered: " + pwdLength);
    lengthRemain = pwdLength;
  }
    else {
      alert("The length value entered is not within the range of 1 - 128.");
    }
    return;
  }

// Prompt for user input to indicate the number of UPPERCASE characters required in password
function upperCaseLength() {
  var upperLength = prompt("Please indicate your minimum number of required UPPERCASE characters","Enter a number between 0 and " + remainingLength);
  var UCLength = Number(upperLength);
  if (UCLength <= lengthRemain) {
    alert("You've entered: " + UCLength);
    lengthRemain = lengthRemain - UCLength;
  }
    else {
      alert("The length value exceeds the remaining password length availability.");
    }
    return;
  }

// Prompt for user input to indicate the number of lowercase characters required in password
function lowerCaseLength() {
  var lowerLength = prompt("Please indicate your minimum number of required lowercase characters","Enter a number between 0 and " + remainingLength);
  var LCLength = Number(lowerLength);
  if (LCLength <= lengthRemain) {
    alert("You've entered: " + LCLength);
    lengthRemain = lengthRemain - LCLength;
  }
    else {
      alert("The length value exceeds the remaining password length availability.");
    }
    return;
  }

// Prompt for user input to indicate the number of numeric characters required in password
function numericLength() {
  var numberLength = prompt("Please indicate your minimum number of required numeric characters","Enter a number between 0 and " + remainingLength);
  var numLength = Number(numberLength);
  if (numLength <= lengthRemain) {
    alert("You've entered: " + numLength);
    lengthRemain = lengthRemain - numLength;
  }
    else {
      alert("The length value exceeds the remaining password length availability.");
    }
    return;
  }

// Prompt for user input to indicate the number of special characters required in password
function specialCharLength() {
  var specCharLength = prompt("Please indicate your minimum number of required special characters","Enter a number between 0 and " + remainingLength);
  var symbolLength = Number(specCharLength);
  if (symbolLength <= lengthRemain) {
    alert("You've entered: " + symbolLength);
    lengthRemain = lengthRemain - symbolLength;
  }
    else {
      alert("The length value exceeds the remaining password length availability.");
    }
    return;
  }

// Prompt for user input to provide password criteria to use in generating a new password
function userPwdCriteriaPrompt() {
  if (pwdLength === null) {
    passwordLength();
    if(UCLength === null) {
      upperCaseLength()
    }
  }
  else {
    alert("The current password length is set to: "+ lengthRemain);
  } 
  return;
}

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
// userPwdCriteriaPrompt();

userPwdCriteriaPrompt();
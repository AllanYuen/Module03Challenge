// Assignment code here
// Initialize required global variables for the handling of required password criteria
var pwdCriteria = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChars: "!@#$%^&*()_+~`|}{[]\:;?><,./-=",
  pwdMinLength: 8,
  pwdMaxLength: 128
};

console.log(pwdCriteria);

// Get references to the #generate element
// Upon the trigger of the GENERATE PASSWORD button user input prompts to gather password criteria
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Function to generate the password based on the user selected password criteria
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// Configure event listener to call the password generator function
generateBtn.addEventListener("click", writePassword);
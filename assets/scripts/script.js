// Assignment code here

// Initialize required global variables for the handling of required password criteria
var pwdCriteria = {
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  specialChars: "!@#$%^&*()_+~`|}{[]\:;?><,./-=",
  pwdMinLen: 8,
  pwdMaxLen: 128
};

// Defining generatePassword function as referenced by the writePassword function from the starter code
function generatePassword() {

  // 1) Prompt user for secured password criteria
  //  - Password length to be entered between 8 to 128 characters
  var pwdLength = prompt("Enter the required length of your new password (8-128 characters):");

    // Validate the user input for password length
    if (pwdLength < pwdCriteria.pwdMinLen || pwdLength > pwdCriteria.pwdMaxLen) {
      alert("Invalid password length. Please enter a value between 8 and 128 characters.");
      console.log('Selected Password Length Invalid to the Range of 8 to 128 Characters');
      return;
    } else {
      alert(`You have chosen a password length of ${pwdLength} characters.`);
      console.log(`Selected Password Length Set To: ${pwdLength}`);
    }

  //  - Confirm password criteria for the inclusion of character types: lowercase, uppercase, numeric, and/or special characters
  var lCase = confirm("Do you want to include lowercase characters?");
  console.log(`Lower Case Character Criteria: ${lCase}`);
  var uCase = confirm("Do you want to include uppercase characters?");
  console.log(`Upper Case Character Criteria: ${uCase}`);
  var num = confirm("Do you want to include numbers?");
  console.log(`Numeric Character Criteria: ${num}`);
  var sChar = confirm("Do you want to include special characters?");
  console.log(`Special Character Criteria: ${sChar}`);

  // 2) Validate criteria input to ensure at least one character type is selected
  if (!lCase && !uCase && !num && !sChar) {
    alert("At least one character type must be selected.");
    return;
  }

  // Create the character set based on the user selected criteria
  var charSet = "";
  if (lCase) {
    charSet += pwdCriteria.lowerCase;
  }
  if (uCase) {
    charSet += pwdCriteria.upperCase;
  }
  if (num) {
    charSet += pwdCriteria.numbers;
  }
  if (sChar) {
    charSet += pwdCriteria.specialChars;
  }
  console.log(charSet);

  // Randomize the character set to ensure probability of character selection not limited within the sequential construct of char ranges of above selected criteria
  var newCharSet = "";
  for (var i = 0; i < charSet.length; i++) {
    newCharSet += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  console.log(newCharSet);

  // 3) Generate new password based on the user selected criteria
  var newPassword = "";
  for (var i = 0; i < pwdLength; i++) {
    newPassword += newCharSet.charAt(Math.floor(Math.random() * newCharSet.length));
  }

  // 4) Display generated password within an alert or on the page
  return newPassword;
};

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
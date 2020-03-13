// let lowerCaseChars = all lower case characters
var lowerCaseChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

// let upperCaseChars = all upper case characters
var upperCaseChars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
// let numberChars = all numbers 0-9
var numberChars = ["0","1","2","3","4","5","6","7","8","9"]
// let special = all available special characters
var special = ["!","@","#","$","%","^","&","*","(",")","+","=","_","-","^","<"]

// When user clicks generate


// Prompt user for number of characters in password
var passwordLength = prompt("How many characters would you like your password to be?")
// Save the results as a variable called passwordLength

//  Assign each one of the following to variables
//  let useNums =  confirm user wants number
var useNums = confirm("Would you like your password to contain numbers?")
//  let useLCase =  confirm user wants lower case
var useLCase = confirm("Would you like your password to lower case letters?")
//  let useUCase =  confirm user wants upper case
var useUCase = confirm("Would you like your password to contain upper case letters?")
//  let useSpecial =  confirm user wants special characters
var useSpecial = confirm("Would you like your password to contain special characters?")

// IF passwordLength is 7 < and > 129,
if (passwordLength > 7 && passwordLength < 129) {
  
// Check if the user confirmed one of the four options
//  IF(useNums) = true OR (useLcase) = true OR (useUCase) = true OR (useSpecial)
if ((useNums === true) || (useLcase === true) || (useUCase === true) || (useSpecial === true)) {
//  Call generate password
generatePassword();
//  display password
// END IF
}}

// IF password <= 7 or >= 129
if ((passwordLength <= 7) || (passwordLength >=129)) {
  alert("Password length must be between 8 and 128 characters")
}
//  Alert the user that the password needs to be between 8 and 128
// END IF


    //GENERATE PASSWORD
  //let password = an empty string
  var password = ""


// Write three arrays for uppercase, lowercase, numeric, and special characters

// IF useLCase = true
if (useLCase = true) {
  for (var i = 0; i < lowerCaseChars.length; i++) {
    var lowerCaseChoice = lowerCaseChars[Math.floor(Math.random()) * lowerCaseChars.length]
  }

}
// randomly pick a lowercase letter a-z
// add it to password
// END IF

// IF useUCase = true
if (useUCase = true) {
  for (var i = 0; i < upperCaseChars.length; i++) {
    var upperCaseChoice = upperCaseChars[Math.floor(Math.random()) * upperCaseChars.length]
  }
  
}
// randomly pick an uppercase letter a-z
// add it to password
// END IF

// IF useNums = true
if (useNums = true) {
  for (var i = 0; i < numberChars.length; i++) {
    var numberChoice = upperCaseChars[Math.floor(Math.random()) * upperCaseChars.length]
  }
  
}
// randomly pick a number 0-9
// add it to password
// END IF

// IF useSpecial = true
if (useLCase = true) {
  for (var i = 0; i < lowerCaseChars.length; i++) {
    var lowerCaseChoice = lowerCaseChars[Math.floor(Math.random()) * lowerCaseChars.length]
  }
  
}
// randomly pick a special character
// add it to password
// END IF

// Need: a randomizer to select between lowercase, uppercase, numeric, and special characters



function generatePassword() {
  return "";
}

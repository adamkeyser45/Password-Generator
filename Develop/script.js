// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  generatePassword = function() {
       
    var complexity = window.prompt("How long would you like your password to be? Type a number between 8 and 128.");

    if (!complexity) {
      window.alert("You didn't type in a correct response!");
      return generatePassword();
    }
  }

  var password = generatePassword();


  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
  generatePassword = function() {
     
    // Ask for password length(complexity)
    var complexity = window.prompt("How long would you like your password to be? Type a number between 8 and 128.");
      complexity = parseInt(complexity);

      // If complexity is null or "", ask to try again
      if (!complexity) {
        window.alert("You didn't type in a correct response!");
        return generatePassword();
      }
      // If complexity is lower than 8 or higher than 128
      if (complexity < 8 || complexity > 128) {
        window.alert("Your password length must be between 8 and 128. Try again.");
        return generatePassword();
      }
      // If correct length, store it to be used later
      if (8 < complexity < 128) {
        localStorage.setItem("PassLength", complexity);
      }
 
    // Ask for lowercase letters
    var lowerCase = window.confirm("Would you like to use lowercase letters? OK for yes and CANCEL for no.")

      if (lowerCase) {
        localStorage.setItem("lowCase", true);
      } else {
        localStorage.setItem("lowCase", false);
      }

    // Ask for uppercase letters
    var upperCase = window.confirm("Would you like to use uppercase letters? OK for yes and CANCEL for no.")

      if (upperCase) {
        localStorage.setItem("upCase", true);
      } else {
        localStorage.setItem("upCase", false);
      }

    // Ask for numbers
    var numConfirm = window.confirm("Would you like to use numbers? OK for yes and CANCEL for no.")

    if (numConfirm) {
      localStorage.setItem("passNum", true);
    } else {
      localStorage.setItem("passNum", false);
    }

  }
  var password = generatePassword();


  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

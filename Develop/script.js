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
    var lowerCase = window.confirm("Would you like to use lowercase letters? OK for yes and CANCEL for no.");

      if (lowerCase) {
        localStorage.setItem("lowCase", "yes");
      } else {
        localStorage.setItem("lowCase", "no");
      }

    // Ask for uppercase letters
    var upperCase = window.confirm("Would you like to use uppercase letters? OK for yes and CANCEL for no.");

      if (upperCase) {
        localStorage.setItem("upCase", "yes");
      } else {
        localStorage.setItem("upCase", "no");
      }

    // Ask for numbers
    var numConfirm = window.confirm("Would you like to use numbers? OK for yes and CANCEL for no.");

      if (numConfirm) {
        localStorage.setItem("passNum", "yes");
      } else {
        localStorage.setItem("passNum", "no");
      }

    // Ask for special characters
    var charConfirm = window.confirm("Would you like to use special characters? OK for yes and CANCEL for no.");

      if (charConfirm) {
        localStorage.setItem("specChar", "yes");
      } else {
        localStorage.setItem("specChar", "no");
      }


      debugger;
    // Check for at least one choice
    var lowCase = localStorage.getItem("lowCase");
    var upCase = localStorage.getItem("upCase");
    var passNum = localStorage.getItem("passNum");
    var specChar = localStorage.getItem("specChar");

      if ((lowCase === "no") && (upCase === "no") && (passNum === "no") && (specChar === "no")) {
        window.alert("You need to choose at least one type of character for the password! Try again!");
        return generatePassword();
      } else {
        var choiceConfirm = window.confirm("Would you like to proceed with your choices or start over?");
          if (choiceConfirm) {
            window.alert("Hooray!");
          } else {
            return generatePassword();
          }
          

      }

  }
  var password = generatePassword();


  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

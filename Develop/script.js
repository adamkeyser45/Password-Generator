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
      
    // Check for at least one choice
    var lowCase = localStorage.getItem("lowCase");
    var upCase = localStorage.getItem("upCase");
    var passNum = localStorage.getItem("passNum");
    var specChar = localStorage.getItem("specChar");

      if ((lowCase === "no") && (upCase === "no") && (passNum === "no") && (specChar === "no")) {
        window.alert("You need to choose at least one type of character for the password! Try again!");
        return generatePassword();

      // Give user one last chance to start over or create password  
      } else {
        var choiceConfirm = window.confirm("Press OK to proceed with your choices or CANCEL to start over.");
          if (!choiceConfirm) {
            return generatePassword();
          }
      }
    
    // Possible choices for each character
    var passChars = ""
      // If one option is chosen, then make the possible characters
      if ((lowCase === "yes") && (upCase === "no") && (passNum === "no") && (specChar === "no")) {
        passChars = "abcdefghijklmnopqrstuvwxyz"
      }
      else if ((lowCase === "no") && (upCase === "yes") && (passNum === "no") && (specChar === "no")) {
        passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      }
      else if ((lowCase === "no") && (upCase === "no") && (passNum === "yes") && (specChar === "no")) {
        passChars = "1234567890"
      }
      else if ((lowCase === "no") && (upCase === "no") && (passNum === "no") && (specChar === "yes")) {
        passChars = "!@#$%^&*()_+"
      }
      // If two options were chosen
      else if ((lowCase === "yes") && (upCase === "yes") && (passNum === "no") && (specChar === "no")) {
        passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      }
      else if ((lowCase === "no") && (upCase === "yes") && (passNum === "yes") && (specChar === "no")) {
        passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
      }
      else if ((lowCase === "no") && (upCase === "no") && (passNum === "yes") && (specChar === "yes")) {
        passChars = "1234567890!@#$%^&*()_+"
      }
      else if ((lowCase === "yes") && (upCase === "no") && (passNum === "no") && (specChar === "yes")) {
        passChars = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      }
      // If three options were chosen
      else if ((lowCase === "yes") && (upCase === "yes") && (passNum === "yes") && (specChar === "no")) {
        passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
      }
      else if ((lowCase === "no") && (upCase === "yes") && (passNum === "yes") && (specChar === "yes")) {
        passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+"
      }
      else if ((lowCase === "yes") && (upCase === "no") && (passNum === "yes") && (specChar === "yes")) {
        passChars = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"
      }
      else if ((lowCase === "yes") && (upCase === "yes") && (passNum === "no") && (specChar === "yes")) {
        passChars = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+"
      }
      // If all options were chosen
      else {
        passChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+"
      }

    // For loop to create the password
    var finalPass = ""

    for (i = 0; i < localStorage.getItem("PassLength"); i++) {
      finalPass = finalPass + passChars.charAt(Math.floor(Math.random() * Math.floor(passChars.length - 1)));
    }
    return finalPass;
  }

  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

# Week 3 Challenge: Create a Random Password Generator

## Description: 
Add Javascript to a webpage that will generate a random password after giving certain criteria.

## Process:
First, I had to think about how the given code worked, and how it printed the generated password to the webpage. Then I needed a way to ask the user which characters they want to use for their password, and a way to store their data. Using window.prompts and storing the user responses to localStorage, I then had to determine how to generate the password with the user-given criteria. After doing some research of possible methods to create a password, I found a great way to make a password with a given set of characters using a for loop and a variable that contained all of the possible characters. After modifying it to make it accept all of the user's choices that were stored in localStorage, the password is returned at the end of the function, which is then printed to the webpage.

## Challenges:
The first major challenge for this project was getting started. It took a long time to understand the code that was given to us this week, since we haven't had much experience in the lessons with connecting Javascript to HTML. I needed to use the debugger in the Google Chrome Dev Tools to determine what each piece of code did. My second challenge was trying to get the correct error messages to pop-up when a user entered a password length of less than 8 or greater than 128. I needed to look up what logic statements could be put in a if statement's conditions. The final challenge I had was determining a way for the password generator to use the stored user input to create the password. I settled on making a long list of else if statements that would fit every possible combination of choices that a user could do. Then, it would change a variable with the possible outcomes.

## Future Changes:
In the future, I would certainly like to simplify the amount of else if statements. I am sure that there is a simpler way to determine what characters to use to generate the password. 

## Link to Deployed Application
https://adamkeyser45.github.io/mod3challenge/

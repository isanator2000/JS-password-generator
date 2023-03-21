// Let's put our variables here on top
var choices = [];
var characterLength = 8;

var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","?","*","+","/","&","%","$","#","=","_","-","@","(",")","^",];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} 

// Add the generatePassword function
function generatePassword() {

}

// Add function for prompts
function getPrompts (){
  characterLength = parseInt(prompt("How many characters do you want in your password? (8-128 characters)."));
  // The following function should return false and defines what you cannot use in your password 
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  alert("Make sure you're writing a number between 8 - 128. Try again.");
  return false; 
  }
  
  if(confirm("Do you want lowercase letters in your password?")){
    choices = choices.concat(lowercase);
  }
  if(confirm("Do you want uppercase letters in your password?")){
    choices = choices.concat(uppercase);
  }
  if(confirm("Do you want special characters in your password?")){
    choices = choices.concat(specialChar);
  }
  if(confirm("Do you want numbers in your password?")){
    choices = choices.concat(numbers);
  }
  return true;

}

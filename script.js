// Let's put our variables here on top in global scope
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
  // if you input a valid number when the how many characters question showed up and then answered the confirm windows then this will trigger
  var rightPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");

  if (rightPrompts) {
  var finalPassword = generatePassword();
  passwordText.value = finalPassword;
  }

} 

// Add the generatePassword function
function generatePassword() {
  var password = "";
  for(var i = 0; i < characterLength; i++){
    // This chooses a random index from the choices variable and makes sure it's a whole number
    var randomIndex = Math.floor(Math.random() * choices.length)
    password = password + choices[randomIndex];

  }
  return password;
}

// Add function for prompts
function getPrompts (){
  characterLength = parseInt(prompt("How many characters do you want in your password? (8-128 characters)."));
  // The following function should return false and defines what you cannot use in your password 
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
  alert("Make sure you're writing a number between 8 - 128. Try again.");
  return false; 
  }
// These are the confirm windows that show up with the questions about what you want in your password  
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

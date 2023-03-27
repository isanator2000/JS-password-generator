# JS-password-generator

## Description
This is a password generator. It created a unique password with the characteristics the user wants it to have. It does so through prompts and confirm boxes. To get these to work, several functions had to be implemented. One is in charge of the prompts and confirm boxes that will define
what the password will be like, another one is in charge of using the information recieved through the questions to select characters from the variables in global scope that fit the characteristics the user chose, and another one is the one in charge of making sure those values get displayed as the result. 


## Usage

To navigate through this webpage, you first click on the Generate Password button. This will trigger a prompt asking you what you'd like the length of the password to be. After writing a valid number and clicking accept, confirm boxes will appear (one at the time) asking character preferences. You can click "Accept" for yes and "Cancel" for no. After going through all of them, the final password will be shown on the textbox that intially said "Your secure password".

[Password generator](https://isanator2000.github.io/JS-password-generator/)

[Screenshot showing prompt](./images/Firstprompt.png)
[Screenshot showing confirm box](./images/Confirmlowercase.png)
[Screenshot showing confirm box](./images/Confirmuppercase.png)
[Screenshot showing confirm box](./images/Confirmspecialcharacters.png)
[Screenshot showing confirm box](./images/Confirmnumbers.png)
[Screenshot showing final password](./images/Passwordresult.png)


## Notes
I want to credit my tutor Patrick Lake, who guided me through the syntax of the functions and how to make them work properly, especially in the for loops inside the Get prompts function and the Generate password function. 

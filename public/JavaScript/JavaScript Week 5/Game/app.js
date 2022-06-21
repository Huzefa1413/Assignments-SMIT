var lettersArray = [];

var alphabetsArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function randomWords()
{
for(var i = 0; i <= Math.floor(Math.random() * 4) + 2; i++)
{
    lettersArray.push(alphabetsArray[Math.floor(Math.random() * 26)]);
}
console.log(lettersArray);
}
function compareWords(){

var inputFromUser1 = prompt("Enter any word : ");
var inputFromUser2 = prompt("Enter any word : ");
var inputFromUser3 = prompt("Enter any word : ");
var attempt1 = 0;
    for(var i = 0; i < lettersArray.length; i++)
    {
        if(inputFromUser1[i] != lettersArray[i])
        {
            attempt1 = 1;
        }
    }
var attempt2 = 0;
    for(var i = 0; i < lettersArray.length; i++)
    {
        if(inputFromUser2[i] != lettersArray[i])
        {
            attempt2 = 1;
        }
    }
var attempt3 = 0;
    for(var i = 0; i < lettersArray.length; i++)
    {
        if(inputFromUser3[i] != lettersArray[i])
        {
            attempt3 = 1;
        }
    }

if(attempt1 === 1 && attempt2 === 1 && attempt3 === 1)
{
    document.getElementById("display_result").innerText = "Game Over";
}
else
{
    document.getElementById("display_result").innerText = "Succesfull";
}
}
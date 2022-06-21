function addWords(){
    var userInput = document.getElementById("userValue").value;
    var trueVowel = false;
    var normalWords = [];
    var vowelsWords = [];
    var user = userInput.toLowerCase();
    for(var i = 0; i < userInput.length; i++)
    {
        if(user[i] == "a" || user[i] == "e" || user[i] == "i" || user[i] == "e" || user[i] == "u")
        {
            trueVowel = true;
        }
    }
    if(trueVowel === true)
    {
        vowelsWords.push(userInput);
    }
    else
    {
        normalWords.push(userInput);
    }
    for(var j = 0; j < vowelsWords.length; j++)
    {
        document.getElementById("vowelwords").innerHTML += "<li>"+vowelsWords[j]+"</li>";
    }
    for(var k = 0; k < normalWords.length; k++)
    {
        document.getElementById("normalwords").innerHTML += "<li>"+normalWords[k]+"</li>";
    }
}

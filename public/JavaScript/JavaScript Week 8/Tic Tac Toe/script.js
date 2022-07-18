var turnArray = ["X","0","X","0","X","0","X","0","X"]
var turn = 0;
document.getElementById("info").innerText = "Turn Of " +turnArray[turn];

function addText(box)
{
    if(turnArray[turn]==="X")
    {
        document.getElementById(box).style.backgroundColor = "red";
        document.getElementById("turn123").style.backgroundColor = "yellow";
    }
    else
    {
        document.getElementById(box).style.backgroundColor = "yellow";
        document.getElementById("turn123").style.backgroundColor = "red";
    }
    document.getElementById(box).innerText = turnArray[turn];
    turn++;
    document.getElementById(box).removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    checkWin();    
}

function resetGame()
{
    turn = 0;
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    for(var i = 0;i <= 8;i++)
    {
    document.getElementById("box"+i).innerText = "";
    document.getElementById("box"+i).setAttribute("onclick","addText(this.id)");
    document.getElementById("box"+i).style.backgroundColor = "white";
    }
    document.getElementById("turn123").style.backgroundColor = "red";
}

function checkWin(){
    var boxArray = [];
    for(var i = 0; i <= 8; i++)
    {
        boxArray[i] = document.getElementById("box"+i).innerText;
    }
    var gameOver = false;

    if(boxArray[0]===boxArray[1] && boxArray[1]===boxArray[2] && boxArray[0] !== "" && boxArray[1] !== "" && boxArray[2] !== "")
    {
        if(turnArray[turn-1]==="X")
        {
            document.getElementById("turn123").style.backgroundColor = "red";
        }
        else
        {
            document.getElementById("turn123").style.backgroundColor = "yellow";
        }
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        document.getElementById("box0").style.backgroundColor = "green";
        document.getElementById("box1").style.backgroundColor = "green";
        document.getElementById("box2").style.backgroundColor = "green";
        
        gameOver = true;
    }
    else if(boxArray[3]===boxArray[4] && boxArray[4]===boxArray[5] && boxArray[3] !== "" && boxArray[4] !== "" && boxArray[5] !== "")
    {
        if(turnArray[turn-1]==="X")
        {
            document.getElementById("turn123").style.backgroundColor = "red";
        }
        else
        {
            document.getElementById("turn123").style.backgroundColor = "yellow";
        }
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        document.getElementById("box3").style.backgroundColor = "green";
        document.getElementById("box4").style.backgroundColor = "green";
        document.getElementById("box5").style.backgroundColor = "green";

        gameOver = true;
    }
    else if(boxArray[6]===boxArray[7] && boxArray[7]===boxArray[8] && boxArray[6] !== "" && boxArray[7] !== "" && boxArray[8] !== "")
    {
        if(turnArray[turn-1]==="X")
        {
            document.getElementById("turn123").style.backgroundColor = "red";
        }
        else
        {
            document.getElementById("turn123").style.backgroundColor = "yellow";
        }
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        document.getElementById("box6").style.backgroundColor = "green";
        document.getElementById("box7").style.backgroundColor = "green";
        document.getElementById("box8").style.backgroundColor = "green";

        gameOver = true;
    }
    else if(boxArray[0]===boxArray[3] && boxArray[3]===boxArray[6] && boxArray[0] !== "" && boxArray[3] !== "" && boxArray[6] !== "")
    {
        if(turnArray[turn-1]==="X")
        {
            document.getElementById("turn123").style.backgroundColor = "red";
        }
        else
        {
            document.getElementById("turn123").style.backgroundColor = "yellow";
        }
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        document.getElementById("box0").style.backgroundColor = "green";
        document.getElementById("box3").style.backgroundColor = "green";
        document.getElementById("box6").style.backgroundColor = "green";

        gameOver = true;
    }
    else if(boxArray[1]===boxArray[4] && boxArray[4]===boxArray[7] && boxArray[1] !== "" && boxArray[4] !== "" && boxArray[7] !== "")
    {
        if(turnArray[turn-1]==="X")
        {
            document.getElementById("turn123").style.backgroundColor = "red";
        }
        else
        {
            document.getElementById("turn123").style.backgroundColor = "yellow";
        }
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        document.getElementById("box1").style.backgroundColor = "green";
        document.getElementById("box4").style.backgroundColor = "green";
        document.getElementById("box7").style.backgroundColor = "green";

        gameOver = true;
    }
    else if(boxArray[2]===boxArray[5] && boxArray[5]===boxArray[8] && boxArray[2] !== "" && boxArray[5] !== "" && boxArray[8] !== "")
    {
        if(turnArray[turn-1]==="X")
        {
            document.getElementById("turn123").style.backgroundColor = "red";
        }
        else
        {
            document.getElementById("turn123").style.backgroundColor = "yellow";
        }
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        document.getElementById("box2").style.backgroundColor = "green";
        document.getElementById("box5").style.backgroundColor = "green";
        document.getElementById("box8").style.backgroundColor = "green";

        gameOver = true;
    }
    else if(boxArray[0]===boxArray[4] && boxArray[4]===boxArray[8] && boxArray[0] !== "" && boxArray[4] !== "" && boxArray[8] !== "")
    {
        if(turnArray[turn-1]==="X")
        {
            document.getElementById("turn123").style.backgroundColor = "red";
        }
        else
        {
            document.getElementById("turn123").style.backgroundColor = "yellow";
        }
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        document.getElementById("box0").style.backgroundColor = "green";
        document.getElementById("box4").style.backgroundColor = "green";
        document.getElementById("box8").style.backgroundColor = "green";

        gameOver = true;
    }
    else if(boxArray[2]===boxArray[4] && boxArray[4]===boxArray[6] && boxArray[2] !== "" && boxArray[4] !== "" && boxArray[6] !== "")
    {
        if(turnArray[turn-1]==="X")
        {
            document.getElementById("turn123").style.backgroundColor = "red";
        }
        else
        {
            document.getElementById("turn123").style.backgroundColor = "yellow";
        }
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        document.getElementById("box2").style.backgroundColor = "green";
        document.getElementById("box4").style.backgroundColor = "green";
        document.getElementById("box6").style.backgroundColor = "green";

        gameOver = true;
    }
    else if(turn>8)
    {
        document.getElementById("turn123").style.backgroundColor = "skyblue";
        document.getElementById("info").innerText = "Match Draw";
        
        gameOver = true;
    }
    if(gameOver===true)
    {
        for(var i = 0;i <= 8;i++)
        {
            document.getElementById("box"+i).removeAttribute("onclick"); 
        }
    }
}
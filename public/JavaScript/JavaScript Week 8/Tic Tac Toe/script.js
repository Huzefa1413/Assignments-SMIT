var turnArray = ["X","0","X","0","X","0","X","0","X"]
var turn = 0;
document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
function addText0()
{
    document.getElementById("box0").innerText = turnArray[turn];
    turn++;
    document.getElementById("box0").removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
}
function addText1()
{
    document.getElementById("box1").innerText = turnArray[turn];
    turn++;
    document.getElementById("box1").removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    checkWin();
}
function addText2()
{
    document.getElementById("box2").innerText = turnArray[turn];
    turn++;
    document.getElementById("box2").removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    checkWin();
}
function addText3()
{
    document.getElementById("box3").innerText = turnArray[turn];
    turn++;
    document.getElementById("box3").removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    checkWin();
}
function addText4()
{
    document.getElementById("box4").innerText = turnArray[turn];
    turn++;
    document.getElementById("box4").removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    checkWin();
}
function addText5()
{
    document.getElementById("box5").innerText = turnArray[turn];
    turn++;
    document.getElementById("box5").removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    checkWin();
}
function addText6()
{
    document.getElementById("box6").innerText = turnArray[turn];
    turn++;
    document.getElementById("box6").removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    checkWin();
}
function addText7()
{
    document.getElementById("box7").innerText = turnArray[turn];
    turn++;
    document.getElementById("box7").removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    checkWin();
}
function addText8()
{
    document.getElementById("box8").innerText = turnArray[turn];
    turn++;
    document.getElementById("box8").removeAttribute("onclick");
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    checkWin();
}
function resetGame()
{
    turn = 0;
    document.getElementById("info").innerText = "Turn Of " +turnArray[turn];
    document.getElementById("box0").innerText = "";
    document.getElementById("box1").innerText = "";
    document.getElementById("box2").innerText = "";
    document.getElementById("box3").innerText = "";
    document.getElementById("box4").innerText = "";
    document.getElementById("box5").innerText = "";
    document.getElementById("box6").innerText = "";
    document.getElementById("box7").innerText = "";
    document.getElementById("box8").innerText = "";
    document.getElementById("box0").setAttribute("onclick","addText0()");
    document.getElementById("box1").setAttribute("onclick","addText1()");
    document.getElementById("box2").setAttribute("onclick","addText2()");
    document.getElementById("box3").setAttribute("onclick","addText3()");
    document.getElementById("box4").setAttribute("onclick","addText4()");
    document.getElementById("box5").setAttribute("onclick","addText5()");
    document.getElementById("box6").setAttribute("onclick","addText6()");
    document.getElementById("box7").setAttribute("onclick","addText7()");
    document.getElementById("box8").setAttribute("onclick","addText8()");
}
function checkWin(){
    var boxArray = [document.getElementById("box0").innerText,
                    document.getElementById("box1").innerText,
                    document.getElementById("box2").innerText,
                    document.getElementById("box3").innerText,
                    document.getElementById("box4").innerText,
                    document.getElementById("box5").innerText,
                    document.getElementById("box6").innerText,
                    document.getElementById("box7").innerText,
                    document.getElementById("box8").innerText];
    var gameOver = false;
    if(boxArray[0]===boxArray[1] && boxArray[1]===boxArray[2] && boxArray[0] !== "" && boxArray[1] !== "" && boxArray[2] !== "")
    {
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        gameOver = true;
    }
    else if(boxArray[3]===boxArray[4] && boxArray[4]===boxArray[5] && boxArray[3] !== "" && boxArray[4] !== "" && boxArray[5] !== "")
    {
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        gameOver = true;
    }
    else if(boxArray[6]===boxArray[7] && boxArray[7]===boxArray[8] && boxArray[6] !== "" && boxArray[7] !== "" && boxArray[8] !== "")
    {
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        gameOver = true;
    }
    else if(boxArray[0]===boxArray[3] && boxArray[3]===boxArray[6] && boxArray[0] !== "" && boxArray[3] !== "" && boxArray[6] !== "")
    {
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        gameOver = true;
    }
    else if(boxArray[1]===boxArray[4] && boxArray[4]===boxArray[7] && boxArray[1] !== "" && boxArray[4] !== "" && boxArray[7] !== "")
    {
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        gameOver = true;
    }
    else if(boxArray[2]===boxArray[5] && boxArray[5]===boxArray[8] && boxArray[2] !== "" && boxArray[5] !== "" && boxArray[8] !== "")
    {
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        gameOver = true;
    }
    else if(boxArray[0]===boxArray[4] && boxArray[4]===boxArray[8] && boxArray[0] !== "" && boxArray[4] !== "" && boxArray[8] !== "")
    {
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        gameOver = true;
    }
    else if(boxArray[2]===boxArray[4] && boxArray[4]===boxArray[6] && boxArray[2] !== "" && boxArray[4] !== "" && boxArray[6] !== "")
    {
        document.getElementById("info").innerText = turnArray[turn-1] + " Won";
        gameOver = true;
    }
    if(turn>8)
    {
        document.getElementById("info").innerText = "Match Draw";
        gameOver = true;
    }
    if(gameOver===true)
    {
        document.getElementById("box0").removeAttribute("onclick");
        document.getElementById("box1").removeAttribute("onclick");
        document.getElementById("box2").removeAttribute("onclick");
        document.getElementById("box3").removeAttribute("onclick");
        document.getElementById("box4").removeAttribute("onclick");
        document.getElementById("box5").removeAttribute("onclick");
        document.getElementById("box6").removeAttribute("onclick");
        document.getElementById("box7").removeAttribute("onclick");
        document.getElementById("box8").removeAttribute("onclick");
    }
}
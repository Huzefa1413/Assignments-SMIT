var user1score;
var user2score;
function check()
{
    var turn = Math.floor(Math.random()*2);
    var headortail = Math.floor(Math.random()*2);
    var headtailArray = ["head","tail"];
    switch(turn)
    {
        case 0:
            {
                document.getElementById("turn1").innerText = "Turn Of";
                document.getElementById("turn2").innerText = "";
                var selected1 = document.querySelector('input[name=headtail1]:checked').value;
                if(selected1 === headtailArray[headortail])
                {
                    user1score++;
                    document.getElementById('score1').innerText = user1score;
                } 
                break;
            }
        case 1:
            {
                document.getElementById("turn2").innerText = "Turn Of";
                document.getElementById("turn1").innerText = "";
                var selected2 = document.querySelector('input[name=headtail2]:checked').value;
                if(selected2 === headtailArray[headortail])
                {
                    user2score++;
                    document.getElementById('score2').innerText = user2score;
                }
                break;
            }
    }
}
function start()
{
    startCountDown(18000);
    user1score = 0;
    user2score = 0;
    document.getElementById('mainbody').style.display = 'flex';
    document.getElementById('start').style.display = 'none';
    document.getElementById('submit').style.display = 'block';
    document.getElementById('gameover').style.display = 'block';
    document.getElementById('gameoverheading').style.display = 'none';
    document.getElementById('winner').style.display = 'none';
    document.getElementById('timer').style.display = 'block';
    document.getElementById('score1').innerText = user1score;    
    document.getElementById('score2').innerText = user2score;

    var turn = Math.floor(Math.random()*2);
    if(turn === 0)
    {
        document.getElementById("turn1").innerText = "Turn Of";
    }
    else
    {
        document.getElementById("turn2").innerText = "Turn Of";
    }
}
function gameOver()
{
    document.getElementById("mainbody").style.display = 'none';
    document.getElementById("submit").style.display = 'none';
    document.getElementById('gameover').style.display = 'none';
    document.getElementById('gameoverheading').style.display = 'block';
    document.getElementById('start').style.display = 'block';
    document.getElementById('winner').style.display = 'block';
    document.getElementById('timer').style.display = 'none';
    if(user1score>user2score)
    {
        document.getElementById("winner").innerText = "Winner is User 1";
    }
    else if(user1score===user2score)
    {
        document.getElementById("winner").innerText = "Match Draw";
    }
    else
    {
        document.getElementById("winner").innerText = "Winner is User 2";
    }
}

var countdownTimer;
var endTime;

function startCountDown(csecs)   // hundredths of a second
{   endTime = Date.now() + 10*csecs; // endTime in millisecs
    decrement();
    countdownTimer = setInterval(decrement, 10);
}

function decrement()
{   var now, time, mins, secs, csecs, timeStr;
    now = Date.now();
    if( now >= endTime)
    {   time = 0;
        gameOver();
        clearInterval( countdownTimer);
    }
    else
    {   time = Math.floor( (endTime - now)/10); // unit = 1/100 sec
        csecs = time%100;
        time = (time-csecs)/100; // unit = 1 sec
        secs = time % 60;
        mins = (time-secs)/60;   // unit = 60 secs
        timeStr =  
          ( (mins < 10)  ? "0" + mins : mins) + ":" +
          ( (secs < 10)  ? "0" + secs : secs) + ":" +
          ( (csecs < 10) ? "0" + csecs : csecs);
    }
    document.getElementById("output").innerHTML=timeStr;
}
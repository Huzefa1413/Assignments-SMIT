//Q1
var userName = prompt("Please enter your name");
alert("Hi, "+userName);

//Q2
var defaultNumber = 5;
number = prompt("Enter a number to print its multiplication table",defaultNumber);
document.write("<p>Multiplication Table of " + number + "</p>");
document.write("<p>"+ number + " x 1 = " + number*1 + "</p>");
document.write("<p>"+ number + " x 2 = " + number*2 + "</p>");
document.write("<p>"+ number + " x 3 = " + number*3 + "</p>");
document.write("<p>"+ number + " x 4 = " + number*4 + "</p>");
document.write("<p>"+ number + " x 5 = " + number*5 + "</p>");
document.write("<p>"+ number + " x 6 = " + number*6 + "</p>");
document.write("<p>"+ number + " x 7 = " + number*7 + "</p>");
document.write("<p>"+ number + " x 8 = " + number*8 + "</p>");
document.write("<p>"+ number + " x 9 = " + number*9 + "</p>");
document.write("<p>"+ number + " x 10 = " + number * 10 + "</p>");

//Q3
var city = prompt("Please enter your city");
if(city==="Karachi")
{
    alert("Welcome to the city of lights");
}

//Q4
var gender = prompt("Please enter your gender");
if(gender==="male")
{
    alert("Good Morning Sir");
}
else if(gender==="female")
{
    alert("Good Morning Ma'am");
}

//Q5
var trafficColor = prompt("Please enter road traffic signal");
if(trafficColor=="red")
{
    alert("vehicles must stop");
}
else if(trafficColor==="yellow")
{
    alert("vehicles should get ready to move");
}
else if(trafficColor==="green")
{
    alert("vehicles can move now");
}

//Q6
var currentAge = prompt("Enter your current age");
var maxAge = prompt("Enter your estimated maximum age");
if(currentAge<=maxAge)
{
    alert("You are welcome");
}

//Q7
var remainingFuel = prompt("Enter remaining fuel in car (in litres)");
if(remainingFuel < 0.25)
{
    alert("Please refill the fuel in your car");
}

//Q8

//a
var a = 4;
if (++a === 5)
{
    alert("given condition for variable a is true");
}
//b
var b = 82;
if (b++ === 83)
{
    alert("given condition for variable b is true");
}
//c
var c = 12;
if (c++ === 13)
{
    alert("condition 1 is true");
}
if (c === 13)
{
    alert("condition 2 is true");
}
if (++c < 14)
{
    alert("condition 3 is true");
}
if(c === 14)
{
    alert("condition 4 is true");
}
//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost)
{
    alert("The cost equals");
}
//e
if (true)
{
    alert("True");
}
if (false)
{
    alert("False");
}
//f
if("car" < "cat")
{
    alert("car is smaller than cat");
}

//Q9
var sub1 = prompt("Enter marks of Subject 1 out of 100");
var sub2 = prompt("Enter marks of Subject 2 out of 100");
var sub3 = prompt("Enter marks of Subject 3 out of 100");
var totalMarks = 300;
var marksSub1 = parseInt(sub1);
var marksSub2 = parseInt(sub2);
var marksSub3 = parseInt(sub3);
var percentage = (marksSub1 + marksSub2 + marksSub3) / totalMarks * 100;
document.write("<h1>Marks Sheet</h1>");
document.write("<br><p>Total Marks : " +totalMarks+ "</p>");
document.write("<p>Marks Obtained : " +(marksSub1 + marksSub2 + marksSub3)+ "</p>");
document.write("<p>Percentage : " +percentage+ " %</p>");
if(percentage >= 80 && percentage <= 100)
{
    document.write("<p>Grade : A-one</p>");
    document.write("<p>Remarks : Excellent</p>");
}
else if(percentage >= 70 && percentage < 80)
{
    document.write("<p>Grade : A</p>");
    document.write("<p>Remarks : Good</p>");
}
else if(percentage >= 60 && percentage < 70)
{
    document.write("<p>Grade : B</p>");
    document.write("<p>Remarks : You need to improve</p>");
}
else if(percentage < 60 && percentage >= 0)
{
    document.write("<p>Grade : Fail</p>");
    document.write("<p>Remarks : Sorry</p>");
}
else
{
    document.write("<p>Invalid Marks Entered</p>");
}

//Q10
var nameItem1 = prompt("Enter Name of Item 1");
var pOI1 = prompt("Enter Price of "+nameItem1);
var qOI1 = prompt("Enter Ordered Quantity of "+nameItem1);

var nameItem2 = prompt("Enter Name of Item 2");
var pOI2 = prompt("Enter Price of "+nameItem2);
var qOfI2 = prompt("Enter Ordered Quantity of "+nameItem2);

var sC = prompt("Enter Shipping Charges");
 
var priceOfItem1 = parseInt(pOI1);
var qtyOfItem1 = parseInt(qOI1);

var priceOfItem2 = parseInt(pOI2);
var qtyOfItem2 = parseInt(qOfI2);

var shippingCharges = parseInt(sC);

var totalCost = (priceOfItem1 * qtyOfItem1) + (priceOfItem2 * qtyOfItem2) + shippingCharges;

document.write("<h1>Shopping Cart</h1><br>");
document.write("<p>Price of " + nameItem1 + " is " + priceOfItem1 + "</p>");
document.write("<p>Quantity of " + nameItem1 + " is " + qtyOfItem1 + "</p>");
document.write("<p>Price of " + nameItem2 + " is " + priceOfItem2 + "</p>");
document.write("<p>Quantity of " + nameItem2 + " is " + qtyOfItem2 + "</p>");
document.write("<p>Shipping Charges " + shippingCharges + "</p>");
document.write("<p>Total Cost of your order is " + totalCost + " PKR</p>");
if(totalCost>2000)
{
    totalCost -= (totalCost / 100 * 10);
    document.write("<p>Discounted price is " + totalCost + " PKR</p>");
}

//Q11
var secretNum = 2;
var secretNumDecrement = secretNum - 1;
var secretNumIncrement = secretNum + 1;
var g = prompt("Guess the Secret Number (1 - 10)");
var guess = parseInt(g);
if(guess === secretNum)
{
    alert("Bingo! Correct answer");
}
else if(guess === secretNumDecrement || guess === secretNumIncrement)
{
    alert("Close enough to the correct answer");
}

//Q12
var n = prompt("Enter a number to check if that number is divisble by 3");
var num = parseInt(n);
if(num % 3 === 0)
{
    alert("Number is divisible by 3");
}
else
{
    alert("Number is not divisible by 3");
}

//Q13
var nameOfTeam1 = prompt("Enter name of 1st Team");
var s1 = prompt("Enter score of "+nameOfTeam1);
var nameOfTeam2 = prompt("Enter name of 2nd Team");
var s2 = prompt("Enter score of "+nameOfTeam2);
var scoreOfTeam1 = parseInt(s1);
var scoreOfTeam2 = parseInt(s2);
if(scoreOfTeam1 > scoreOfTeam2)
{
    alert(nameOfTeam1 + " have won the game");
}
else if(scoreOfTeam2 > scoreOfTeam1)
{
    alert(nameOfTeam2 + " have won the game");
}
else if(scoreOfTeam1 === scoreOfTeam2)
{
    alert("Game has tied");
}

//Q14
var one = "Pakistan";
var two = 92;
var three = true;
alert(one + " is a " + typeof(one) );
alert(two + " is a " + typeof(two) );
alert(three + " is a " + typeof(three) );

//Q15
var n = prompt("Enter a number to check whether it is even or odd");
var num = parseInt(n);
if(num % 2 === 0)
{
    alert("The number you entered is even");
}
else
{
    alert("The number you entered is odd");
}

//Q16
var temp = prompt("Enter your current city temperature");
var temperature = parseInt(temp);
if(temp > 40)
{
    alert("It's too hot outside");
}
else if(temp > 30)
{
    alert("The weather today is normal");
}
else if(temp > 20)
{
    alert("Today's weather is cool");
}
else if(temp > 10)
{
    alert("Omg! Today's weather is so cool");
}

//Q17
var n1 = prompt("Enter first number");
var n2 = prompt("Enter second number");
var op = prompt("Enter operation (+ , - ,* ,/, %)");
var num1 = parseInt(n1);
var num2 = parseInt(n2);
if(op === "+")
{
    alert(num1 + " + " + num2 + " is " + (num1 + num2));
}
else if(op === "-")
{
    alert(num1 + " - " + num2 + " is " + (num1 - num2));
}
else if(op === "*")
{
    alert(num1 + " * " + num2 + " is " + (num1 * num2));
}
else if(op === "/")
{
    alert(num1 + " / " + num2 + " is " + (num1 / num2));
}
else if(op === "%")
{
    alert(num1 + " % " + num2 + " is " + (num1 % num2));
}
else
{
    alert("Invalid operation entered");
}

//Q18
var day = prompt("Enter current day");
if(day === "monday" || day === "tuesday" || day === "wednesday" || day === "thursday" || day === "friday")
{
    alert("It's a week day");
}
else if(day === "saturday" || day === "sunday")
{
    alert("YAY! It's a holiday");
}

//Q19
var score = prompt("Enter your score");
var userscore = parseInt(score);
if(userscore > 50)
{
    alert("You are passed");
}
else
{
    alert("Try Again");
}

//Q20
var n1 = prompt("Enter first number");
var n2 = prompt("Enter second number");
var num1 = parseInt(n1);
var num2 = parseInt(n2);
if(num1 > num2)
{
    alert("The greater number of " + num1 + " and " + num2 + " is " +num1);
}
else if(num1 < num2)
{
    alert("The greater number of " + num1 + " and " + num2 + " is " +num2);
}
else if(num1 === num2)
{
    alert("Both numbers are equal");
}

//Q21
var defaultCode = "en";
var code = prompt("Enter language code (en,spn,fr)",defaultCode);
if(code === "en")
{
    alert("Hello World");
}
else if(code === "spn")
{
    alert("Hola Mundo");
}
else if(code === "fr")
{
    alert("Bonjour le monde");
}

//Q22
var n = prompt("Enter a number to check whether it is positive or negative");
var num = parseInt(n);
if(num > 0)
{
    alert("The number you entered is positive");
}
else
{
    alert("The number you entered is negative");
}

//Q23
var n = prompt("Please Enter a number");
var noun = prompt("Please Enter a noun");
var num = parseInt(n);
if(num === 1)
{
    alert(num + " " + noun);
}
else
{
    alert(num + " " + noun + "s");
}
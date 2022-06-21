//Q1
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

//Q2
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

//Q3
var a = prompt("Enter your age");
var age = parseInt(a);
if(age > 18)
{
    alert("Old Enough");
}
else
{
    alert("Too Young");
}

//Q4
var userName = prompt("Please enter your name");
var myName = "Huzefa"
if(userName === myName)
{
    alert("Hi, "+userName);
}

//Q5
var n = prompt("Enter a number to check if that number is divisble by 3");
var num = parseInt(n);
var result = num % 3;
switch(result)
{
    case 0:
    {
        alert("Number is divisible by 3");
        break;
    }
    default:
    {
        alert("Number is not divisible by 3");   
    }   
}

//Q6
var character = prompt("Enter a character");
if(character >=0 && character <= 9)
{
    alert("This input is a number");
} 
else if(character.charCodeAt(0) >= 65 && character.charCodeAt(0) <= 90)
{
    alert("This input is an uppercase character");
}
else if(character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122)
{
    alert("This input is an lowercase character");
}

//Q7
var n1 = prompt("Enter first number");
var n2 = prompt("Enter second number");
var op = prompt("Enter operation (+ , - ,* ,/, %)");
var num1 = parseInt(n1);
var num2 = parseInt(n2);
switch(op)
{
    case "+":
    {
        alert(num1 + " + " + num2 + " is " + (num1 + num2));
        break;
    }
    case "-":
    {
        alert(num1 + " - " + num2 + " is " + (num1 - num2));
        break;
    }
    case "*":
    {
        alert(num1 + " * " + num2 + " is " + (num1 * num2));
        break;
    }
    case "/":
    {
        alert(num1 + " / " + num2 + " is " + (num1 / num2));
        break;
    }
    case "%":
    {
        alert(num1 + " % " + num2 + " is " + (num1 % num2));
        break;
    }
    default:
    {
        alert("Invalid operation entered");   
    }   
}

//Q8
var t = prompt("Enter your current time (in 24 hours format like hrmn)")
var time = parseInt(t);
if(time > 0000 && time < 1200)
{
    alert("Good Morning");
}
else if(time >= 1200 && time < 1700)
{
    alert("Good Afternoon");
}
else if(time >= 1700 && time < 2100)
{
    alert("Good Evening");
}
else if(time >= 2100 && time <= 2359)
{
    alert("Good Night");
}

//Q9
var year = prompt('Enter your year to check if it is a leap year or not (YYYY)');
if (year % 400 == 0)
{
    alert("It is a leap year");
}
else if (year % 100 == 0)
{
    alert("It is not a leap year");
}        
else if (year % 4 == 0)
{
    alert("It is a leap year");
}
else 
{
    alert("It is not a leap year");
}

//Q10
var correctPass = "huzefa";
password = prompt("Enter Password","enter your password here");
if(password === "enter your password here")
{
    alert("Please Enter your password");
}
else if(password === correctPass)
{
    alert("Correct! The password you enter matches the original password");
}
else if(password != correctPass)
{
    alert("Incorrect Password");
}

//Q11
var firstName = "Ali";
if (firstName === "Fahad") 
{
    document.write("Hello Fahad!");
}
else
{
    document.write("You are not Fahad");
}

//Q12
var greeting;
var hour = 13;
if (hour < 18)
{
    greeting = "Good day";
} 
else
{
    greeting = "Good evening";
} 
alert(greeting);

//Q13
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

//Q14
var n = prompt("Enter a number to check whether it is positive or negative");
var num = parseInt(n);
if(num > 0)
{
    alert("The number you entered is positive");
}
else if(num < 0)
{
    alert("The number you entered is negative");
}
else
{
    alert("The number you entered is zero");
}

//Q15
var hr = prompt("Enter your current hour in 24 hours format")
var hour = parseInt(hr);
if(hour >= 6 && hour <= 9)
{
    alert("Breakfast is served");
}
else if(hour >= 11 && hour <= 13)
{
    alert("Time for lunch");
}
else if(hour >= 17 && hour <= 20)
{
    alert("It's dinner time");
}
else
{
    alert("Sorry, you'll have to wait, or go get a snack");
}

//Q16
var randomvalue = true;
alert("The type of the value stored in variable is " + typeof(randomvalue));

//Q17
var singleChar = prompt("Enter a character to whether it is vowel or not");
var vowel;
if(singleChar === "a" || singleChar === "e" || singleChar === "i" || singleChar === "o" || singleChar === "u")
{
    vowel = true;
}
else
{
    vowel = false;
}

//Q18
if(10 != 8)
{
    alert("true");
}

//Q19
var m = prompt("Enter month");
var month = parseInt(m);
switch(month)
{
    case 1:
    {
        alert("January");
        break;
    }
    case 2:
    {
        alert("February");
        break;
    }
    case 3:
    {
        alert("March");
        break;
    }
    case 4:
    {
        alert("April");
        break;
    }
    case 5:
    {
        alert("May");
        break;
    }
    case 6:
    {
        alert("June");
        break;
    }
    case 7:
    {
        alert("July");
        break;
    }
    case 8:
    {
        alert("August");
        break;
    }
    case 9:
    {
        alert("September");
        break;
    }
    case 10:
    {
        alert("October");
        break;
    }
    case 11:
    {
        alert("November");
        break;
    }
    case 12:
    {
        alert("December");
        break;
    }
    default:
    {
        alert("Invalid Month");
        break;
    }
}

//Q20
var a = prompt("Enter your age");
var age = parseInt(a);
var votable = (a < 18) ? "Too young" : "Old Enough";
alert(votable);
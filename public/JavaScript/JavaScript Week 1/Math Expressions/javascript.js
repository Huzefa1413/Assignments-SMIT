//Q1
var num1 = 30;
var num2 = 3;
var result = num1+num2;
alert("Sum of " + num1 + " and " + num2 + " is " + result);

//Q2
result = num1-num2;
alert("Result of Subtracting " + num1 + " from " + num2 + " is " + result);

result = num1*num2;
alert("Result of Multiplying " + num1 + " and " + num2 + " is " + result);

result = num1/num2;
alert("Result of Dividing " + num1 + " by " + num2 + " is " + result);

result = num1%num2;
alert("Remainder of Dividing " + num1 + " by " + num2 + " is " + result);

//Q3
var myVariable;
document.write("<p>Value after variable declaration is " +myVariable+ "</p>");
myVariable = 21;
document.write("<p>Initial Value: " +myVariable+ "</p>");
myVariable++;
document.write("<p>Value after increment is " +myVariable+ "</p>");
myVariable = myVariable + 7;
document.write("<p>Value after addition is " +myVariable+ "</p>");
myVariable--;
document.write("<p>Value after decrement is " +myVariable+ "</p>");
myVariable = myVariable % 3;
document.write("<p>The remainder is " +myVariable+ "</p>");

//Q4
var costOfTicket = 600;
var numOfTicket = 5;
var totalCost = costOfTicket * numOfTicket;
document.write("<br><br><p>Total cost to buy " + numOfTicket + " tickets to a movie is " + totalCost + " PKR </p>");

//Q5
var number = 4;
document.write("<br><br><p>"+ number + " x 1 = " + number*1 + "</p>");
document.write("<p>"+ number + " x 2 = " + number*2 + "</p>");
document.write("<p>"+ number + " x 3 = " + number*3 + "</p>");
document.write("<p>"+ number + " x 4 = " + number*4 + "</p>");
document.write("<p>"+ number + " x 5 = " + number*5 + "</p>");
document.write("<p>"+ number + " x 6 = " + number*6 + "</p>");
document.write("<p>"+ number + " x 7 = " + number*7 + "</p>");
document.write("<p>"+ number + " x 8 = " + number*8 + "</p>");
document.write("<p>"+ number + " x 9 = " + number*9 + "</p>");
document.write("<p>"+ number + " x 10 = " + number * 10 + "</p>");

//Q6
var celsius = 12;
var farenheit = 68;
var convertedCelsius = (farenheit - 32) * 5 / 9;
var convertedFarenheit = (celsius * 9 / 5) + 32;
document.write("<br><br></p>" + celsius + " C is " + convertedFarenheit + " F</p>");
document.write("</p>" + farenheit + " F is " + convertedCelsius + " C</p>");

//Q7
var priceOfItem1 = 560;
var priceOfItem2 = 200;
var qtyOfItem1 = 2;
var qtyOfItem2 = 5;
var shippingCharges = 150;
var totalCost = (priceOfItem1 * qtyOfItem1) + (priceOfItem2 * qtyOfItem2) + shippingCharges;
document.write("<br><br><h1>Shopping Cart</h1><br>");
document.write("<p>Price of Item 1 is " + priceOfItem1 + "</p>");
document.write("<p>Quantity of Item 1 is " + qtyOfItem1 + "</p>");
document.write("<p>Price of Item 2 is " + priceOfItem2 + "</p>");
document.write("<p>Quantity of Item 2 is " + qtyOfItem2 + "</p>");
document.write("<p>Shipping Charges " + shippingCharges + "</p>");
document.write("<p>Total Cost of your order is " + totalCost + " PKR</p>");

//Q8
var totalMarks = 1200;
var marksObtained = 900;
var percentage =  marksObtained / totalMarks * 100;
document.write("<br><br><h1>Marks Sheet</h1><br>");
document.write("<p>Total Marks : " + totalMarks + "</p>");
document.write("<p>Marks Obtained : " + marksObtained + "</p>");
document.write("<p>Percentage : " + percentage + " %</p>");

//Q9
var dollars = 10;
var riyals = 25;
var rupees = dollars * 104 + riyals * 28;
document.write("<br><br><h1>Currency in PKR</h1><br>");
document.write("<p>Total currency in PKR : " + rupees + "</p>");

//Q10
var number = 21;
number =  ((number + 5) * 10) / 2;
alert(number);

//Q11
var currentYear = 2015;
var birthYear = 1992;
var age1 = currentYear - birthYear;
var age2 = currentYear - birthYear + 1;
document.write("<br><br><h1>Age Calculator</h1><br>");
document.write("<p>Current Year : " + currentYear + "</p>");
document.write("<p>Birth Year : " + birthYear + "</p>");
document.write("<p>They are either " + age1 + " or " + age2 + " years old</p>");

//Q12
var radius = 12;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * (radius * radius);
document.write("<br><br><h1>The Geometrizer</h1><br>");
document.write("<p>Radius of circle : " + radius + "</p>");
document.write("<p>The circumference is : " + circumference + "</p>");
document.write("<p>The area is : " + area + "</p>");

//Q13
var a = 10;
document.write("<br><br><p>Result:</p>");
document.write("<p>The value of a is: " +a+ "</p>")
document.write(".......................................");
document.write("<p>The value of ++a is: " +(++a)+ "</p>")
document.write("<p>Now the value of a is: " +a+ "</p>")
document.write("<br><p>The value of a++ is: " +(a++)+ "</p>")
document.write("<p>Now the value of a is: " +a+ "</p>")
document.write("<br><p>The value of --a is: " +(--a)+ "</p>")
document.write("<p>Now the value of a is: " +a+ "</p>")
document.write("<br><p>The value of a-- is: " +(a--)+ "</p>")
document.write("<p>Now the value of a is: " +a+ "</p>")

//Q14
var a = 2;
var b = 1;
document.write("<br><br><p>a is " +a+ "</p>");
document.write("<p>b is " +b+ "</p>");
var result = --a  - --b + ++b + b--;
//result = --a = 1
//result = --a - --b = 1
//result = --a - --b + ++b = 2
//result = --a - --b + ++b + b-- = 3  
document.write("<p>result is " +result+ "</p>");

//Q15
var favSnack = "Oreo Biscuit";
var currentAge = 15;
var maxAge = 85;
var qtyPerDay = 2;
var totalSnacks = (maxAge - currentAge) * 365 * qtyPerDay;
document.write("<br><br><h1>The LifeTime Supply Calculator</h1><br>");
document.write("<p>Favourite Snack: " +favSnack+ "</p>");
document.write("<p>Current Age: " +currentAge+ "</p>");
document.write("<p>Estimated Maximum Age: " +maxAge+ "</p>");
document.write("<p>Amount of snacks per day: " +qtyPerDay+ "</p>");
document.write("<br><p>You will need " +totalSnacks+ " " +favSnack+ " to last you until you ripe old age of "+maxAge+"</p>");
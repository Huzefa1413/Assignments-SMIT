//q1

for(var i = 0 ; i < 5; i++)
{
    document.write("Hello World <br>");
}

//q2

for(var i = 1; i <= 10; i++)
{
    document.write(i+"<br>");
}

//q3

var number = prompt("Enter Number to Print it's Multiplication Table");
var length = prompt("Enter length of Multiplication Table");
document.write("Multiplication table of " + number + "<br>");
document.write("Length " + length + "<br>");
for(var i = 1; i <= length; i++)
{
    document.write(number + " x " + i + " = " + number*i + "<br>");
}

//q4

var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
for(var i = 0; i < A.length; i++)
{
    document.write(A[i] + "<br>");
}

//q5

var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for(var i = 0; i < fruits.length; i++)
{
    document.write(fruits[i] + "<br>");
}
for(var i = 0; i < fruits.length; i++)
{
    document.write("Element at index " + i + " is " + fruits[i] + "<br>");
}

//q6

var array = [];
var number = prompt("Enter number of items");
var n = Number(number);
document.write('Number of items : ' + number);
document.write("<br>Items: <br><br>");
for(var i = 0; i < n; i++)
{
    array[i] = (prompt("Enter value of index " + i));
    document.write(array[i] + "<br>");
}

//q7

document.write("<br>Counting:<br>")
for(var i = 1; i <= 15; i++)
{
    document.write(i+", ");
}
document.write("<br>Reverse Counting:<br>")
for(var i = 10; i >= 1; i--)
{
    document.write(i+", ");
}
document.write("<br>Even:<br>")
for(var i = 0; i <= 20; i+=2)
{
    document.write(i+", ");
}
document.write("<br>Odd:<br>")
for(var i = 1; i <= 19; i+=2)
{
    document.write(i+", ");
}
document.write("<br>Series:<br>")
for(var i = 2; i <= 20; i+=2)
{
    document.write(i+"k, ");
}

//q8

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC Bakery. What do you want to order sir / ma'am");
var found = false;
for(var i = 0; i < A.length; i++)
{
    if(A[i] === search)
    {
        document.write("<br>"+search+" is <b>available</b> at index "+i+" in our bakery<br>");
        found = true;
    }
}
if(found === false)
{
    document.write("<br>We are sorry. " +search+ " is <b>not available</b> in our bakery");
}

//q9

var A = [24, 53, 78, 91, 12];
var largest = A[0];
document.write("Array Items: ");
for(var i = 0; i < (A.length - 1); i++)
{
    document.write(A[i]+",");
    if(A[i]<A[i+1])
    {
        largest = A[i+1];
    }
}
document.write(A[A.length-1]);
document.write("<br>The Largest Number is "+largest+"<br>");

//q10

var A = [24, 53, 78, 91, 12];
var smallest = A[0];
document.write("Array Items: ");
for(var i = 0; i < (A.length - 1); i++)
{
    document.write(A[i]+",");
    if(A[i]>A[i+1])
    {
        smallest = A[i+1];
    }
}
document.write(A[A.length-1]);
document.write("<br>The Smallest Number is "+smallest+"<br>");

// q11

var A = [24, 53, 78, 91, 12];
var largest = A[0];
var smallest = A[0];
document.write("Array Items: ");
for(var i = 0; i < (A.length - 1); i++)
{
    document.write(A[i]+",");
    if(A[i]<A[i+1])
    {
        largest = A[i+1];
    }
    if(A[i]>A[i+1])
    {
        smallest = A[i+1];
    }
}
document.write(A[A.length-1]);
document.write("<br>The Largest Number is "+largest);
document.write("<br>The Smallest Number is "+smallest+"<br>");

//q12

for(var i = 5; i <= 100; i+=5)
{
    document.write(i+", ");
}

//Q13

document.write(" <br>Question 13: - <br><br>")
var students = ["Ali", "Sami", "Taha", "Inam"];
var scores = [58, 73, 89, 90];

document.write("<table border='1'><tr><th>Students</th><th>Scores</th>");
for (var i = 0; i < students.length; i++) {
    document.write("<tr><td>" + students[i] + "</td><td>" + scores[i] + "</td></tr>");
}
document.write("</table>")

// Q14

document.write(" <br>Question 14: - <br><br>")
var scores = [12,45,3,22,34,50];
var stopscore = prompt("Enter value to stop at")
for (var i = 0; i < scores.length; i++) 
{
    document.write(scores[i]+",")
    if (stopscore == scores[i])
    {
        break;
    }
}

//Q15

document.write(" <br>Question 15: - <br><br>")
A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < A.length; j++) {
        document.write(A[i][j] + " ")
    }
    document.write("<br>")
}

//Q16

document.write(" <br>Question 16 :- <br><br>")
var n = prompt("enter number:- ")
for (var i = n; i > 0; i -= 0.5) {
    document.write([i] + " , ");
}

//Q17

document.write(" <br>Question 17 :- <br><br>")
var n = prompt("enter end number: -")
for (var i = 0; i <= n; i++) {
    if (i % 2 === 0) {
        document.write(i + " is even")
    }
    else {
        document.write(i + " is odd")
    }
    document.write(" <br>")
}

//Q18

document.write(" <br>Question 18 :- <br><br>")
var product = 1;
for (var i = 1; i < 8; i += 2) 
{
    product = product * i;
}
document.write("the product = " + product);

//Q19

document.write(" <br>Question 19 :- <br><br>")
for (var i = 7; i > 0; i--) {
    for (var j = i; j > 0; j--) {
        document.write("*")
    }
    document.write("<br>");
}

//Q20

document.write(" <br>Question 20(a) :- <br><br>")
for (var i = 0; i < 5; i++) {
    for (var j = 0; j < 5; j++) {
        document.write("*")
    }
    document.write("<br>");
}

document.write(" <br>Question 20(b) :- <br><br>")
for (var i = 0; i < 5; i++) {
    for (var j = 0; j <= i; j++) {
        document.write("*")
    }
    document.write("<br>");
}

document.write(" <br>Question 20(c) :- <br><br>")
for (var i = 7; i > 0; i--) {
    for (var j = i; j > 0; j--) {
        document.write("*")
    }
    document.write("<br>");
}
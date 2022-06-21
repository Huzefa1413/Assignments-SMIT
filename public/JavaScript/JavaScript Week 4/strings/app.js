//Q1
document.write("<br> ");
document.write("Q1<br>");
var fName=prompt("Enter First name: -");
var lName=prompt("Enter Last name: -");
var fullname = fName+" "+lName;
document.write("Your Fullname is ",fullname);

// Q2
document.write("<br> ");
document.write("Q2<br>");
var mobile=prompt("Enter Your Favorite Mobile Name: -");
document.write("Your Favorite Mobile : -  " +mobile);
document.write("<br> "+"Length of String "+mobile.length);

//Q3
document.write("<br> ");
document.write("Q3<br>");
var mobile="Pakistani";
document.write("Index of n"+mobile.indexOf("n"));

//Q4
document.write("<br> ");
document.write("Q4<br>");
var mobile="Hello World";
document.write(" last Index of l : -  "+mobile.lastIndexOf("l"));

//Q5
document.write("<br> ");
document.write("Q5<br>");
var mobile="Hello World";
document.write(" At Index  3 : -  "+mobile.charAt(3));

//Q6
document.write("<br> ");
document.write("Q6<br>");
var fName=prompt("Enter First name: -");
var lName=prompt("Enter Last name: -");
var fullName = fName.concat(lName);
document.write("Your Fullname is " +fullName);

//Q7
document.write("<br> ");
document.write("Q7<br>");
var cityName="Hyderabad";
var newName=cityName.replace("Hyder","Islam");
document.write("Old City name: - " +cityName);
document.write("<br>New City name: - " +newName);

// //Q8
document.write("<br> ");
document.write("Q8<br>");
var cityName="Ali and Sami are best friends. They play cricket and football together.";
var newName=cityName.replace(/and/g, "&")
document.write("Old City name: - " +cityName);
document.write("<br>New City name: - " +newName);

//Q9
document.write("<br> ");
document.write("Q9<br>");
var s= "472";
var num=Number(s);
document.write("String : - " +s);
document.write("<br>Number: - " +num);

// Q10
document.write("<br> ");
document.write("Q10<br>");
var inputUrl = prompt("Please enter url in following format (www.facebook.com/www.yahoo.com )");
var indNum = inputUrl.indexOf(".");
var domain = inputUrl.slice(indNum + 1);
document.write("URL: - " +inputUrl);
document.write("<br>Domain: - " +domain);

//Q11
document.write("<br> ");
document.write("Q10<br>");
var n ="peanuts";
var m= n.toUpperCase();
document.write("lowercase: - " +n);
document.write("<br>Uppercase: - " +m);

//Q12
document.write("<br> ");
document.write("Q12<br>");
var n ="ZONG 4G";
var m= n.toLowerCase();
document.write("Uppercase: - " +n);
document.write("<br>lowercase: - " +m);

//Q13
document.write("<br> ");
document.write("Q13<br>");
var input= prompt("Enter statement in Lowercase: - ");
var upper = input.charAt(0).toUpperCase() + input.slice(1)
document.write("Input String : - " +input);
document.write("<br>Uppercase string: - " +upper);

//Q14
document.write("<br> ");
document.write("Q14<br>");
var num2 = 35.36;
var numToStr = String(num2);
var indexDot = numToStr.indexOf(".");
numToStr = numToStr.slice(0, indexDot) + numToStr.slice(indexDot + 1);
document.write("number : - " +num2);
document.write("<br>string: - " +numToStr);

//Q15
document.write("<br> ");
document.write("Q15<br>");
var a ="3";
var b ="3";
document.write(" x= a + b ");
document.write("<br>x = "+ a + b);

//Q16
document.write("<br> ");
document.write("Q16<br>");
var a ="3";
var b ="3";
document.write(" x= a - b ");
document.write("<br>x = "+ (a - b));

//Q17
document.write("<br> ");
document.write("Q17<br>");
var input = prompt("Enter your name : ");
for(var i = 0; i < input.length; i++)
{
    if(input.charCodeAt(i) =="33" || input.charCodeAt(i) =="44" || input.charCodeAt(i) =="46" || input.charCodeAt(i) =="64")
    {
        alert("Enter valid username");
    }
}

//Q18
document.write("<br> ");
document.write("Q18<br>");
A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
for (var i = 0; i < A.length; i++) {
    document.write(A[i] + "   ");
}
var find = prompt("enter item to be found");
var look = find.toLowerCase();
var notfound = false;
document.write("<br>");
for (var i = 0; i < A.length; i++) {
    if (look === A[i]) {
        document.write(A[i] + "  availabe at index  " + i);
        notfound = true;
    }
}
document.write("<br>");
if (notfound === false) {
    document.write("not found ");
}
document.write("<br>");

//Q19
document.write("<br> ");
document.write("Q19<br>");
var strComp1 = prompt("Enter first string to compare");
var strComp2 = prompt("Enter second string to compare");
var compResult = strComp1.localeCompare(strComp2);

if (compResult === 1) {
    document.write(strComp1 + " is greater than " + strComp2 );

}
else if (compResult === -1) {
    document.write(strComp1 + " is less than " + strComp2 );
}
else {
    document.write(strComp1 + " is equal to " + strComp2 );;
}

//Q20
document.write("<br> ");
document.write("Q20<br>");
var password = prompt("Enter a password : ");
if(password.length <= 6)
{
    alert("Enter valid password");
}
if(password.charCodeAt(0) >= "48" && password.charCodeAt(0) <= "57")
{
    alert("Enter valid password");
}
for(var i = 1; i < password.length; i++)
{
    if(password.charCodeAt(0) >= "48" && password.charCodeAt(0) <= "57" || password.charCodeAt(0) >= "65" && password.charCodeAt(0) <= "90" || password.charCodeAt(0) >= "97" && password.charCodeAt(0) <= "122")
    {}
    else
    {
        alert("Enter valid password");
    }
}

//Q21
document.write("<br> ");
document.write("Q21<br>");
var name1 ="University Of Karachi"
var split = name1.split('');
for(var i=0;i<name1.length;i++)
{
    document.write(name1[i] +"<br>")
}

// Q22
document.write("<br> ");
document.write("Q22<br>");
var p= "Pakistan";

var last= p.charAt(p.length-1);
document.write(last)

//Q23
document.write("<br> ");
document.write("Q23<br>");
var sen= "The quick brown fox jumps over the lazydog";

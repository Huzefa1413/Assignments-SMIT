//Q1
var pnumber = prompt("Enter a positive integer : ");
document.getElementById("pnumber").innerText = pnumber;
var pround = Math.round(pnumber);
document.getElementById("proundoff").innerText = pround;
var pfloor = Math.floor(pnumber);
document.getElementById("pfloor").innerText = pfloor;
var pceil = Math.ceil(pnumber);
document.getElementById("pceil").innerText = pceil;
//Q2
var nnumber = prompt("Enter a negative integer : ");
document.getElementById("nnumber").innerText = nnumber;
var nround = Math.round(nnumber);
document.getElementById("nroundoff").innerText = nround;
var nfloor = Math.floor(nnumber);
document.getElementById("nfloor").innerText = nfloor;
var nceil = Math.ceil(nnumber);
document.getElementById("nceil").innerText = nceil;
//Q3
var pfnumber = prompt("Enter a positive floating point number : ");
document.getElementById("pfnumber").innerText = pfnumber;
var pfround = Math.round(pfnumber);
document.getElementById("pfroundoff").innerText = pfround;
var pffloor = Math.floor(pfnumber);
document.getElementById("pffloor").innerText = pffloor;
var pfceil = Math.ceil(pfnumber);
document.getElementById("pfceil").innerText = pfceil;
//Q4
var nfnumber = prompt("Enter a negative floating point number : ");
document.getElementById("nfnumber").innerText = nfnumber;
var nfround = Math.round(nfnumber);
document.getElementById("nfroundoff").innerText = nfround;
var nffloor = Math.floor(nfnumber);
document.getElementById("nffloor").innerText = nffloor;
var nfceil = Math.ceil(nfnumber);
document.getElementById("nfceil").innerText = nfceil;
//Q5
var absnumber = prompt("Enter a number to calculate its absoulte value : ");
var absnmbr = Math.abs(absnumber);
document.getElementById("prevvalue").innerText = absnumber;
document.getElementById("absvalue").innerText = absnmbr;
//Q6
var dice = Math.floor(Math.random() * 6) + 1;
document.getElementById("randomdicevalue").innerText = dice;
//Q7
var headTail = Math.floor(Math.random() * 2) + 1;
if (headTail == 1) {
    document.getElementById("headtail").innerText = "Tails";
}
else if (headTail == 2) {
    document.getElementById("headtail").innerText = "Heads";
}
//Q8
var rand = Math.floor(Math.random() * 100) + 1;
document.getElementById("rand").innerText = rand;
//Q9
var weight = prompt("Enter your Weight : ");
var displayweight = parseFloat(weight);
document.getElementById("weight").innerText = displayweight + " Kilograms";
//Q10
var secret = Math.floor(Math.random() * 10) + 1;
var user = prompt("Enter the secret Number between 1 and 10: ");
if (user == secret) {
    alert("Congratulations");
}
else {
    alert("Try Again");
}
//Q11
var d = new Date();
document.getElementById("date").innerText = d;
//Q12
var currentMonth = d.getMonth();
var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
document.getElementById("month").innerText = month[currentMonth];
//Q13
var day = d.getDay();
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.getElementById("day").innerText = days[day];
//Q14
if (day == 0 || day == 6) {
    document.getElementById("fun").innerText = "Funday";
}
else {
    document.getElementById("fun").innerText = "Weekday";
}
//Q15
var dayOfMonth = d.getDate();
if (dayOfMonth < 15) {
    document.getElementById("firstorlast").innerText = "First Fifteen Days of the Month";
}
else{
    document.getElementById("firstorlast").innerText = "Last Fifteen Days of the Month";
}
//Q17
var currentHrs = d.getHours();
if(currentHrs>=12)
{
    document.getElementById("am").innerText = "PM"
}
else
{
    document.getElementById("am").innerText = "AM"
}
//Q18
var today = new Date();
var currentYear=today.getFullYear();
var previousYear= currentYear-2;  
var lastMonth = 12;
var laterDate = new Date(previousYear, lastMonth,0 );
document.getElementById("later").innerText=laterDate;
//Q19
var today = new Date();
var ramzan = new Date("June 18, 2015");
var msToday = today.getTime();
var msramzan = ramzan.getTime();
var msDiff = msToday - msramzan;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
document.getElementById("lday").innerText = dDiff;

//Q24
function clickk () {
document.getElementById("customerName").style.display = "none"; 
document.getElementById("units").style.display = "none"; 
document.getElementById("button").style.display = "none"; 
var monthsArray = ["Januaury","Febuaury" ,"March","April","May","June","July","August","September",
"October","November","December"];

var billMonth = new Date().getMonth();
var currentBillMonth = monthsArray[billMonth];
var userName = document.getElementById("customerName").value;
var userUnit = document.getElementById("units").value;
var charges = 14
var subCharges=500;
var netAmount = userUnit * charges;
var grossAmount = netAmount + subCharges;
document.getElementById("name").innerText=userName;
document.getElementById("billMonth").innerText=currentBillMonth;
document.getElementById("unit").innerText=userUnit;
document.getElementById("charges").innerText=charges;
document.getElementById("net").innerText=netAmount;
document.getElementById("sub").innerText=subCharges;
document.getElementById("gross").innerText=grossAmount;
}
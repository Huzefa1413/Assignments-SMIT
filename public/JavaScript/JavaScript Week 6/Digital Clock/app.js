var d = new Date();
var currentHrs = d.getHours();
var currMins = d.getMinutes();
var currSecs = d.getSeconds();
var currentMonth = d.getMonth();
var dayOfMonth = d.getDate();
var day = d.getDay();
var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("hours").innerText = currentHrs;
document.getElementById("minutes").innerText = currMins;
document.getElementById("seconds").innerText = currSecs;
document.getElementById("month").innerText = month[currentMonth];
document.getElementById("dayofmonth").innerText = dayOfMonth;
document.getElementById("day").innerText = days[day];
if(currentHrs>=12)
{
    document.getElementById("am").innerText = "PM"
}
else
{
    document.getElementById("am").innerText = "AM"
}

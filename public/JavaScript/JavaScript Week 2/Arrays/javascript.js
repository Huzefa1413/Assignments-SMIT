//Q1
var studentNames1 = [];

//Q2
var studentNames2 = new Array();

//Q3
var cities = ["Karachi", "Sialkot", "Lahore", "Islamabad", "Peshawar"];

//Q4
var rollNo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Q5
var trueOrFalse = [true, false, false, true, true];

//Q6
var mixedArray = ["Karachi", 96, true];

//Q7
var mobileNetworks = ["Ufone", "Jazz", "Zong", "Telenor", "Warid"];

//Q8
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<p>Qualifications</p>");
document.write("<ol><li>" + education[0] + "</li><li>" + education[1] + "</li><li>" + education[2] + "</li><li>" + education[3] + "</li><li>" + education[4] + "</li><li>" + education[5] + "</li><li>" + education[6] + "</li><li>" + education[7] + "</li></ol>");

//Q9
var movies = [];
movies.push("Avengers: Age of Ultron");
movies.push("Spectre");
movies.push("Jurassic World");
movies.push("Inside Out");
document.write("<h2>Top Movies of 2015</h2>");
document.write("<ol><li>" + movies[0] + "</li><li>" + movies[1] + "</li><li>" + movies[2] + "</li><li>" + movies[3] + "</li></ol>");
document.write("<h3>Length of Array: " + movies.length + "</h3>");

//Q10
var favCars = ["Audi", "Volvo", "Ford", "Lamborghini"];
document.write("<h2>Favourite Cars</h2>");
document.write("<ol><li>" + favCars[0] + "</li><li>" + favCars[1] + "</li><li>" + favCars[2] + "</li><li>" + favCars[3] + "</li></ol>");
document.write("<p>First Index of Array : 0</p>");
document.write("<p>Car at first index of Array : " + favCars[0] + "</p>");
document.write("<p>Last Index of Array : " + (favCars.length - 1) + "</p>");
document.write("<p>Car at last index of Array : " + favCars[favCars.length - 1] + "</p>");

//Q11
var studentNames = ["Michael", "John", "Tony"];
var studentScores = [320,230,480];
document.write("<p>Score of " + studentNames[0] + " is " + studentScores[0] + ". Percentage: " + (studentScores[0]/500 * 100) + "%</p>");
document.write("<p>Score of " + studentNames[1] + " is " + studentScores[1] + ". Percentage: " + (studentScores[1]/500 * 100) + "%</p>"); 
document.write("<p>Score of " + studentNames[2] + " is " + studentScores[2] + ". Percentage: " + (studentScores[2]/500 * 100) + "%</p>"); 

//Q12
var colors = ["red", "yellow", "green"];
document.write("<h3>Initial Array</h3>");
document.write(colors);
document.write("<h3>After Adding One Color At The Beginning</h3>");
colors.unshift(prompt("Enter a color you want to add in the beginning of array"));
document.write(colors);
document.write("<h3>After Adding Two More Colors At The Beginning</h3>");
colors.unshift(prompt("Enter a color you want to add in the beginning of array"));
colors.unshift(prompt("Enter a color you want to add in the beginning of array"));
document.write(colors);
document.write("<h3>After Deleting The First Color</h3>");
colors.shift();
document.write(colors);
document.write("<h3>After Deleting The Last Color</h3>");
colors.pop();
document.write(colors);
document.write("<h3>After Adding The Color At Desired Index</h3>");
colors.splice(prompt("Enter the Index where you want to insert the color"),0,prompt("Enter a color you want to add in array"));
document.write(colors);
document.write("<h3>After Deleting The Color At Desired Index</h3>");
colors.splice(prompt("Enter the Index where you want to delete the color"),prompt("Enter the number of colors you want to delete"));
document.write(colors);

//Q13
var studentScores = [320,230,480,120];
document.write("<p>Scores of Students: " + studentScores + "</p>");
studentScores.sort();
document.write("<p>Ordered Scores of Students: " + studentScores + "</p>");

//Q14
var fruits = ["strawberry","apple","orange","banana"];
document.write("<p>Fruits List: " + fruits + "</p>");
fruits.sort();
document.write("<p>Ordered Fruits List: " + fruits + "</p>");

//Q15
document.write("<p>Cities List: " + cities + "</p>");
var selectedCities = cities.slice(2,4);
document.write("<p>Selected Cities List: " + selectedCities + "</p>");

//Q16
var arr = ["This","is","my","cat"];
document.write("<p>Array: " + arr + "</p>");
document.write("<p>String: " + arr.join(" ") + "</p>");

//Q17
var devices = [];
document.write("<p>Devices</p>");
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write(devices);
document.write("<p>Out:</p>");
var removed = devices.shift();
document.write(removed);
document.write("<p>Out:</p>");
removed = devices.shift();
document.write(removed);
document.write("<p>Out:</p>");
removed = devices.shift();
document.write(removed);

//Q18
var devices = [];
document.write("<p>Devices</p>");
devices.push("keyboard");
devices.push("mouse");
devices.push("printer");
devices.push("monitor");
document.write(devices);
document.write("<p>Out:</p>");
var removed = devices.pop();
document.write(removed);
document.write("<p>Out:</p>");
removed = devices.pop();
document.write(removed);
document.write("<p>Out:</p>");
removed = devices.pop();
document.write(removed);

//Q19
var phoneManufactureres = ["Apple","Samsung","Motorolla","Nokia"];
document.write("<select><option>"+phoneManufactureres[0]+"</option><option>"+phoneManufactureres[1]+"</option><option>"+phoneManufactureres[2]+"</option><option>"+phoneManufactureres[3]+"</option></select>");

//Q20
var salary = [
    ["Huzefa", 20, 50000],
    ["Bilal", 21, 40000],
    ["Saim", 20, 45000]
];

//Q21
var matrix = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
];
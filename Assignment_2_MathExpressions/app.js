// Chapter 5

// Requirement 1

var num1 = 10;
var num2 = 8;

var resultAdd = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + resultAdd + ". <br>")

// Requirement 2

var resultSub = num1 - num2;
var resultMultiply = num1 * num2;
var resultDivide = num1 / num2;
var resultModulus = num1 % num2;
document.write("Subtraction of " + num1 + " and " + num2 + " is " + resultSub + ". <br>")
document.write("Multiplication of " + num1 + " and " + num2 + " is " + resultMultiply + ". <br>")
document.write("Division of " + num1 + " and " + num2 + " is " + resultDivide + ". <br>")
document.write("Remainder of " + num1 + " and " + num2 + " is " + resultModulus + ". <br><br><br>")

// Requirement 3

var num3 = "Undefined"
document.write("Value after variable declaration is: " + num3 + "<br>")
num3 = 5;
document.write("Initial value is: " + num3 + "<br>");
num3++;
document.write("Value after increment is: " + num3 + "<br>");
var num4 = num3 + 7;
document.write("Value after addition is: " + num4 + "<br>");
num4--;
document.write("Value after decrement is: " + num4 + "<br>");
var num5 = num4 % 3;
document.write("The Remainder is: " + num5 + "<br><br><br>");

// Requirement 4

var ticketPrice = 600;
var ticketQty = 5;
var totalCost = ticketPrice * ticketQty;

document.write("Total cost to buy " + ticketQty + " tickets to a movie is " + totalCost + " PKR.<br><br>");

// Requirement 5

var tableOf = 4;
for (let i = 1; i <= 10; i++) {
    document.write(tableOf, " x ", i, " = ", tableOf * i, "<br>");
}
document.write("<br><br>")
// Requirement 6

var tempC = 25;
var fahrenheit = (tempC * (9 / 5)) + 32;
document.write(tempC, "<sup>o</sup>C is ", fahrenheit, "<sup>o</sup>F.<br>");
var tempf = 70;
var celsius = (tempf - 32) * 5 / 9;
document.write(tempf, "<sup>o</sup>F is ", celsius, "<sup>o</sup>C.<br><br><br>");

//   Requirement 7


var priceItemA = 650;
var priceItemB = 100;

var qtyItemA = 3;
var qtyItemB = 7;
var shippingCharges = 100;

var totalCostItemA = priceItemA * qtyItemA;
var totalCostItemB = priceItemB * qtyItemB;

var totalOrderCost = totalCostItemA + totalCostItemB + shippingCharges;

document.write("<h3>Shopping Cart</h3>");

document.write("Price of item A is: ", priceItemA, "<br>");
document.write("ْQuantity of item A is: ", qtyItemA, "<br><br>");

document.write("Price of item B is: ", priceItemB, "<br>");
document.write("ْQuantity of item B is: ", qtyItemB, "<br><br>");

document.write("Shipping Charges: ", shippingCharges, "<br><br>");
document.write("Total cost of your order is: ", totalOrderCost+ ".<br><br>");

//   Requirement 8

document.write("<h3>MarkSheet</h3>")

var totalMarks = 980;
var marksObtained = 804;
var obtainedPercentage = marksObtained / totalMarks * 100;

document.write("Total Marks: ", totalMarks, "<br>");
document.write("Marks Obtained: ", marksObtained, "<br>");
document.write("Percentage: ", obtainedPercentage, "<br><br><br>");


//   Requirement 8

document.write("<h3>Currency in PKR</h3>");

var currPak_USD = 104.80;
var currPak_SAR = 28;
var currUSD = 10;
var currSAR = 25;

var currConvTo_USD = currUSD * currPak_USD;
var currConvTo_SAR = currSAR * currPak_SAR;

var totalCurrency = currConvTo_USD + currConvTo_SAR;

document.write("Total Currency in PKR is: ", totalCurrency, ".<br><br><br>")

// Requirement 10


var initialNumber = 10;
document.write("Initial Number is: ", initialNumber, ".<br>")
document.write("After Calculating: ", initialNumber + 5 * 10 / 2, ". <br><br><br>")


// Requirement 11

document.write("<h3>Age Calculator</h3>")

var currentYear = 2023;
var birthYear = 1994;
var age = currentYear - birthYear;

document.write("Current Year: ", currentYear, "<br>")
document.write("Birth Year: ", birthYear, "<br>")
document.write("Your Age is: ", age, "<br><br><br>")


// Requirement 12

document.write("<h3>The Geometrizer</h3><br>")

var radius = 20;
var pie = 3.142;
var circumference = 2 * pie * radius;
var area = pie * (radius ** 2);

document.write("Radius of a circle: ", radius, ". <br>");
document.write("The Circumference is: ", circumference, ". <br>");
document.write("The area is: ", area, ". <br><br><br>");


// Requirement 13

document.write("<h3>The Lifetime Supply Calculator</h3>")

var favSnack = "Nuggets";
var CurrAge = 29;
var maxAge = 65;
var snackPerDay = 3;
var requiredSnack = (maxAge - CurrAge) * 365 * snackPerDay;

document.write("Favourite Snack: ", favSnack, "<br>");
document.write("Current Age: ", CurrAge, "<br>");
document.write("Estimated Maximum Age: ", maxAge, "<br>");
document.write("Amount of Snacks per Day: ", snackPerDay, "<br>");
document.write("You will need ", requiredSnack, " ", favSnack, " to last you until the ripe old age of ", maxAge, ". <br><br><br>");

// Chapter 6 - 9

// Requirement 1

document.write("Result: <br>");
var a = 10;
document.write("The value of a is: ", a, ". <br>")
document.write("...................................................<br><br>")

++a
document.write("The value of ++a is: ", a, ". <br>")
document.write("Now the value of a is: ", a, ". <br><br>")

document.write("The value of a++ is: ", a, ". <br>")
++a
document.write("Now the value of a is: ", a, ". <br><br>")

--a
document.write("The value of --a is: ", a, ". <br>")
document.write("Now the value of a is: ", a, ". <br><br>")

document.write("The value of a-- is: ", a, ". <br>")
a--
document.write("Now the value of a is: ", a, ". <br><br><br>")

// Requirment 2

var A = 2;
var b = 1;
document.write("A is: ", A, "<br>");
document.write("b is: ", b, "<br>");

var result = --A - --b + ++b + b--;
document.write("Result is: ", result, "<br><br><br>");

// Requirment 3

function greetings() {
    var userInput = document.getElementById('enterName').value;

    var welcomeMessage = 'Hello! ' + userInput
    document.getElementById('showMessage').innerHTML = welcomeMessage;
}
document.write("<br><br>")

// Requirment 4

function multiplicationTable() {
    var num = document.getElementById('enterNumber').value || 5;

    var tableOutput = '';
    for (var i = 1; i <= 10; i++) {
        tableOutput += (num + " x " + i + " = " + num * i + "<br>");
    }

    document.getElementById("showTable").innerHTML = tableOutput;
}
document.write("<br><br>")

// Requirment 5

// Declare Subjects
var subject1 = prompt("Enter Subject Name")
var subject2 = prompt("Enter Subject Name")
var subject3 = prompt("Enter Subject Name")

// Total Marks
var totalMarks = 100;

// Declare Obtained Marks
var sub1Marks = +prompt("Enter Obtained Marks")
var sub2Marks = +prompt("Enter Obtained Marks")
var sub3Marks = +prompt("Enter Obtained Marks")



document.write('Subject |');
document.write(' Total Marks |');
document.write(' Obtained Marks |');
document.write(' Percentage <br>');

document.write("<tr><td>" + subject1 + "|</td>" + "<td>" + totalMarks + "|</td>" + "<td>" + sub1Marks + "|</td>" + "<td>" + sub1Marks / totalMarks * 100 + "%</td></tr><br>");
document.write("<tr><td>" + subject2 + "|</td>" + "<td>" + totalMarks + "|</td>" + "<td>" + sub2Marks + "|</td>" + "<td>" + sub2Marks / totalMarks * 100 + "%</td></tr><br>");
document.write("<tr><td>" + subject3 + "|</td>" + "<td>" + totalMarks + "|</td>" + "<td>" + sub3Marks + "|</td>" + "<td>" + sub3Marks / totalMarks * 100 + "%</td></tr><br>");

// Grand Total

var G_total = totalMarks * 3;
var totalObtainedMarks = sub1Marks + sub2Marks + sub3Marks;
var totalPercentage = totalObtainedMarks / G_total * 100;

document.write("<tr><td> Grand Total|</td>" + "<td>" + G_total + "|</td>" + "<td>" + totalObtainedMarks + "|</td>" + "<td>" + totalPercentage + "%</td></tr><br>");
document.write("<br><br>")

// Chapter 9 - 11

// Requirement 1

function welcome_Msg() {
    var userCity = document.getElementById('cityName').value

    if (userCity === "Karachi") {
        document.getElementById('welcome_Message').innerHTML = "Welcome to city of lights";
    } else {
        document.getElementById('welcome_Message').innerHTML = "Enter correct city";
    }
}
document.write("<br><br>")

// Requirement 2

function gender_Msg() {
    var userGender = document.getElementById('gender').value

    if (userGender == "male") {
        document.getElementById('gender_Message').innerHTML = "Good Morning Sir";
    } else if (userGender == "female") {
        document.getElementById('gender_Message').innerHTML = "Good Morning Ma'am";
    } else {
        document.getElementById('gender_Message').innerHTML = "Please enter you gender";
    }
}
document.write("<br><br>")

// Requirement 3

function color_Msg() {
    var traffic_clr = document.getElementById('traffic_Color').value

    if (traffic_clr == "red") {
        document.getElementById('color_Message').innerHTML = "Must Stop";
    } else if (traffic_clr == "yellow") {
        document.getElementById('color_Message').innerHTML = "Ready to move";
    } else if (traffic_clr == "green") {
        document.getElementById('color_Message').innerHTML = "Move now";
    } else {
        document.getElementById('color_Message').innerHTML = "Provide input";
    }
}
document.write("<br><br>")

// Requirement 4

function fuel_warning() {
    var fuel = document.getElementById('fuelQty').value

    if (fuel < 0.25) {
        document.getElementById('warning_Message').innerHTML = "Please refill the fuel in your car";
    } else {
        document.getElementById('warning_Message').innerHTML = "Good to go";
    }
}
document.write("<br><br>")

// Requirement 5

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// true

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// false

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// condition 2 and 4 is true

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// true

// if (true) {
//     alert("True");
// }
// if (false) {
//     alert("False");
// }
// both conditions true

// if ("car" < "cat") {
//     alert("car is smaller than cat");
// }
// true

document.write("<br><br>")

// Requirement 6

var total_mrk = 300;
var obt_mrk = document.getElementById("get_marks");
var obt_percentage = obt_mrk / total_mrk * 100;

var a_one = (obt_percentage >= 80)

document.write("<h2>Marks Sheet</h2>")
document.write("Total Marks: " + total_mrk + "<br>");
document.write("Marks Obtained: " + obt_mrk + "<br>");
document.write("Percentage: " + obt_percentage + + "%<br>");
document.write("Grade: " + total_mrk);
document.write("Remarks: " + total_mrk+"<br><br>");

//  Requirement 7

var secretNum = 7;
var guessNum = +prompt("Guess Number between 1 to 10");

if (guessNum === secretNum){
    document.write('“Bingo! Correct answer”.');
} else if (guessNum == secretNum-1){
    document.write('“Close enough to the correct answer”.');
}  else {
    document.write('Better Luck Next Time');
}
document.write("<br><br>")

//  Requirement 8

var divisibleNum = +prompt('Enter Number');

if (divisibleNum % 3 == 0){
    document.write("Number can be divisible by 3");
} else {
    document.write("Number cannot be divisible by 3");
}
document.write("<br><br>")

//  Requirement 9

var evenNumCheck = +prompt('Enter Number');

if (evenNumCheck % 2 == 0){
    document.write(evenNumCheck + " is an Even Number.");
} else {
    document.write(evenNumCheck + " is an Odd Number.");
}

document.write("<br><br>")

//  Requirement 10

var temp = prompt('Enter Temperature');

if(temp > 40){
    document.write("“It is too hot outside.”");
} else if(temp > 30){
    document.write("“The Weather today is Normal.”");
} else if(temp > 20){
    document.write("“Today’s Weather is cool.”");
} else if (temp > 10){
    document.write("“OMG! Today’s weather is so Cool.”");
}
document.write("<br><br>")

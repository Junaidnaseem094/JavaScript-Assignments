document.write("<h1>JavaScript Assignment 2</h1>")
document.write("<h2>From Chapter 5 to 11</h2>")
// Chapter 5

// Requirement 1 & 2
var num1 = 10;
var num2 = 8;

document.write("<hr><h3>Requirement 1:</h3>")
var resultAdd = num1 + num2;
document.write ("Sum of " + num1 + " and " + num2 + " is " + resultAdd +". <br>")

// Requirement 2
document.write("<hr><h3>Requirement 2:</h3>")
var resultSub = num1 - num2;
var resultMultiply = num1 * num2;
var resultDivide = num1 / num2;
var resultModulus = num1 % num2;
document.write ("Subtraction of " + num1 + " and " + num2 + " is " + resultSub +". <br>")
document.write ("Multiplication of " + num1 + " and " + num2 + " is " + resultMultiply +". <br>")
document.write ("Division of " + num1 + " and " + num2 + " is " + resultDivide +". <br>")
document.write ("Remainder of " + num1 + " and " + num2 + " is " + resultModulus +". <br>")

// Requirement 3
document.write("<hr><h3>Requirement 3:</h3>")
var num3 ="Undefined"
document.write ("Value after variable declaration is: " + num3 + "<br>")
num3 = 5;
document.write ("Initial value is: " + num3+ "<br>");
num3++;
document.write ("Value after increment is: " + num3+ "<br>");
var num4 = num3 + 7;
document.write ("Value after addition is: " + num4+ "<br>");
num4--;
document.write ("Value after decrement is: " + num4+ "<br>");
var num5 = num4 % 3;
document.write ("The Remainder is: " + num5+ "<br>");

// Requirement 4
document.write("<hr><h3>Requirement 4:</h3>")
var ticketPrice = 600;
var ticketQty = 5;
var totalCost = ticketPrice * ticketQty;

document.write("Total cost to buy " + ticketQty + " tickets to a movie is " + totalCost + " PKR.");

// Requirement 5
document.write("<hr><h3>Requirement 5:</h3>")
var tableOf = 4;
for(let i=1;i<=10;i++){
    document.write(tableOf, " x " , i , " = ", tableOf*i, "<br>");
}

// Requirement 6

document.write("<hr><h3>Requirement 6:</h3>")
 var tempC = 25;
 var fahrenheit = (tempC*(9/5))+32;
 document.write(tempC, "<sup>o</sup>C is ", fahrenheit, "<sup>o</sup>F.<br>");
 var tempf = 70;
 var celsius = (tempf-32)*5/9;
 document.write(tempf, "<sup>o</sup>F is ", celsius, "<sup>o</sup>C.<br>");

//   Requirement 7

document.write("<hr><h3>Requirement 7:</h3>")

var priceItemA = 650;
var priceItemB = 100;

var qtyItemA = 3;
var qtyItemB = 7;
var shippingCharges = 100;

var totalCostItemA = priceItemA * qtyItemA;
var totalCostItemB = priceItemB * qtyItemB;

var totalOrderCost = totalCostItemA + totalCostItemB + shippingCharges;

document.write("<h3>Shopping Cart</h3>");

document.write("Price of item A is: " ,priceItemA, "<br>");
document.write("ْQuantity of item A is: " ,qtyItemA, "<br><br>");

document.write("Price of item B is: " ,priceItemB, "<br>");
document.write("ْQuantity of item B is: " ,qtyItemB, "<br><br>");

document.write("Shipping Charges: ", shippingCharges, "<br><br>");
document.write("Total cost of your order is: ", totalOrderCost);

//   Requirement 8

document.write("<hr><h3>Requirement 8:</h3>")

document.write("<h3>MarkSheet</h3>")

var totalMarks = 980;
var marksObtained = 804;
var obtainedPercentage = marksObtained / totalMarks * 100;

document.write("Total Marks: ", totalMarks, "<br>");
document.write("Marks Obtained: ", marksObtained, "<br>");
document.write("Percentage: ", obtainedPercentage, "<br>");


//   Requirement 8

document.write("<hr><h3>Requirement 9:</h3>")

document.write("<h3>Currency in PKR</h3>");

var currPak_USD = 104.80;
var currPak_SAR = 28;
var currUSD = 10;
var currSAR = 25;

var currConvTo_USD = currUSD * currPak_USD;
var currConvTo_SAR = currSAR * currPak_SAR;

var totalCurrency = currConvTo_USD + currConvTo_SAR;

document.write("Total Currency in PKR is: ", totalCurrency, ".<br>")

// Requirement 10

document.write("<hr><h3>Requirement 10:</h3>")

var initialNumber = 10;
document.write("Initial Number is: ", initialNumber, ".<br>")
document.write("After Calculating: ", initialNumber + 5 * 10 / 2 ,". <br>")


// Requirement 11

document.write("<hr><h3>Requirement 11:</h3>")

document.write("<h3>Age Calculator</h3>")

var currentYear = 2023;
var birthYear = 1994;
var age = currentYear - birthYear;

document.write("Current Year: ", currentYear, "<br>")
document.write("Birth Year: ", birthYear, "<br>")
document.write("Your Age is: ", age, "<br>")


// Requirement 12

document.write("<hr><h3>Requirement 12:</h3>")








// Requirement 13

document.write("<hr><h3>Requirement 13:</h3>")

document.write("<h3>The Lifetime Supply Calculator</h3>")

var favSnack = "Nuggets";
var CurrAge = 29;
var maxAge = 65;
var snackPerDay = 3;
var requiredSnack = (maxAge-CurrAge)*365*snackPerDay;

document.write("Favourite Snack: ", favSnack, "<br>")
document.write("Current Age: ", CurrAge, "<br>")
document.write("Estimated Maximum Age: ", maxAge, "<br>")
document.write("Amount of Snacks per Day: ", snackPerDay, "<br>")
document.write("You will need ", requiredSnack," ", favSnack, " to last you until the ripe old age of ", maxAge, ". <br>")
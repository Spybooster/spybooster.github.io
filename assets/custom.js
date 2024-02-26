var currentDate = new Date();
var birthYear = 1997;
var currentYear = currentDate.getFullYear();
var age = currentYear - birthYear;

document.getElementById("age").textContent = age;
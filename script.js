'use strict';
let week = " ";
// Find out what week it is based on date, or input
function findWeek(date){
	// Establish the first A week in milliseconds (last A week of 2018)
	const firstADate = new Date("Dec 9, 2018 00:00:00");
	const firstAMil = firstADate.getTime();
	const milPerWeek  = 7 * 24 * 60 * 60 * 1000;

	// Find difference between 1st A week and input in # of weeks
	let milDifference = date - firstAMil;
	let weeksDifference = milDifference / milPerWeek;

	// Subtract from remainder until the remainder is 1, 2, or 3
	while (weeksDifference > 3) {
		weeksDifference -= 3;
	}

	// Determine week based on remainder
	if (weeksDifference < 1) {
		week = "a";
	} else if (weeksDifference < 2) {
		week = "b";
	} else if (weeksDifference < 3) {
		week = "c";
	}
}	

// Find current week for intial text on page
function currentWeek() {

	// Establish today's date in milliseconds
	let todayDate = new Date();
	let todayMil = todayDate.getTime();

	// Establish initial text
	let initialText = document.getElementById("result");
	
	// Run findWeek with today's date	
	findWeek(todayMil);

	// Change initial text depending on letter
	if (week = "a") {
		initialText.innerHTML =
		("We're currently headed into A Weekend.")
	} else if (week = "b") {
		initialText.innerHTML =
		("We're currently headed into B Weekend.")
	} else if (week = "c") {
		initialText.innerHTML =
		("We're currently headed into C Weekend.")
	} 
}	
currentWeek();

// Find week based on user input
function userWeek(){
	// Establish initial text
	let initialText = document.getElementById("result");
	
	// Grab user date input
	let selMonth = document.getElementById("monthSelect");
	let month = selMonth.value;
	let selDay = document.getElementById("daySelect");
	let day = selDay.value;
	let selYear = document.getElementById("yearSelect");
	let year = selYear.value;
	let wholeDate = (month + " " + day + ", " + year);
	let formatDate = new Date(wholeDate);
	let inputDateCounter = formatDate.getTime();

	// Run findWeek with the input date
	findWeek(inputDateCounter);

	// Change text depending on the week's letter
	if (week = "a") {
		initialText.innerHTML =
		("We will be headed into A Weekend.")
	} else if (week = "b") {
		initialText.innerHTML =
		("We will be headed into B Weekend.")
	} else if (week = "c") {
		initialText.innerHTML =
		("We will be headed into C Weekend.")
	} 
} 
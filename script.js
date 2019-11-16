// Establish A week
const aWeekDate = new Date("Oct 20, 2019 00:00:00");
const aWeekCounter = aWeekDate.getTime();

// Find number of milliseconds in a day.
const dayMilliseconds = 24 * 60 * 60* 1000;

// Find current week.
let today = new Date();
let todayMilSec = today.getTime();
let todayDif = todayMilSec - aWeekCounter;
let todayWeeks = todayDif / dayMilliseconds / 7;
let initialText = document.getElementById("result");

function findCurrentWeek() {
	// Find current week.
	let today = new Date();
	let todayMilSec = today.getTime();
	let todayDif = todayMilSec - aWeekCounter;
	let todayWeeks = todayDif / dayMilliseconds / 7;
	let initialText = document.getElementById("result");

	while (todayWeeks > 3) {
		todayWeeks -= 3;
	}

	// Using the remainder to determine the week.
	if (todayWeeks < 1) {
		initialText.innerHTML=
		("We're currently headed into A Weekend.")
	} else if (todayWeeks < 2) {
		initialText.innerHTML=
		("We're currently headed into B Weekend.")
	} else if (todayWeeks < 3) {
		initialText.innerHTML=
		("We're currently headed into C Weekend.")
	} 
}	
findCurrentWeek();

// Find user's week.
function whatWeek() {
	// grab user date input
	let selMonth = document.getElementById("monthSelect");
	let month = selMonth.value;
	let selDay = document.getElementById("daySelect");
	let day = selDay.value;
	let selYear = document.getElementById("yearSelect");
	let year = selYear.value;
	let wholeDate = (month + " " + day + ", " + year);
	let formatDate = new Date(wholeDate);
	let inputDateCounter = formatDate.getTime();

	// Find the difference in milliseconds.
	let difference = inputDateCounter - aWeekCounter;

	// Find difference in days then weeks.
	let numberOfWeeks = difference / dayMilliseconds / 7;

	// Divide weeks 3 until you can't anymore.
	function findTheRemainder() {
		while (numberOfWeeks > 3) {
			numberOfWeeks -= 3;
		}
		console.log(numberOfWeeks);
		// Using the remainder to determine the week.
		if (numberOfWeeks < 1) {
			result =
			("We will be headed into an A weekend.")
		} else if (numberOfWeeks < 2) {
			result =
			("We will be headed into a B weekend.")
		} else if (numberOfWeeks < 3) {
			result =
			("We will be headed into a C weekend.")
		}
		document.getElementById("result").innerHTML = result; 
	}	
	findTheRemainder();
}
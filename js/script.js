const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originalText = document.querySelector("#origin-text p").innerHTML;
var originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const previousButton = document.querySelector("#previous");
const nextButton = document.querySelector("#next");
var newText = document.querySelector("#new-text p").innerHTML;

var timer = [0,0,0,0];
var interval;
var timerRunning = false;

// Add leading zero to numbers 9 or below (purely for aesthetics):

function leadingZero(time) {
	
	if (time <= 9) {
		time = "0" + time;
	}
	return time;
} 

// Run a standard minute/second/hundredths timer:

function runTimer() {
	let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
	theTimer.innerHTML = currentTime;
	timer[3]++;
	
	timer[0] = Math.floor((timer[3]/100)/60);
	timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
	timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
	
}

// Match the text entered with the provided text on the page:

function spellCheck() {
	let textEntered = testArea.value;
	
	let originTextMatch = originText.substring(0, textEntered.length);
	
	if (textEntered == originText) {
		clearInterval(interval);
		testWrapper.style.borderColor = "#008000";
	} else {
		if (textEntered == originTextMatch) {
			testWrapper.style.borderColor = "#FFD700";
		} else {
			testWrapper.style.borderColor = "#8B0000";
		}
	}
	console.log(textEntered);
}

// Start the timer:

function start() {
	let textEnteredLength = testArea.value.length;
	
	if (textEnteredLength === 0 && !timerRunning) {
		timerRunning = true;
		interval = setInterval(runTimer, 10);
	}
}

// Reset everything:

function reset() {
	clearInterval(interval);
	interval = null;
	timer = [0,0,0,0];
	timerRunning = false;
	
	testArea.value = "";
	theTimer.innerHTML = "00:00:00";
	testWrapper.style.borderColor = "darkgray";
}

// Previous button:

function previous(i) {
	
	document.getElementById('origin-text').innerHTML = originalText;
	originText=originalText;
	
	clearInterval(interval);
	interval = null;
	timer = [0,0,0,0];
	timerRunning = false;
	
	testArea.value = "";
	theTimer.innerHTML = "00:00:00";
	testWrapper.style.borderColor = "darkgray";
}

// Next button

function next(i) {
	
	if (next[i] = 1) {
	originText = newText;
	document.getElementById('origin-text').innerHTML = originText;
	} else {
		console.log("Thanks for the Test!")
	}
		  
//	originText = document.getElementById('origin-text').innerHTML;
	
	clearInterval(interval);
	interval = null;
	timer = [0,0,0,0];
	timerRunning = false;
	
	testArea.value = "";
	theTimer.innerHTML = "00:00:00";
	testWrapper.style.borderColor = "darkgray";
}

// Event listeners for keyboard input and the reset button:
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);
previousButton.addEventListener("click", previous, true);
nextButton.addEventListener("click", next, true);
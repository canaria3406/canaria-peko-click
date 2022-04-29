updateClicks();
var Mcount = 0;

function clickpeko() {
	new Audio(getRandomNoise()).play();
	updateClicks();
	Mcount++;
	document.getElementById("sessionCount").innerHTML = Mcount.toLocaleString('en-US');
}

function getRandomNoise() {
	var soundsrc = "src/sound/PEKO" + getRandomInt() + ".mp3";
	return soundsrc;
}

//Soundpack will update soon
function getRandomInt(max = 5, pad = 2) {
	let f = Math.floor(Math.random() * max) + 1;
	f = f.toString().padStart(pad, "0");
	return f;
}

function updateClicks() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api.countapi.xyz/hit/peko.canaria.cc/awesomeclick");
	xhr.responseType = "json";
	xhr.onload = function() {
		document.getElementById("counted").innerHTML = parseInt(this.response.value, 10).toLocaleString('en-US');
	}
	xhr.send();
}

var run = setInterval(updateClicks, 60000);
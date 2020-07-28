let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let keys = document.querySelectorAll(".keys");
let aLock = new Audio('lockaudio.mp3');
let aStart = new Audio('enginestart.mp3');
let aLoop = new Audio('engineloop.mp3');
let aOff = new Audio('engineoff.mp3');
let aPanic = new Audio('caralarm.mp3');
let aUnlock = new Audio('carunlock.wav');

deactivate();

button.addEventListener("click", isValid);

function isValid (){
	let keyId = input.value;
	if(keyId === "trevscar"){
		activate();
		keys[0].addEventListener("click", start);
		keys[1].addEventListener("click", off);
		keys[2].addEventListener("click", unlock);
		keys[3].addEventListener("click", lock);
		keys[4].addEventListener("click", panic);
		alert("Key Is Valid");
	}else{
		deactivate();
		alert("Invalid Key");
	}
	return keyId;
}

function deactivate(){
	for(var i = 0; i < keys.length; i++){
			keys[i].setAttribute("disabled", "");
			keys[i].style.cursor = "not-allowed";
	}
}

function activate(){
	for(var i = 0; i < keys.length; i++){
			keys[i].removeAttribute("disabled", "");
			keys[i].style.cursor = "pointer";
		}
}

function start(){
	aStart.play();
	aLoop.play();
	aLoop.addEventListener("ended", function(){
		this.currentTime = 0;
		this.play();
	}, false);
}

function off(){

	aPanic.pause();

	if (aLoop.duration > 0 && !aLoop.paused){
		aLoop.pause();
		aOff.play();
	}
}

function unlock(){
	aPanic.pause();
	aUnlock.play();
}

function lock(){
	aPanic.pause();
	aLock.play();
}
function panic(){
	aPanic.play();
	aPanic.addEventListener("ended", function(){
		this.currentTime = 0;
		this.play();
	}, false);
}


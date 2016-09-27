var powerLevel = [''];
powerLevel = ['1','2','3','4','5'];

if (powerLevel == 1) {
	("consoleText").addClass("blink");
}


function startUp() {
	document.getElementById("consoleText").innerHTML = "Starting up Mainframe for the first Time..";
	powerLevel = 1
}
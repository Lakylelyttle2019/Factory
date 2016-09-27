var saveFile = [''];


function newGame() {
var	newGameConfirm = confirm('Are you sure you want to start a new game? Press "Ok" to continue..');
	if (newGameConfirm == true) {
		alert('Game is starting for the first time..');
		firstStartGame();
	}
	else if (newGameConfirm == false) {
		alert('Nevermind Then..');
		end();
	}
}
function loadGame() {
	var game  = window.open("./game/gameScreen.html", "_Self")
	window.close("./index.html")
	
}

function importGame() {
	
}

function firstStartGame() {
	var characterName = [''];
	
	characterName = prompt('Who am I? What is my Name..');
	alert('Right My name is.. ' + characterName);
	createFile();
	loadGame();
	console.log('The new Character Name is:' + characterName);
}
function createFile() {
    var newFile;
	
    }

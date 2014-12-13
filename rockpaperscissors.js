var userChoice;
var computerChoice;
var choices = ["rock", "paper", "scissors"];
var wrongChoice = function(move1) {
	if (choices.indexOf(userChoice) === -1) {
		return true;
	} else {
		return false;
	}
}
var compare = function(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if(choice1 === "rock") {
        if(choice2 === "scissors") {
            return "Rock Wins!!";
        } else {
            return "Paper Wins";
        }
    } else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "Paper Wins!!";
        } else {
            return "Scissors Win";
        }
    } else if(choice1 === "scissors") {
        if(choice2 === "paper") {
            return "Scissors Win!!";
        } else {
            return "Rock Wins";
        }
    }
}
var playAgain;

//Human player choice
userChoice = prompt("Will you choose " + choices.join(" or ") + "?").toLowerCase();

//Error control for incorrect entries
if(wrongChoice(userChoice)) {
	while(wrongChoice(userChoice)) {
		userChoice = prompt("Your choice does not exist. Please choose " + choices.join(" or ") + "!").toLowerCase();
	}
}

//Computer player choice
computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

//Text to display on html page
document.getElementById("player").innerHTML = ("You chose: " + userChoice);
window.alert("Computer chose: " + computerChoice);
document.getElementById("computer").innerHTML = ("Computer chose: " + computerChoice);
document.getElementById("result").innerHTML = compare(userChoice, computerChoice);

//Refreshes page to restart game
playAgain = confirm("Play again?");
if(playAgain == true) {
	location.reload();
} else {
	alert("Thank you for playing!");
}

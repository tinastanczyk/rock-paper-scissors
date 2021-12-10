// As a user, I want to play Rock, Paper, Scissors against an automated opponent.

var wins = 0;
var losses = 0;
var ties = 0;
var games = 0;

function computerChose(){
  var rps = ["R" , "P" , "S"];

  var randomSign = Math.floor(Math.random() * rps.length);
  var chosenSign = rps[randomSign];
  return chosenSign;

}

function computerStatement(userSign){
  var compInput = computerChose();
  switch(compInput){
    case "R":
      alert("Computer chose Rock");
      whoWon(compInput, userSign);
      break;
    case "P":
      alert("Computer chose Paper");
      whoWon(compInput, userSign);
      break;
    case "S":
      alert("Computer chose Scissors");
      whoWon(compInput, userSign);
      break;
  }
}

function userChose(userInput){
  var userSign = userInput;
  switch(userSign){
    case "R":
      alert("You chose Rock");
      computerStatement(userSign);
      break;
    case "P":
      alert("You chose Paper");
      computerStatement(userSign);
      break;
    case "S":
      alert("You chose Scissors");
      computerStatement(userSign);
      break;
  }
  return userSign;
}

function whoWon(comp, user){

  if(user === comp){
    alert("Tie!");
    ties++;
    games++;
  }else if((comp == "R" && user == "P") || (comp == "P" && user == "S") || (comp == "S" && user == "R")){
    alert("You win!");
    wins++;
    games++;
  }else{
    alert("Computer wins!");
    losses++;
    games++;
  }
  printStats(games, wins, ties, losses);
}

function printStats(games, wins, ties, losses){
  alert("Total Games: " + games + " Wins: " + wins + " Ties: " + ties + " Losses: " + losses);
}

function startGame(){
  var doYouWantToPlay = window.confirm("Do you want to play rock, paper, scissors?");
  if(doYouWantToPlay){
    var userInput = prompt("Type 'R' for Rock, 'P' for Paper or 'S' for Scissors")
    userInput = userInput.toUpperCase();
    userChose(userInput);
    startGame();
    
  }else{
    var wantToLeave = window.confirm("Are you sure you want to leave?")
    if(wantToLeave){
      alert("Thank you for playing!");
    }else{
      alert(startGame());
    }
  }
}

startGame();

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// As a user, I expect the computer to choose R, P, or S in return.

// As a user, I want the option to play again whether I win or lose.

// As a user, I want to see my total wins, ties, and losses after each round.
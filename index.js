// ex08: Function to check the answer

var readlineSync = require("readline-sync");

var score = 0;

function game(question, answer){
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log("you are right!");
    score++;
  } else{
    console.log("you are wrong!");

    score--;

  }

}

game("what is ashutosh age? ", "24");
game ("where do ashutosh live? ", "hajipur");
console.log(score);


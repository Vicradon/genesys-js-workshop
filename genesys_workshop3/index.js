const log = console;
let age = 0;
let message = "";
let count = 0;
let endGame = 0;
// CREATE A BASIC IF ELSE BLOCK
//STEP1
function game() {
  if (endGame === 0) {
    if (age == 0) {
      message = "Player is a baby";
    }
    else if (age > 0 && age <= 12) {
      message = "Player is now a child";
    }
    else if (age > 12 && age < 18) {
      message = "Player is a teen";
    }
    else if (age >= 18 && age < 60) {
      message = "Player is an adult";
    }
    else if (age === 60) {
      message = "You win!";
      clearInterval(playGame);
      endGame = 1;
    }
    count++;
    // step 2 
    function incrementAge() {
      age += 1;
    }
    if (count % 10 === 0) {
      incrementAge()
    }
    console.log(message)
  }
}
const playGame = setInterval(game, 1);

//Michelle Liu, Period 78 Even, 11/28/2022, Level 1 Project: Hot and Cold
guess = 50;
triesLeft = 5;
num = Math.round(Math.random() * 99) + 1;
gotIt = false;
document.getElementById("add1").onclick = function() {
    if (guess == num) {
        console.log("Stop! You won already!");
    } else if (guess + 1 > 100) {
        console.log("You can't go beyond the bounds of 1-100.");
    } else {
        guess++;
        checkTemp(guess);
    }
}
document.getElementById("add5").onclick = function() {
    if (guess == num) {
        console.log("Stop! You won already!");
    } else if (guess + 5 > 100) {
        console.log("You can't go beyond the bounds of 1-100.");
    } else {
        guess += 5;
        checkTemp(guess);
    }
}
document.getElementById("add10").onclick = function() {
    if (guess == num) {
        console.log("Stop! You won already!");
    } else if (guess + 10 > 100) {
        console.log("You can't go beyond the bounds of 1-100.");
    } else {
        guess += 10;
        checkTemp(guess);
    }
}
document.getElementById("add25").onclick = function() {
    if (guess == num) {
        console.log("Stop! You won already!");
    } else if (guess + 25 > 100) {
        console.log("You can't go beyond the bounds of 1-100.");
    } else {
        guess += 25;
        checkTemp(guess);
    }
}
document.getElementById("sub1").onclick = function() {
    if (guess == num) {
        console.log("Stop! You won already!");
    } else if (guess - 1 < 1) {
        console.log("You can't go beyond the bounds of 1-100.");
    } else {
        guess -= 1;
        checkTemp(guess);
    }
}
document.getElementById("sub5").onclick = function() {
    if (guess == num) {
        console.log("Stop! You won already!");
    } else if (guess - 5 < 1) {
        console.log("You can't go beyond the bounds of 1-100.");
    } else {
        guess -= 5;
        checkTemp(guess);
    }
}
document.getElementById("sub10").onclick = function() {
    if (guess == num) {
        console.log("Stop! You won already!");
    } else if (guess - 10 < 1) {
        console.log("You can't go beyond the bounds of 1-100.");
    } else {
        guess -= 10;
        checkTemp(guess);
    }
}
document.getElementById("sub25").onclick = function() {
    if (guess == num) {
        console.log("Stop! You won already!");
    } else if (guess - 25 < 1) {
        console.log("You can't go beyond the bounds of 1-100.");
    } else {
        guess -= 25;
        checkTemp();
    }
}
function checkTemp() {
    if (guess != num && triesLeft <= 0) {
        console.log("You have no more guesses left. The number is " + num + ".");
    } else if (guess == num) {
        gotIt = true;
        console.log("Correct! The number is " + num + ".");
        document.getElementById("guessCount").innerHTML = "Guesses Left: " + triesLeft;
        document.getElementById("currGuess").innerHTML = "Guess: " + guess;
    } else if (Math.round(Math.random() * 19) + 1 == 1) {
        roll = Math.round(Math.random() * 7) + 1;
        if (roll == 1) {
            console.log("Very Hot");
        } else if (roll == 2) {
            console.log("Hot");
        } else if (roll == 3) {
            console.log("Very Warm");
        } else if (roll == 4) {
            console.log("Warm");
        } else if (roll == 5) {
            console.log("Cool");
        } else if (roll == 6) {
            console.log("Very Cool");
        } else if (roll == 7) {
            console.log("Cold");
        } else {
            console.log("Very Cold");
        }
        if (!(Math.abs(guess - num) <= 5)) {
            triesLeft--;
            document.getElementById("guessCount").innerHTML = "Guesses Left: " + triesLeft;
        }
        document.getElementById("currGuess").innerHTML = "Guess: " + guess;
        console.log("Current Guess: " + guess + "\nGuesses Left: " + triesLeft);
    } else {
        if (Math.abs(guess - num) <= 5) {
            console.log("Very Hot");
        } else if (Math.abs(guess - num) <= 8 && Math.abs(guess - num) >= 6) {
            console.log("Hot");
        } else if (Math.abs(guess - num) <= 15 && Math.abs(guess - num) >= 9) {
            console.log("Very Warm");
        } else if (Math.abs(guess - num) <= 20 && Math.abs(guess - num) >= 16) {
            console.log("Warm");
        } else if (Math.abs(guess - num) <= 30 && Math.abs(guess - num) >= 21) {
            console.log("Cool");
        } else if (Math.abs(guess - num) <= 40 && Math.abs(guess - num) >= 31) {
            console.log("Very Cool");
        } else if (Math.abs(guess - num) <= 55 && Math.abs(guess - num) >= 41) {
            console.log("Cold");
        } else {
            console.log("Very Cold");
        }
        if (!(Math.abs(guess - num) <= 5)) {
            triesLeft--;
            document.getElementById("guessCount").innerHTML = "Guesses Left: " + triesLeft;
        }
        document.getElementById("currGuess").innerHTML = "Guess: " + guess;
        console.log("Current Guess: " + guess + "\nGuesses Left: " + triesLeft);
    }
}
document.getElementById("commit").onclick = function() {
    if (triesLeft >= 0 && gotIt) {
        console.log("Correct! The number is " + num + ".");
    } else {
        console.log("Incorrect! You have " + triesLeft + " guesses left.");
    }
}
document.getElementById("reset").onclick = function() {
    num = Math.round(Math.random() * 99) + 1;
    triesLeft = 5;
    guess = 50;
    gotIt = false;
    document.getElementById("guessCount").innerHTML = "Guesses Left: " + triesLeft;
    document.getElementById("currGuess").innerHTML = "Guess: " + guess;
    console.log("The game has been reset.");
}

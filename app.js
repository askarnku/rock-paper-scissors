let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");

const result_div = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    switch (letter) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissors";
    }
}


function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const user_div = document.getElementById(user);
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win!`;
    user_div.classList.add('green-glow');
    setTimeout(function () { user_div.classList.remove('green-glow') }, 200);

}



function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const user_div = document.getElementById(user);
    result_div.innerHTML = `${convertToWord(computer)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You lose!`;
    user_div.classList.add('red-glow');
    setTimeout(function () { user_div.classList.remove('red-glow') }, 200);
}

function draw(user, computer) {
    const smallUserWord = "user".fontsize(3).sup();
    const smallCompWord = "comp".fontsize(3).sup();
    const user_div = document.getElementById(user);
    result_div.innerHTML = `${convertToWord(user)}${smallUserWord} and ${convertToWord(computer)}${smallCompWord}. Draw!`;
    user_div.classList.add('gray-glow');
    setTimeout(function () { user_div.classList.remove('gray-glow') }, 200);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice, computerChoice);
            break;

    }
}


function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    });

    paper_div.addEventListener('click', function () {
        game("p");
    });

    scissors_div.addEventListener('click', function () {
        game("s");
    });


}

main();





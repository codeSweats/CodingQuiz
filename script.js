//List of all qustions, choices
let questions = [
    {
        q: "q1",
        answerchoices: ["a1", "b1", "c1", "d1"],
        a: "b1"
    },

    {
        q: "q2",
        answerchoices: ["a2", "b2", "c2", "d2"],
        a: "c2"
    },

    {
        q: "q3",
        answerchoices: ["a3", "b3", "c3", "d3"],
        a: "a3"
    },

    {
        q: "q4",
        answerchoices: ["a4", "b4", "c4", "d4"],
        a: "d4"
    },

    {
        q: "q5",
        answerchoices: ["a5", "b5", "c5", "d5"],
        a: "c5"
    }
];

// Some of the global variables
let questionIndex = 0;
let gameTime = 100;
let timerId = 0;
let startBtn = document.querySelector("#start-button");


//Variables to reference DOM elements
let quizEl = document.getElementById("quiz");
let timerEl = document.getElementById("remaining-time");
let answerchoicesEl = document.getElementById("multiple-choice");
let submitbtnEl = document.getElementById("submit-initials");
let startbtnEl = document.getElementById("start-button");
let initialsEl = document.getElementById("initials");
let quizresultsEl = document.getElementById("quiz-results");
let startPageEl = document.getElementById("start-page");

function setTime() {
    // Update time
        gameTime--;
        timerEl.textContent = gameTime + " until game is over!";

        if(gameTime <= 0) {
            // Finish Quiz
            finishQuiz();
        }
}

function finishQuiz () {
    //TBD
}
function beginQuiz () {
    // Hide the start page
    startPageEl.setAttribute("class", "hidden");

    // Unhide quiz div
    quizEl.removeAttribute("class");

    //Starting timer
    timerId = setInterval(setTime, 1000);

    //Showtime now
    timerEl.textContent = gameTime;

}
function finalScore() {

}

for(var i=0; i < questions.length; i++){
    var response = (questions[i]);
}

startbtnEl.onclick = beginQuiz;
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
let questionIndex = ;
let gameTime = 100;
let timerId = ;
let startBtn = document.querySelector("#start-button");


//Variables to reference DOM elements
let quizEl = document.getElementById("quiz");
let timerEl = document.getElementById("remaining-time");
let answerchoicesEl = document.getElementById("multiple-choice");
let submitbtnEl = document.getElementById("submit-initials");
let startbtnEl = document.getElementById("start-button");
let initialsEl = document.getElementById("initials");

function setTime() {
    // Sets interval in variable
    let timerInterval = setInterval(function(){
        gameTime--;
        timerEl.textContent = gameTime + " until game is over!";

        if(gameTime === 0) {
            //Stops the timer execution
            clearInterval(timerInterval);
            // Calls function to create and append input span
            finalScore();
        }
    }, 1000);
}

function finalScore() {
    
}

for(var i=0; i < questions.length; i++){
    var response = (questions[i]);
}

startBtn.addEventListener("click", setTime());
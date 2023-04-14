let questions= [
    {
        question: "How many wearable masks can you get in Majora's Mask?", 
        answers: [
            "12",
            "24",
            "32",
            "3",
        ],
        correctAnswer: "24",
    },
    {
        question: "What is the name of your companion in Twilight Princess?", 
        answers: [
            "Zelda",
            "Navi",
            "Ruto",
            "Midna",
        ],
        correctAnswer: "Midna",
    },
    {
        question: "How many medallions do you have to collect in Ocarina of Time?", 
        answers: [
            "4",
            "6",
            "8",
            "10",
        ],
        correctAnswer: "6",
    },
    {
        question: "What instrument do you use in Wind Waker?", 
        answers: [
            "Wind Waker",
            "Ocarina",
            "Harp",
            "Violin",
        ],
        correctAnswer: "Wind Waker",
    },
    {
        question: "What four mechanical constructs did Ganon corrupt in Breath of the Wild?", 
        answers: [
            "Magical Machines",
            "Proud Beings",
            "Divine Beasts",
            "Wild Warriors",
        ],
        correctAnswer: "Divine Beasts",
    },
];


let timerId;
let timeLeft= 150;
let currentIndex= 0;
let playAgainDiv=document.getElementById("playagain")
let rightWrong = document.getElementById("rightWrong");
let startButton= document.getElementById("start-btn");
let timeEl= document.getElementById("time");
let startDiv= document.getElementById("start-div");
let highscoresDiv= document.getElementById("highscores");
let questionsDiv= document.getElementById("questions-div");
let choicesDiv= document.getElementById("choices-div");
startButton.addEventListener("click", startQuiz);
choicesDiv.onclick= handleAnswerChoice;
let userInitials= "";
let playerScore = 0;
let player = {
    "initials" : userInitials, 
    "score" : playerScore,
};


let userScores = localStorage.setItem("scores", JSON.stringify(player));
let allPlayerScores = [];
let storedScores = JSON.parse(localStorage.getItem("scores"));
if (storedScores !== null){
    allPlayerScores = storedScores;
}; 

// let savedPlayer= localStorage.setItem("players", JSON.stringify(player));
// let savedPlayer= localStorage.getItem(savedPlayer);


function startQuiz(){
    // console.log("startQuiz")
    // start  timer 
    timerId= setInterval(timerFunc, 1000);
    timeEl.textContent=`TimeLeft: ${timeLeft}`;
    startDiv.setAttribute("class", "hide");
    questionsDiv.removeAttribute("class");
    showQuestion();

}

function endQuiz(){
    player.initials = prompt("Please enter your initials");
    player.score = timeLeft;
    
    localStorage.setItem("scores", JSON.stringify(player));
    // allPlayerScores.push(player);

    // let userScores = localStorage.setItem(userInitials, playerScore);
    // console.log(player)
    renderLastPlayer();
    // playAgain();
    // return userScores;
};

function handleAnswerChoice(event){
    // console.log ("answerChoice")
    let button= event.target;

    if (button.matches("answer")){
        return;
    }
    // console.log ("answerChoice1")

    if (button.value !== questions[currentIndex].correctAnswer){       
        rightWrong.textContent = "Wrong!"
        timeLeft-= 10;
        if(timeLeft < 0){
            timeLeft = 0;
        }
    } else {

        rightWrong.textContent = "Correct!"
    }
        

    currentIndex++; 

    timeEl.textContent=`TimeLeft: ${timeLeft}`;
    
    if (timeLeft <= 0 || currentIndex === questions.length){
        endQuiz();
        clearInterval(timerId);
    } else {
        showQuestion();
    }
}

function showQuestion(){
    let currentQuestion= questions[currentIndex];
    let questionEl= document.getElementById("question");
    questionEl.textContent= currentQuestion.question;

    choicesDiv.innerHTML= "";

    for (let i = 0; i < currentQuestion.answers.length; i++){
        let answer= currentQuestion.answers[i];
        let answerBtn= document.createElement("button");
        answerBtn.setAttribute("class", "answer");
        answerBtn.setAttribute("value", answer);
        answerBtn.textContent= i + 1 + " . " + answer;
     
        choicesDiv.appendChild(answerBtn);

    }
}

function timerFunc(){
    timeLeft--;
    timeEl.textContent=`TimeLeft: ${timeLeft}`;

}

function renderLastPlayer() {
    let player = JSON.parse(localStorage.getItem("scores"));
    let lastUserInitials = player.initials;
    let lastUserScore = player.score;
    let initialDiv= document.createElement("h3");
    let scoreDiv = document.createElement("h3");
    initialDiv.setAttribute("class", "highscore");
    scoreDiv.setAttribute("class", "highscore");
    initialDiv.textContent= `User Initials: ${lastUserInitials}`;
    scoreDiv.textContent= `High Score: ${lastUserScore}`;
    highscoresDiv.appendChild(initialDiv);
    highscoresDiv.appendChild(scoreDiv);
    // playAgain();
    // console.log(lastPlayer);
    // let savedPlayer= JSON.parse(localStorage.getItem(savedPlayer));
    // console.log(savedPlayer);
    // highscoresDiv.textContent = playerId + " : " + lastUserScore;
}

// function playAgain(){
//     let playAgainButton = document.createElement("Button");
//     playAgainButton.setAttribute("class", "playagainbutton");
//     playAgainButton.textContent="Play Again?";
//     playAgainDiv.appendChild(playAgainButton);
    
//     // timeLeft= 150;
//     // currentIndex= 0;

//     playAgainButton.addEventListener("click", startQuiz());


// }

let questions= [
    {
        question: "question 1", 
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4",
        ],
        correctAnswer: "answer 2",
    },
    {
        question: "question 2", 
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4",
        ],
        correctAnswer: "answer 4",
    },
    {
        question: "question 3", 
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4",
        ],
        correctAnswer: "answer 2",
    },
    {
        question: "question 4", 
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4",
        ],
        correctAnswer: "answer 1",
    },
    {
        question: "question 5", 
        answers: [
            "answer 1",
            "answer 2",
            "answer 3",
            "answer 4",
        ],
        correctAnswer: "answer 3",
    },
];

let timerId;
let timeLeft= 150;
let currentIndex= 0;


let startButton= document.getElementById("start-btn");
let timeEl= document.getElementById("time");
let startDiv= document.getElementById("start-div");
let questionsDiv= document.getElementById("questions-div");
let choicesDiv= document.getElementById("choices-div");
startButton.addEventListener("click", startQuiz);

function startQuiz(){
    console.log("startQuiz")
    // start  timer 
    timerId= setInterval(timerFunc, 1000);
    timeEl.textContent=`TimeLeft: ${timeLeft}`;
    startDiv.setAttribute("class", "hide");
    questionsDiv.removeAttribute("class");
    showQuestion();

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
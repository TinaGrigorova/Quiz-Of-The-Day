const questions = [
    {
        question: "Where is the biggest lake?", 
        answers: [
            {text: "Bulgaria", correct: false},
            {text: "Canada", correct: false},
            {text: "Asia", correct: true},
            {text: "Australia", correct: false},
        ]
    }, 
    {
        question: "Which is the smallest country?", 
        answers:[
            {text: "Vatican", correct: true},
            {text: "Luxembourg", correct: false},
            {text: "Monaco", correct: false},
            {text: "Liechtenstein", correct: false},
        ]

    },
    {
        question: "Where is the highest island mountain?", 
        answers:[
            {text: "Taiwan - Yu Shan", correct: false},
            {text: "Tenerife - Teide", correct: false},
            {text: "Sri Lanka - Pidurutalagala", correct: false},
            {text: "New Guinea - Puncak Jaya", correct: true},
        ]

    }
    
];
const questionElement = document.getElementById("questions");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score= 0;


function startQuiz(){

}
function showQuestions(){

}
function resetState(){

}
function selectAnswer(){

}
console.log("still connected!");
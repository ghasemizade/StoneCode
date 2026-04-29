
const questions = [
    {q: "what is a water formula?", answer: "h2o"},
    {q: "name of the highest mountain in the world?", answer: "everest"},
    {q: "capital of Canada?", answer: "otava"},
    {q: "biggest century?", answer: "asia"},
]
let correctAnswers = questions.map(answer => answer.answer);
let answers = [];
let score = 0;

function askQ(questions, answers) {
    for (let i = 0; i < questions.length; i++) {
        answers[i] = prompt(questions[i].q)
    }
}

console.log(correctAnswers);

function evalScore(correctAnswers, answers, score){
    for (let i = 0; i < answers.length; i++) {        
        if (correctAnswers[i] === answers[i]) {
            score += 1;
        }
    }

    console.log(`you score is ${score}`);
    
}


askQ(questions, answers);
evalScore(correctAnswers, answers, score)

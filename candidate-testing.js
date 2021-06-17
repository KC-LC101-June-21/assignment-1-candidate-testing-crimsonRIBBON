const input = require(`readline-sync`);

// TODO 2: modify your quiz app to ask 5 questions // 

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ("Who was the first American woman in space? ");
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = ["1) Who was the first American woman in space?","2) True or False: 5 kilometer == 5000 meters?","3) (5+3)/2*10=?","4) Given the array [8,'Orbit','Trajectory',45], what entry s at index 2?","5) What is the minimum crew size for the ISS"];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [ ];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
 candidateName = input.question('Candidate Name: ');
 console.log(`\nCandidate Name: ${candidateName}`);
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
 
 for (let i = 0; i < questions.length;i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(candidateAnswer);

    console.log(`Correct answer: ${correctAnswers[i]}\nYour answer: ${candidateAnswers[i]}\n`);
}


} 

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let numberOfCorrectAnswers = [];

  

  for (let i = 0; i < candidateAnswers.length;i++){
    let lowerCaseCandidateAnswers = candidateAnswers[i].toLowerCase();
    let lowerCaseCorrectAnswers = correctAnswers[i].toLowerCase();
    if (lowerCaseCandidateAnswers === lowerCaseCorrectAnswers){
    numberOfCorrectAnswers.push(candidateAnswers[i]);}
  }


  let grade = (numberOfCorrectAnswers.length / questions.length * 100);

// make answers case insisitive when checking
// dont alter origional correct answer
let stats = [];

if (grade >= 80) { 
  stats.push('PASSED');
} else {stats.push('FAILED');}
  
console.log(`>>> Overall Grade: ${grade}% (${numberOfCorrectAnswers.length} of ${candidateAnswers.length} responses correct) <<<\n>>> Status: ${stats} <<<`)

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Welcome ' + candidateName + '!')
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
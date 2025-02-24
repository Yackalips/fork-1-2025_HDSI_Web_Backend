let interest = {
    Creativity: { weight: 0.1 },
    Adventure: { weight: 0.1 },
    Innovation: { weight: 0.1 },
    Exploration: { weight: 0.1 },
    Connection: { weight: 0.1 },
    Learning: { weight: 0.1 },
    Expression: { weight: 0.1 },
    Technology: { weight: 0.1 },
    Strategy: { weight: 0.1 },
    Culture: { weight: 0.1 },
    Growth: { weight: 0.1 },
    Leadership: { weight: 0.1 },
    Challenge: { weight: 0.1 },
    Community: { weight: 0.1 },
    Fun: { weight: 0.1 },
    Balance: { weight: 0.1 },
    Socializing: { weight: 0.1 },
    Collaboration: { weight: 0.1 },
    Change: { weight: 0.1 },
    ProblemSolving: { weight: 0.1 },
    Impact: { weight: 0.1 },
    Curiosity: { weight: 0.1 },
    Happiness: { weight: 0.1 },
  };

let questions = {
    1: new Question("Which of these do you prioritize", ["creativity"], false)
}
  
{
  questions[1].setChoice(0, interest.Impact, 0.2);
}


function takeQuiz() {
    
}

function takeAIQuiz() {

}
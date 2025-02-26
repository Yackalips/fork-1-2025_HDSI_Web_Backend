let interest = {
  Creativity: {},
  Adventure: {},
  Innovation: {},
  Exploration: {},
  Connection: {},
  Learning: {},
  Expression: {},
  Technology: {},
  Strategy: {},
  Culture: {},
  Growth: {},
  Leadership: {},
  Challenge: {},
  Community: {},
  Fun: {},
  Balance: {},
  Socializing: {},
  Collaboration: {},
  Change: {},
  ProblemSolving: {},
  Impact: {},
  Curiosity: {},
  Happiness: {},
  Sports: {},
  Coding: {},
  Art: {},
  MentalHealth: {},
  Math: {},
  Science: {},
  History: {},
  Film: {},
  Language: {},
  Discussion: {},
  Debate: {},
  Politics: {},
  Outdoors: {},


};

for(let key in interest) {
  interest[key].weight = 0.1;
}

let questions = {
    1: new Question("Out of the following, select what you enjoy most in your free time", ["Spending time with nature", "Working on a project", "Hanging out with friends", "Playing sports"], false)
      .setChoice(0, interest.Exploration, 0.4)
      .setChoice(0, interest.Outdoors, 0.4)
      .setChoice(1, interest.Innovation, 0.35)
      .setChoice(1, interest.Creativity, 0.3)
      .setChoice(1, interest.Learning, 0.25)
      .setChoice(2, interest.Socializing, 0.4)
      .setChoice(2, interest.Discussion, 0.1)
      .setChoice(2, interest.Debate, 0.1)
      .setChoice(2, interest.Expression, 0.15)
      .setChoice(2, interest.Community, 0.3)
      .setChoice(3, interest.Sports, 0.7)
      .setChoice(3, interest.Outdoors, 0.5),
    
    2: new Question("What's your favorite way to collaborate with others?", ["Through discussions, debates, or brainstorming sessions", "Through teamwork in competitive sports or fitness challenges", "Through collaborative creative projects like painting or writing", "Through group activities like hiking, camping, or environmental cleanups"], false)
      .setChoice(0, interest.Debate, 0.3)
      .setChoice(0, interest.Discussion, 0.3)
      .setChoice(0, interest.Community, 0.2)
      .setChoice(1, interest.Sports, 0.3)
      .setChoice(1, interest.Collaboration, 0.2)
      .setChoice(1, interest.Outdoors, 0.1)
      .setChoice(2, interest.Creativity, 0.35)
      .setChoice(2, interest.Art, 0.3)
      .setChoice(2, interest.Language, 0.25)
      .setChoice(3, interest.Exploration, 0.45)
      .setChoice(3, interest.Outdoors, 0.5)
      .setChoice(3, interest.Community, 0.3),
    
}
  


function takeQuiz() {
    
}

function takeAIQuiz() {

}

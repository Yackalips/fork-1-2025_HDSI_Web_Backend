
const readline = require('readline');
const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

class Question {
    chosenAnswer;
    question;
    choices;
    isMultipleChoice;
    tags;
    weights;
    

    constructor(question, choices, isMultipleChoice) {
        this.question = question;
        this.choices = choices;
        this.isMultipleChoice = isMultipleChoice;
        this.tags = array[choices.length];
        this.weights = array[choices.length];
    }

    setChoice(choiceNum, tag, weight) {
        interests[choiceNum].push(tag);
        weights[choiceNum].push(weight);
    }


    askQuestion() {
        num = null;
        while(!Number.isInteger(num) && (num < 0 && num >= this.choices.length)) {
        userInput.question(question, (input) => {
                num = input;
                if(!Number.isInteger(num) && (num < 0 && num >= this.choices.length)) {
                    console.log("Invalid answer");
                }

            });
        }
        this.chosenAnswer = num;
        
    }

    getTags() {
        return tags[this.chosenAnswer];
    }

    getWeights() {
        return weights[this.chosenAnswer];
    }
}

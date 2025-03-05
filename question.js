import readline from 'readline';

const userInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  

export class Question {
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
        this.tags = new Array(choices.length);
        this.weights = new Array(choices.length);
    }

    setChoice(choiceNum, tags, weight) {
        this.tags[choiceNum] = tags;
        this.weights[choiceNum] = weight;
        return this;
    }


    askQuestion() {
        let num = null; // Declare num properly inside the function
        return new Promise((resolve) => {
            const validateInput = () => {
                userInput.question(this.question, (input) => {
                    num = parseInt(input, 10);
                    if (Number.isInteger(num) && num >= 0 && num < this.choices.length) {
                        this.chosenAnswer = num;
                        resolve(); // Resolve the promise when a valid answer is provided
                    } else {
                        console.log("Invalid answer, try again.");
                        validateInput(); // Recursive call if input is invalid
                    }
                });
            };
            validateInput();
        });
    }
    

    getTags() {
        return this.tags[this.chosenAnswer];
    }

    getWeights() {
        return this.weights[this.chosenAnswer];
    }
}


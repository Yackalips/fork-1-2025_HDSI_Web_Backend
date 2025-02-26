class Question {
    question;
    choices;
    isMultipleChoice;
    interests;
    weights;
    

    constructor(question, choices, isMultipleChoice) {
        this.question = question;
        this.choices = choices;
        this.isMultipleChoice = isMultipleChoice;
        this.interests = array[choices.length];
        this.weights = array[choices.length];
    }

    setChoice(choiceNum, interest, weight) {
        interests[choiceNum].push(interest);
        weights[choiceNum].push(weight);
    }

    selectChoice(...choiceNums) {
        if(this.isMultipleChoice) {
            choiceNums.forEach(function(choiceNum, index) {
                interests[index].weight += weights[index];
            });
        }
        else {
            interests[choiceNums[0]].weight += weights[choiceNums[0]];
        }
    }
}

class Question {
    question;
    answers;
    isMultipleChoice;
    choiceNums;

    constructor(question, choices, isMultipleChoice) {
        this.question = question;
        this.answers = choices;
        this.isMultipleChoice = isMultipleChoice;
    }

    selectedChoices(choiceNums) {
        this.choiceNums = choiceNums;
    }
}
//create a class Questionnaire
//has a property called questions
//that starts as an empty array
//has a method on the class to add
//a question object to the array
const Question = require("./Question");

class Questionnaire {
    constructor() {
        this.questions = [];
    }

    addQuestion(question) {
        if (question.constructor.name === "Question") {
            this.questions.push(question);
        }
    }

    translateRawQuestionJSON(questionJSON){
        
    }
}

module.exports = Questionnaire;
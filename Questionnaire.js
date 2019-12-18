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
        //parse questionJSON and save in variable
        const parsedJSON = JSON.parse(questionJSON);
        //loop through the objects in the array
        for (let entry of parsedJSON) {
            const { text, options } = entry;
            //create a new question object use the text property
            const question = new Question(text);

            //loop through options
            for (let option of options) {
                //add option to question
                question.addOption(option);
            }

            //add completed question to the questionnaire questions property
            this.addQuestion(question);
        }       
    }

    //add another method named run
        //loop through the questions in the question list
        //ask the user the question
        //retrieve their response
        //console.log their response
}

module.exports = Questionnaire;
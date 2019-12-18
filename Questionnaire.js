//create a class Questionnaire
//has a property called questions
//that starts as an empty array
//has a method on the class to add
//a question object to the array
const Question = require("./Question");
const readLineSync = require("readline-sync");

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

    run() {
        const queries = [];
        
        for (let question of this.questions) {
            const {text, options} = question;

            const values = options.map((response) => {
                return response.value;
            });

            const index = readLineSync.keyInSelect(values, text, { cancel: false });
            const query = options[index].query;
            
            queries.push(query);
        }

        return queries;
    }
}

module.exports = Questionnaire;
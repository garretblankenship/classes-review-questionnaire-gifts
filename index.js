const questionJSON = require("./questions.json");
const Questionnaire = require("./Questionnaire");

console.log(questionJSON);

const kidsXmasGiftsQuestionnaire = new Questionnaire();
kidsXmasGiftsQuestionnaire.translateRawQuestionJSON(questionJSON);

kidsXmasGiftsQuestionnaire.addQuestion(question1);

console.log(kidsXmasGiftsQuestionnaire.questions);
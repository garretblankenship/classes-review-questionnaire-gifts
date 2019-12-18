const questionJSON = require("./questions.json");
const Questionnaire = require("./Questionnaire");

console.log(JSON.parse(questionJSON));

const kidsXmasGiftsQuestionnaire = new Questionnaire();
kidsXmasGiftsQuestionnaire.translateRawQuestionJSON(questionJSON);

console.log(kidsXmasGiftsQuestionnaire.questions);
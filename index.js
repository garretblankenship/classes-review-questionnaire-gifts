const questionJSON = require("./questions.json");
const Questionnaire = require("./Questionnaire");

const kidsXmasGiftsQuestionnaire = new Questionnaire();
kidsXmasGiftsQuestionnaire.translateRawQuestionJSON(questionJSON);

const queries = kidsXmasGiftsQuestionnaire.run();

//create another class in another file called GiftList that upon object creation takes in an
//array of queries
//save those queries in a queries property

console.log(queries);
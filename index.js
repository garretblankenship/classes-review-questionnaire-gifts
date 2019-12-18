const questionJSON = require("./questions.json");
const Questionnaire = require("./Questionnaire");
const GiftList = require("./GiftList");

(async () => {
    const kidsXmasGiftsQuestionnaire = new Questionnaire();
    kidsXmasGiftsQuestionnaire.translateRawQuestionJSON(questionJSON);

    const queries = kidsXmasGiftsQuestionnaire.run();

    const kidsGiftList = new GiftList(queries);

    await kidsGiftList.getGiftsFromQueries();

    console.log(kidsGiftList.list);
})()

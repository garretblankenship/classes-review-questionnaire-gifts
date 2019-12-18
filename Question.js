//create a Question class
//when creating a new question object it takes 2 properties
//text, options


class Question {
    constructor(text) {
        this.text = text;
        this.options = [];
    }

    addOption(option) {
        if (!option.value || !option.query) {
            throw new Error("option must have value and query properies");
        }

        this.options.push(option);
    }
}

module.exports = Question;
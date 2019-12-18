const Gift = require("./Gift");
const axios = require("axios");
const { randomDistinctNumbers } = require("./utility_service");

class GiftList {
    constructor(queries) {
        this.queries = queries;
        this.list = [];
        this.getGiftsFromQueries();
    }

    addGift(gift) {
        if (gift.constructor.name === "Gift") {
            this.list.push(gift);
        }
    }

    async getGiftsFromQueries() {
        const url = "https://openapi.etsy.com/v2/listings/active?api_key=0cybldlljac0tj4lsic7bnkb&limit=5";

        const promises = [];

        for(let query of this.queries) {
            promises.push(
                axios.get(url + `&keywords=${query}`)
            );
        }

        try {
            let responses = await Promise.all(promises);
                
            for(let response of responses) {
                const { results } = response.data;
                const indexes = randomDistinctNumbers(results.length);

            }
        } catch(error) {
            console.log(error);
        }
          
    }
    
    createGiftsFromResultsIndexes(indexes, results) {
        for(let index of indexes) {
            let {} = results[index];
        }
    }
}

module.exports = GiftList;
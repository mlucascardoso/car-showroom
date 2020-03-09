// const { MissingParamError, InvalidParamError } = require('../helper/error');
const HttpResponse = require('../helpers/http/response');

module.exports = class ArticleService {
    /**
   * @constructor
   */
    constructor() { }

    /**
     *
     * @param {object} httpRequest
     * @return {Promise<object>}
     */
    async findAll(httpRequest) {
        try {
            // const body = httpRequest.body;

            return HttpResponse.success({ articles: [], count: 0 });
        } catch (err) {
            return HttpResponse.serverError();
        }
    }
};

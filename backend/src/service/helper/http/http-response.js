const { ServerError } = require('../error');

module.exports = class HttpResponse {
    /**
   * @param {object} data
   * @return {object}
   */
    static success(data) {
        return {
            statusCode: 200,
            body: data
        };
    }

    /**
   * @param {object} error
   * @return {object}
   */
    static badRequest(error) {
        return {
            statusCode: 400,
            body: {
                error: error.message
            }
        };
    }

    /**
   * @return {object}
   */
    static serverError() {
        return {
            statusCode: 500,
            body: {
                error: new ServerError().message
            }
        };
    }
};

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
   * @param {Array} validationErrors
   * @return {object}
   */
    static badRequest(validationErrors) {
        return {
            statusCode: 400,
            body: {
                errors: validationErrors.map(err => {
                    return {
                        field: err.param, message: err.msg
                    };
                })
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

const { ServerError } = require('../errors');

module.exports = class HttpResponse {
    /**
   * @param {object} data
   * @return {object}
   */
    static success(data) {
        if (!data) {
            return HttpResponse.serverError();
        }

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
        if (!validationErrors || validationErrors.length <= 0) {
            return HttpResponse.serverError();
        }

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
                errors: new ServerError().message
            }
        };
    }
};

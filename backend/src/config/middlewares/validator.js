const { validationResult } = require('express-validator');

const HttpResponse = require('../../helpers/http/response');

module.exports = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }

    const response = HttpResponse.badRequest(errors.array());

    return res.status(response.statusCode).json(response);
};

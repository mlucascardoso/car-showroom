const { check, query } = require('express-validator');

const { InvalidParamError, MissingParamError } = require('../../helpers/errors');
const { dateValidator } = require('../../helpers/validators');

const createValidator = () => {
    return check('name')
        .exists()
        .withMessage(new MissingParamError('name').message)
        .isLength({ min: 5 })
        .withMessage(new InvalidParamError('name').message);
};

const findAllValidator = () => {
    return [
        query('publisher_date')
            .optional()
            .custom(dateValidator)
            .withMessage(new InvalidParamError('publisher_date').message),
    ];
};

module.exports = {
    createValidator,
    findAllValidator
};

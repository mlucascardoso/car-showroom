const { check, param, query } = require('express-validator');

const { InvalidParamError, MissingParamError } = require('../../helper/error');
const { dateValidator } = require('../../helper/validator');

const findAllValidator = () => {
    return [
        query('publisher_date')
            .optional()
            .custom(dateValidator)
            .withMessage(new InvalidParamError('publisher_date').message),
    ];
};

const createValidator = () => {
    return [
        check('name')
            .exists()
            .withMessage(new MissingParamError('name').message),
        check('author')
            .exists()
            .withMessage(new MissingParamError('author').message),
        check('content')
            .exists()
            .withMessage(new MissingParamError('content').message),
        check('publisher_date')
            .exists()
            .withMessage(new MissingParamError('publisher_date').message)
            .custom(dateValidator)
            .withMessage(new InvalidParamError('publisher_date').message)
    ];
};

const findByIdValidator = () => {
    return [
        param('id')
            .isInt()
            .withMessage(new InvalidParamError('id').message)
    ];
};

const destroyValidator = () => {
    return [
        param('id')
            .isInt()
            .withMessage(new InvalidParamError('id').message)
    ];
};

module.exports = {
    createValidator,
    destroyValidator,
    findAllValidator,
    findByIdValidator,
};

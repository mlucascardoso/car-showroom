const router = require('express').Router();

const { create, destroy, findById, findAll } = require('../../config/adapters/express-router-adapter');
const validate = require('../../config/middlewares/validator');
const ArticleService = require('../../service/article-service');
const { createValidator, destroyValidator, findAllValidator, findByIdValidator } = require('./validators');

module.exports = (app) => {
    const service = new ArticleService();

    app.use('/articles', router);

    router.get('/', findAllValidator(), validate, findAll(service));
    router.post('/', createValidator(), validate, create(service));

    router.get('/:id', findByIdValidator(), validate, findById(service));
    router.delete('/:id', destroyValidator(), validate, destroy(service));
};

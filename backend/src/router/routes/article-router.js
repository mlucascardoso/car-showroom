const router = require('express').Router();

const ArticleService = require('../../service/article-service');
const { create, findById, findAll } = require('../../config/adapters/express-router-adapter');

module.exports = (app) => {
    const service = new ArticleService();

    app.use('/article', router);

    router.get('/', findAll(service));
    router.get('/:id', findById(service));

    router.post('/', create(service));
};

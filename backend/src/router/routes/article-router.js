const router = require('express').Router();

const { create, findById, findAll } = require('../../config/adapters/express-router-adapter');
const ArticleService = require('../../service/article-service');

module.exports = (app) => {
    const service = new ArticleService();

    app.use('/articles', router);

    router.get('/', findAll(service));
    router.get('/:id', findById(service));

    router.post('/', create(service));
};

const router = require('express').Router();

const { create, findAll } = require('../../config/adapters/express-router-adapter');
const validate = require('../../config/middlewares/validator');
const BrandService = require('../../services/brand-service');
const { createValidator, findAllValidator } = require('./validators');

module.exports = (app) => {
    const service = new BrandService();

    app.use('/brands', router);

    router.get('/', findAllValidator(), validate, findAll(service));
    router.post('/', createValidator(), validate, create(service));
};

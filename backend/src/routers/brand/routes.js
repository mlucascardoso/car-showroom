const router = require('express').Router();

const { create, findAll, update } = require('../../config/adapters/express-router-adapter');
const validate = require('../../config/middlewares/validator');
const { Brand } = require('../../models');
const BrandService = require('../../services/brand-service');
const { createValidator, findAllValidator, updateValidator } = require('./validators');

module.exports = (app) => {
    const service = new BrandService({ model: Brand });

    app.use('/brands', router);

    router.get('/', findAllValidator(), validate, findAll(service));
    router.post('/', createValidator(), validate, create(service));

    router.put('/:id', updateValidator(), validate, update(service));
};

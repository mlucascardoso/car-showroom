const router = require('express').Router();

const { create, destroy, findAll, findById, update } = require('../../config/adapters/express-router-adapter');
const validate = require('../../config/middlewares/validator');
const { Brand } = require('../../models');
const BrandService = require('../../services/brand-service');
const { createValidator, destroyValidator, findAllValidator, findByIdValidator, updateValidator } = require('./validators');

module.exports = (app) => {
    const service = new BrandService({ model: Brand });

    app.use('/brands', router);

    router.get('/', findAllValidator(), validate, findAll(service));
    router.post('/', createValidator(), validate, create(service));

    router.get('/:id', findByIdValidator(), validate, findById(service));
    router.put('/:id', updateValidator(), validate, update(service));
    router.delete('/:id', destroyValidator(), validate, destroy(service));
};

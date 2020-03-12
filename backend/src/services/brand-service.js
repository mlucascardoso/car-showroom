const { paginator } = require('../helpers/database');
const { HttpResponse } = require('../helpers/http');

module.exports = class BrandService {
    /**
     *
     * @param {object} options
     * @constructor
     */
    constructor({ model }) {
        this.model = model;
    }

    /**
     *
     * @param {object} httpRequest
     * @return {object}
     */
    async findAll({ getParams }) {
        try {
            const { limit, offset } = paginator({
                page: getParams.page, limit: getParams.limit
            });

            const rows = await this.model.findAll({
                limit,
                offset
            });

            const count = await this.model.count();

            return HttpResponse.success({
                count,
                rows
            });
        } catch (err) {
            return HttpResponse.serverError();
        }
    }

    /**
     *
     * @param {object} httpRequest
     */
    async findById({ routeParams }) {
        try {
            const brand = await this.model.findByPk(routeParams.id);

            return HttpResponse.success(brand);
        } catch (err) {
            return HttpResponse.serverError();
        }
    }

    /**
     *
     * @param {object} httpRequest
     * @return {object}
     */
    async create({ bodyParams }) {
        try {
            let brand = await this.model.findOne({
                where: { name: bodyParams.name }
            });

            if (!brand) {
                brand = await this.model.create({ name: bodyParams.name });
            }

            return HttpResponse.success(brand);
        } catch (err) {
            return HttpResponse.serverError();
        }
    }

    /**
     *
     * @param {object} httpRequest
     * @return {object}
     */
    async update({ routeParams, bodyParams }) {
        try {
            await this.model.update(
                { name: bodyParams.name },
                {
                    where: { id: routeParams.id },
                }
            );

            const brand = await this.model.findByPk(routeParams.id);

            return HttpResponse.success(brand);
        } catch (err) {
            return HttpResponse.serverError();
        }
    }

    /**
     *
     * @param {object} httpRequest
     */
    async destroy({ routeParams }) {
        try {
            const deletedBrand = await this.model.destroy({ where: { id: routeParams.id } });

            return HttpResponse.success({ success: !!deletedBrand });
        } catch (err) {
            return HttpResponse.serverError();
        }
    }
};

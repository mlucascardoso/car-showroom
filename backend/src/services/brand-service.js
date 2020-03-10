const { HttpResponse } = require('../helpers/http');
const { Brand } = require('../models');

module.exports = class BrandService {
    /**
     * @constructor
     */
    constructor() {
        this.model = Brand;
    }

    /**
     *
     * @param {object} httpRequest
     * @return {object}
     */
    async findAll(httpRequest) {
        try {
            return HttpResponse.success({});
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
            const { id } = await this.model.create({ name: bodyParams.name });

            const brand = await this.model.findByPk(id);

            return HttpResponse.success(brand);
        } catch (err) {
            return HttpResponse.serverError();
        }
    }
};

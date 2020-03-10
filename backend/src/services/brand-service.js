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
            const brands = await this.model.findAndCountAll();

            return HttpResponse.success(brands);
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
};

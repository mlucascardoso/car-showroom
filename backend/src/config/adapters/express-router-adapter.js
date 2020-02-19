module.exports = class ExpressRouterAdapter {
    /**
     *
     * @param {object} service
     * @return {void}
     */
    static findById(service) {
        return async (req, res) => {
            const httpRequest = {
                body: req.params
            };
            const httpResponse = await service.findById(httpRequest);

            res.status(httpResponse.statusCode).json(httpResponse);
        };
    }

    /**
     *
     * @param {object} service
     * @return {void}
     */
    static findAll(service) {
        return async (req, res) => {
            const httpRequest = {
                body: req.query
            };
            const httpResponse = await service.findAll(httpRequest);

            res.status(httpResponse.statusCode).json(httpResponse);
        };
    }

    /**
     *
     * @param {object} service
     * @return {void}
     */
    static create(service) {
        return async (req, res) => {
            const httpRequest = {
                body: req.body
            };

            const httpResponse = await service.create(httpRequest);

            res.status(httpResponse.statusCode).json(httpResponse);
        };
    }

    /**
     *
     * @param {object} service
     * @return {void}
     */
    static update(service) {
        return async (req, res) => {
            const httpRequest = {
                params: req.params,
                body: req.body
            };

            const httpResponse = await service.update(httpRequest);

            res.status(httpResponse.statusCode).json(httpResponse);
        };
    }

    /**
     *
     * @param {object} service
     * @return {void}
     */
    static delete(service) {
        return async (req, res) => {
            const httpRequest = {
                params: req.params
            };

            const httpResponse = await service.delete(httpRequest);

            res.status(httpResponse.statusCode).json(httpResponse);
        };
    }
};

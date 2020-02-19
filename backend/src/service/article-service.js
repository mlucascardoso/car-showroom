const { MissingParamError, InvalidParamError } = require('../helper/error');
const HttpResponse = require('../helper/http/http-response');
const { date } = require('../helper/validator');
const ArticleRepository = require('../repository/article-repository');

module.exports = class ArticleService {
    /**
   * @constructor
   */
    constructor() {
        this._repository = new ArticleRepository();
    }

    /**
     *
     * @param {object} httpRequest
     * @return {Promise<object>}
     */
    async findAll(httpRequest) {
        try {
            const body = httpRequest.body;

            if (body.publisher_date) {
                if (!date.isValid(body.publisher_date)) {
                    return HttpResponse.badRequest(new InvalidParamError('publisher_date'));
                }

                body.publisher_date = date.format(body.publisher_date);
            }

            const criteria = this.defaultSearchCriteria(body);
            const options = { criteria, pagination: { page: body.page, limit: body.limit } };

            const articles = await this._repository.findAll(options);
            const count = await this._repository.countAll(options);

            return HttpResponse.success({ articles, count });
        } catch (err) {
            return HttpResponse.serverError();
        }
    }

    /**
     *
     * @param {object} httpRequest
     * @return {Promise<object>}
     */
    async findById(httpRequest) {
        try {
            if (!httpRequest.body.id) {
                return HttpResponse.badRequest(new MissingParamError('id'));
            }

            if (isNaN(parseInt(httpRequest.body.id))) {
                return HttpResponse.badRequest(new InvalidParamError('id'));
            }

            const data = await this._repository.findById(parseInt(httpRequest.body.id));

            return HttpResponse.success(data);
        } catch (err) {
            return HttpResponse.serverError();
        }
    }

    /**
     *
     * @param {object} httpRequest
     * @return {Promise<object>}
     */
    async create(httpRequest) {
        try {
            const body = httpRequest.body;

            if (!body.name) {
                return HttpResponse.badRequest(new MissingParamError('name'));
            }

            if (!body.author) {
                return HttpResponse.badRequest(new MissingParamError('author'));
            }

            if (!body.content) {
                return HttpResponse.badRequest(new MissingParamError('content'));
            }

            if (!body.publisher_date) {
                return HttpResponse.badRequest(new MissingParamError('publisher_date'));
            }

            if (!date.isValid(body.publisher_date)) {
                return HttpResponse.badRequest(new InvalidParamError('publisher_date'));
            }

            body.publisher_date = date.format(body.publisher_date);

            const criteria = this.defaultSearchCriteria(body);

            const articleExists = await this._repository.find(criteria);
            if (articleExists.length > 0) {
                return HttpResponse.badRequest(new Error('Article already exists'));
            }

            const result = await this._repository.create(body);

            return HttpResponse.success({ success: result });
        } catch (err) {
            return HttpResponse.serverError();
        }
    }

    // /**
    //  *
    //  * @param {object} httpRequest
    //  * @return {Promise<object>}
    //  */
    // async update(httpRequest) {
    //     try {
    //         const { name, author, content, publisherdate } = httpRequest.body;


    //     } catch (err) {
    //         return HttpResponse.serverError();
    //     }
    // }

    /**
     *
     * @param {object} httpRequest
     * @return {Promise<object>}
     */
    async delete(httpRequest) {
        try {
            if (!httpRequest.body.id) {
                return HttpResponse.badRequest(new MissingParamError('id'));
            }

            if (isNaN(parseInt(httpRequest.body.id))) {
                return HttpResponse.badRequest(new InvalidParamError('id'));
            }

            const result = await this._repository.delete(parseInt(httpRequest.body.id));

            return HttpResponse.success({ success: result });
        } catch (err) {
            return HttpResponse.serverError();
        }
    }

    /**
     * @return {Promise<object>}
     */
    async deleteMany() {
        try {
            const result = await this._repository.deleteMany();

            return HttpResponse.success({ success: result });
        } catch (err) {
            return HttpResponse.serverError();
        }
    }

    /**
     * @param {object} article
     * @return {object}
     */
    defaultSearchCriteria({ name, author, content, publisher_date }) {
        const criteria = { deletion_flag: { isNull: null } };

        if (name) {
            criteria.name = { equals: name };
        }

        if (author) {
            criteria.author = { equals: author };
        }

        if (content) {
            criteria.content = { contains: content };
        }

        if (publisher_date) {
            criteria.publisher_date = { equals: date.format(publisher_date) };
        }

        return criteria;
    }
};

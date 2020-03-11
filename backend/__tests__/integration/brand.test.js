const faker = require('faker');
const superRequest = require('supertest');

const app = require('../../src/app')();
const { InvalidParamError, MissingParamError, ServerError } = require('../../src/helpers/errors');
const BrandService = require('../../src/services/brand-service');
const factory = require('../factories');
const truncate = require('../utils/truncate');

const makeSut = () => {
    return {
        request: superRequest(app),
        service: makeService(),
        serviceWithError: makeServiceWithError()
    };
};

const makeService = () => {
    return new BrandService();
};

const makeServiceWithError = () => {
    const service = new BrandService();
    service.model = null;
    return service;
};

describe('Brands', () => {
    beforeEach(async () => {
        await truncate();
    });

    describe('Create', () => {
        it('should throw error on failure', async () => {
            const { serviceWithError } = makeSut();
            const response = await serviceWithError.create({});

            expect(response.statusCode).toBe(500);
            expect(response.body).toEqual(
                expect.objectContaining({
                    errors: new ServerError().message
                })
            );
        });

        it('should return bad request error if name is not provided', async () => {
            const { request } = makeSut();

            const response =
                await request
                    .post('/api/brands');

            expect(response.status).toBe(400);
            expect(response.body).toEqual(
                expect.objectContaining({
                    body: expect.objectContaining({
                        errors: expect.arrayContaining([
                            expect.objectContaining({
                                field: 'name',
                                message: new MissingParamError('name').message
                            })
                        ])
                    })
                })
            );
        });

        it('should return bad request error if name is too short', async () => {
            const { request } = makeSut();

            const response =
                await request
                    .post('/api/brands')
                    .send({
                        name: 'abcd'
                    });

            expect(response.status).toBe(400);
            expect(response.body).toEqual(
                expect.objectContaining({
                    body: expect.objectContaining({
                        errors: expect.arrayContaining([
                            expect.objectContaining({
                                field: 'name',
                                message: new InvalidParamError('name').message
                            })
                        ])
                    })
                })
            );
        });

        it('should create brand if not exists', async () => {
            const { request } = makeSut();

            const name = faker.name.title();
            const response =
                await request
                    .post('/api/brands')
                    .send({
                        name
                    });

            expect(response.status).toBe(200);
            expect(response.body).toEqual(
                expect.objectContaining({
                    body: expect.objectContaining({
                        name
                    })
                })
            );
        });

        it('should only return brand if already exists', async () => {
            const { request } = makeSut();

            const name = faker.name.title();
            let response =
                await request
                    .post('/api/brands')
                    .send({
                        name
                    });

            response =
                await request
                    .post('/api/brands')
                    .send({
                        name
                    });

            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(
                expect.objectContaining({
                    body: expect.objectContaining({
                        name
                    })
                })
            );
        });
    });

    describe('FindAll', () => {
        it('should throw error on failure', async () => {
            const { serviceWithError } = makeSut();
            const response = await serviceWithError.findAll({});

            expect(response.statusCode).toBe(500);
            expect(response.body).toEqual(
                expect.objectContaining({
                    errors: new ServerError().message
                })
            );
        });

        it('should return brands with paginated results by default', async () => {
            const brands = [];
            for (let i = 0; i <= 10; i++) {
                const brand = factory.create('Brand', {
                    name: faker.name.findName()
                });
                brands.push(brand);
            }

            const { request } = makeSut();
            const response = await request.get('/api/brands');

            expect(response.status).toBe(200);
            expect(response.body.body.rows.length).toBe(10);
            expect(response.body).toEqual(
                expect.objectContaining({
                    body: expect.objectContaining({
                        count: 11,
                        rows: expect.arrayContaining([
                            expect.objectContaining(brands[0]),
                            expect.objectContaining(brands[1])
                        ])
                    })
                })
            );
        });

        it('should return brands with paginated results if page is provided', async () => {
            const brands = [];
            for (let i = 0; i <= 10; i++) {
                const brand = factory.create('Brand', {
                    name: faker.name.findName()
                });
                brands.push(brand);
            }

            const { request } = makeSut();
            const response = await request.get('/api/brands?page=2');

            expect(response.status).toBe(200);
            expect(response.body.body.rows.length).toBe(1);
            expect(response.body).toEqual(
                expect.objectContaining({
                    body: expect.objectContaining({
                        count: 11,
                        rows: expect.arrayContaining([
                            expect.objectContaining(brands[brands.length - 1])
                        ])
                    })
                })
            );
        });

        it('should return brands with paginated results if limit is provided', async () => {
            const brands = [];
            for (let i = 0; i <= 10; i++) {
                const brand = factory.create('Brand', {
                    name: faker.name.findName()
                });
                brands.push(brand);
            }

            const { request } = makeSut();
            const response = await request.get('/api/brands?limit=5');

            expect(response.status).toBe(200);
            expect(response.body.body.rows.length).toBe(5);
            expect(response.body).toEqual(
                expect.objectContaining({
                    body: expect.objectContaining({
                        count: 11,
                        rows: expect.arrayContaining([
                            expect.objectContaining(brands[0])
                        ])
                    })
                })
            );
        });

        it('should return brands with paginated results if page and limit are provided', async () => {
            const brands = [];
            for (let i = 0; i <= 10; i++) {
                const brand = factory.create('Brand', {
                    name: faker.name.findName()
                });
                brands.push(brand);
            }

            const { request } = makeSut();
            const response = await request.get('/api/brands?page=2&limit=8');

            expect(response.status).toBe(200);
            expect(response.body.body.rows.length).toBe(3);
            expect(response.body).toEqual(
                expect.objectContaining({
                    body: expect.objectContaining({
                        count: 11,
                        rows: expect.arrayContaining([
                            expect.objectContaining({
                                id: expect.any(Number),
                                name: expect.any(String)
                            })
                        ])
                    })
                })
            );
        });
    });
});

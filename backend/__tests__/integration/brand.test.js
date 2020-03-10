const faker = require('faker');
const superRequest = require('supertest');

const app = require('../../src/app')();
const { InvalidParamError, MissingParamError } = require('../../src/helpers/errors');
const factory = require('../factories');
const truncate = require('../utils/truncate');

const makeSut = () => {
    return {
        request: superRequest(app)
    };
};

describe('Brands', () => {
    beforeEach(async () => {
        await truncate();
    });

    describe('Create', () => {
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

        it('should create brand', async () => {
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
    });

    describe('FindAll', () => {
        it('should return brands with paginated results', async () => {
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
            expect(response.body).toEqual(
                expect.objectContaining({
                    body: expect.objectContaining({
                        count: 11,
                    })
                })
            );
        });
    });
});

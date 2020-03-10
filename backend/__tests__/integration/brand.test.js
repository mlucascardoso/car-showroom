const faker = require('faker');
const superRequest = require('supertest');

const app = require('../../src/app')();
// const factory = require('../factories');
const truncate = require('../utils/truncate');
// const { InvalidParamError, MissingParamError } = require('../../src/helper/error');
// const Service = require('../../src/services/brand-service');

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
            expect(response.body.body).toEqual(
                expect.objectContaining({
                    name
                })
            );
        });
    });
    // describe('FindAll', () => {
    //     it('should return 200', async () => {
    //         const { request } = makeSut();
    //         const response = await request.get('/api/brands');

    //         expect(response.status).toBe(200);
    //     });
    // });
});

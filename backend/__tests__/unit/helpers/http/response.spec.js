const { InvalidParamError, MissingParamError, ServerError } = require('../../../../src/helpers/errors');
const { HttpResponse } = require('../../../../src/helpers/http');

describe('Response helper', () => {
    describe('Success', () => {
        it('should return 500 on no data', () => {
            const response = HttpResponse.success();
            expect(response.statusCode).toBe(500);
            expect(response.body).toEqual(
                expect.objectContaining({
                    error: new ServerError().message
                })
            );
        });

        it('should return 200 and object on data', () => {
            const response = HttpResponse.success({ success: true });
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual(
                expect.objectContaining({ success: true })
            );
        });
    });

    describe('badRequest', () => {
        it('should return 500 on empty errors array', () => {
            const response = HttpResponse.badRequest();

            expect(response.statusCode).toBe(500);
            expect(response.body).toEqual(
                expect.objectContaining({
                    error: new ServerError().message
                })
            );
        });

        it('should return 400 and array containing errors', () => {
            const response = HttpResponse.badRequest([
                {
                    param: 'id',
                    msg: new InvalidParamError('id').message
                },
                {
                    param: 'id',
                    msg: new MissingParamError('id').message
                }
            ]);
            expect(response.statusCode).toBe(400);
            expect(response.body).toEqual(
                expect.objectContaining({
                    errors: expect.arrayContaining([
                        expect.any(Object)
                    ])
                })
            );
        });
    });

    describe('Server error', () => {
        it('should return 500 and server error body', () => {
            const response = HttpResponse.serverError();
            expect(response.statusCode).toBe(500);
            expect(response.body).toEqual(
                expect.objectContaining({
                    error: new ServerError().message
                })
            );
        });
    });
});

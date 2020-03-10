const { Passport } = require('../../../../src/helpers/http');

describe('Passport helper', () => {
    describe('Success', () => {
        it('should override strategy authenticate', () => {
            console.log(Passport.prototype.authenticate);

            expect(Passport.prototype).toEqual(
                expect.objectContaining({
                    authenticate: expect.any(Function)
                })
            );
        });
    });
});

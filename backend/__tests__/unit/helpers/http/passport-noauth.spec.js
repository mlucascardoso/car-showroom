const { Passport } = require('../../../../src/helpers/http');

describe('Passport helper', () => {
    it('should override strategy authenticate', () => {
        expect(Passport.prototype).toEqual(
            expect.objectContaining({
                authenticate: expect.any(Function)
            })
        );
    });
});

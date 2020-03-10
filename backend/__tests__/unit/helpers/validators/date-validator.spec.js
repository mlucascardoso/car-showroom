const { dateValidator } = require('../../../../src/helpers/validators');

describe('Date Validator Helper', () => {
    it('Should return false if empty date is provided', () => {
        expect(dateValidator()).toBe(false);
    });

    it('Should return false if invalid date is provided', () => {
        expect(dateValidator('invalid')).toBe(false);
    });

    it('Should return false if date provided has invalid format', () => {
        expect(dateValidator('01-2015-09')).toBe(false);
    });

    it('Should return true if valid date is provided', () => {
        expect(dateValidator('01-01-2018')).toBe(true);
    });
});

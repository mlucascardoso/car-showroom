const { dateFormatter } = require('../../../../src/helpers/formatters');

describe('Date Formatter Helper', () => {
    it('Should return the date parameter if date is invalid', () => {
        expect(dateFormatter('')).toBe('');
    });

    it('Should return date on default format if only date is provided', () => {
        expect(dateFormatter('11-11-2011')).toBe('2011-11-11');
    });

    it('Should return date on custom format if it is provided ', () => {
        expect(dateFormatter('11-11-2011', 'DD-YYYY-MM')).toBe('11-2011-11');
    });

    it('Should validate custom format if it is provided', () => {
        expect(dateFormatter('11-2011-11', 'DD-MM-YYYY', ['DD-YYYY-MM'])).toBe('11-11-2011');
    });
});

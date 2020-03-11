const { paginator } = require('../../../../src/helpers/database/');

const makeSut = () => {
    return paginator;
};

describe('Paginator Helper', () => {
    it('should return pagination query if no args are passed', () => {
        const sut = makeSut();

        expect(sut()).toEqual({ limit: 10, offset: 0, sql: ' LIMIT 10 OFFSET 0' });
    });

    it('should return pagination if only page is passed', () => {
        const sut = makeSut();

        expect(sut({ page: 2 })).toEqual({ limit: 10, offset: 10, sql: ' LIMIT 10 OFFSET 10' });
    });

    it('should return pagination if only limit is passed', () => {
        const sut = makeSut();

        expect(sut({ limit: 50 })).toEqual({ limit: 50, offset: 0, sql: ' LIMIT 50 OFFSET 0' });
    });

    it('should return pagination if all options are passed', () => {
        const sut = makeSut();

        expect(sut({ page: 5, limit: 50 })).toEqual({ limit: 50, offset: 200, sql: ' LIMIT 50 OFFSET 200' });
    });
});

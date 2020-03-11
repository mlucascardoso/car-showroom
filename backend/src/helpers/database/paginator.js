const { clamp, dec, max } = require('ramda');

const getPaginationLimit = (count) => {
    const minValue = 1;
    const maxValue = max(1, count);

    return clamp(minValue, maxValue, count);
};

const getPaginationOffset = ({ limit, page }) => {
    const minValue = 1;
    const maxValue = max(1, page);

    return dec(clamp(minValue, maxValue, page)) * limit;
};

const getPaginationQuery = (options = {}) => {
    const { page = 1, limit = 10 } = options;
    const paginationLimit = getPaginationLimit(limit);
    const offset = getPaginationOffset({ limit, page });

    return {
        limit: paginationLimit,
        offset,
        sql: ` LIMIT ${limit} OFFSET ${offset}`
    };
};

module.exports = getPaginationQuery;

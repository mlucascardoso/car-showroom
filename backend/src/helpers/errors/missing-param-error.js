module.exports = class MissingParamError extends Error {
    /**
   * @constructor
   * @param {string} paramName
   */
    constructor(paramName) {
        super(`Missing param: ${paramName}`);
        this.name = 'MissingParamError';
    }
};

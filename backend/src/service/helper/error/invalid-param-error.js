
module.exports = class InvalidParamError extends Error {
    /**
   * @constructor
   * @param {string} paramName
   */
    constructor(paramName) {
        super(`Invalid param: ${paramName}`);
        this.name = 'InvalidParamError';
    }
};

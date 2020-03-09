module.exports = class ServerError extends Error {
    /**
   * @constructor
   */
    constructor() {
        super('Internal error');
        this.name = 'ServerError';
    }
};

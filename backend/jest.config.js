module.exports = {
    bail: 1,
    clearMocks: true,
    collectCoverageFrom: ['src/**/*.js', '!src/router/**/*.js', '!src/config/**/*.js', '!src/server.js', '!src/**/**/index.js'],
    coverageDirectory: 'coverage',
    modulePathIgnorePatterns: ['.database/data', 'src/database/migrations'],
    testPathIgnorePatterns: ['factories.js', 'truncate.js'],
    testEnvironment: 'node',
};

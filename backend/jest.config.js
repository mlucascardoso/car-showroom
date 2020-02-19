module.exports = {
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    collectCoverageFrom: ['src/**/*.js', '!src/router/**/*.js', '!src/config/**/*.js', '!src/server.js', '!src/**/**/index.js']
};

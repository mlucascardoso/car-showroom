const { factory } = require('factory-girl');
const faker = require('faker');

const { Brand } = require('../src/models');

factory.define('Brand', Brand, {
    name: faker.name.findName()
});

module.exports = factory;

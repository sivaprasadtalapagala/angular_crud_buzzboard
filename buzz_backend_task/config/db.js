const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'test_user',
    password: 'test',
    database: 'crud',
});

module.exports = sequelize;

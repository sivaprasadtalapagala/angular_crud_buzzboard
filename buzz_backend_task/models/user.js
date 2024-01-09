const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    company: DataTypes.STRING,
    gender: DataTypes.STRING,
    dob: DataTypes.DATE,
    password: DataTypes.STRING,
});

module.exports = User;

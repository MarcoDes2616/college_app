const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Students = sequelize.define('students', {
    firstname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    program: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = Students;
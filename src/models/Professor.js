const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Students = require('./Students');

const Professor = sequelize.define('profesor', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

Professor.belongsToMany(Students, { through: 'professorStudents' });
Students.belongsToMany(Professor, { through: 'professorStudents' });

module.exports = Professor;
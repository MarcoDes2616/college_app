const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Students = require('./Students');

const Courses = sequelize.define('courses', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    credits: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

Courses.belongsToMany(Students, { through: 'coursesStudents' });
Students.belongsToMany(Courses, { through: 'coursesStudents' });

module.exports = Courses;
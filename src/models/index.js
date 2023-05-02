const Courses = require("./Courses");
const Professor = require("./Professor");
const Students = require("./Students");



Courses.belongsToMany(Students, { through: 'coursesStudents' });
Students.belongsToMany(Courses, { through: 'coursesStudents' });
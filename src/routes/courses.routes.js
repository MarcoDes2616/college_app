const { getAll, create, getOne, remove, update, setStudentCourses } = require('../controllers/courses.controllers');
const express = require('express');

const coursesRoutes = express.Router();

coursesRoutes.route('/')
    .get(getAll)
    .post(create);

coursesRoutes.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

coursesRoutes.route("/:id/courses").post(setStudentCourses)

module.exports = coursesRoutes;
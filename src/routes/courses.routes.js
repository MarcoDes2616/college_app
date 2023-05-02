const { getAll, create, getOne, remove, update } = require('../controllers/courses.controllers');
const express = require('express');

const coursesRoutes = express.Router();

coursesRoutes.route('/')
    .get(getAll)
    .post(create);

coursesRoutes.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = coursesRoutes;
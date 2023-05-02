const { getAll, create, getOne, remove, update } = require('../controllers/students.controllers');
const express = require('express');

const studentsRoutes = express.Router();

studentsRoutes.route('/')
    .get(getAll)
    .post(create);

studentsRoutes.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = studentsRoutes;
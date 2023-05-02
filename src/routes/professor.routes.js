const { getAll, create, getOne, remove, update } = require('../controllers/professor.controllers');
const express = require('express');

const professorRoutes = express.Router();

professorRoutes.route('/')
    .get(getAll)
    .post(create);

professorRoutes.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = professorRoutes;
const express = require('express');
const studentsRoutes = require('./students.routes');
const professorRoutes = require('./professor.routes');
const coursesRoutes = require('./courses.routes');
const router = express.Router();

// colocar las rutas aquí
router.use("/students", studentsRoutes)

router.use("/professors", professorRoutes)

router.use("/courses", coursesRoutes)

module.exports = router;
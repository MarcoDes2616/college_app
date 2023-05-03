const catchError = require('../utils/catchError');
const Courses = require('../models/Courses');
const Students = require('../models/Students');

const getAll = catchError(async(req, res) => {
    const results = await Courses.findAll({include: [Students]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Courses.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Courses.findByPk(id, {include: [Students]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Courses.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Courses.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

const setCoursesStudents = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Courses.findByPk(id)
    await result.setStudents(req.body)
    const students = await result.getStudents()
    return res.json(students)
});


module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setCoursesStudents
}
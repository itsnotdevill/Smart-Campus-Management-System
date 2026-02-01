const express = require('express');
const router = express.Router();
const { getStudents, addStudent, getStudentById, deleteStudent } = require('../controllers/studentController');
const { protect, admin, faculty } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, faculty, getStudents) // Faculty can also view students
    .post(protect, admin, addStudent);

router.route('/:id')
    .get(protect, getStudentById)
    .delete(protect, admin, deleteStudent);

module.exports = router;

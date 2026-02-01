const express = require('express');
const router = express.Router();
const { markAttendance, getAttendance } = require('../controllers/attendanceController');
const { protect, faculty } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, faculty, markAttendance);

router.route('/:studentId')
    .get(protect, getAttendance);

module.exports = router;

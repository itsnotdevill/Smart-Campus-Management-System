const Attendance = require('../models/Attendance');

// @desc    Mark attendance
// @route   POST /api/attendance
// @access  Private/Faculty
const markAttendance = async (req, res) => {
    const { studentId, date, status, subject } = req.body;

    try {
        const attendance = await Attendance.create({
            studentId,
            date,
            status,
            subject,
        });
        res.status(201).json(attendance);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get attendance for a student
// @route   GET /api/attendance/:studentId
// @access  Private/Student/Faculty/Admin
const getAttendance = async (req, res) => {
    try {
        const attendance = await Attendance.find({ studentId: req.params.studentId }).sort({ date: -1 });
        res.json(attendance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { markAttendance, getAttendance };

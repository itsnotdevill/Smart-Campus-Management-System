const Student = require('../models/Student');
const User = require('../models/User');

// @desc    Get all students
// @route   GET /api/students
// @access  Private/Admin/Faculty
const getStudents = async (req, res) => {
    try {
        const students = await Student.find().populate('userId', 'name email').populate('department', 'departmentName');
        res.json(students);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a new student
// @route   POST /api/students
// @access  Private/Admin
const addStudent = async (req, res) => {
    const {
        name, email, password, // User details
        enrollmentNo, department, course, batch, contactNumber // Student details
    } = req.body;

    try {
        // 1. Create User
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
            role: 'student',
        });

        // 2. Create Student Profile
        const student = await Student.create({
            userId: user._id,
            enrollmentNo,
            department, // This should be an ObjectId
            course,
            batch,
            contactNumber,
        });

        res.status(201).json(student);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get student by ID
// @route   GET /api/students/:id
// @access  Private/Admin/Faculty/Student(self)
const getStudentById = async (req, res) => {
    const student = await Student.findById(req.params.id).populate('userId', 'name email').populate('department');

    if (student) {
        res.json(student);
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
};

// @desc    Delete student
// @route   DELETE /api/students/:id
// @access  Private/Admin
const deleteStudent = async (req, res) => {
    const student = await Student.findById(req.params.id);

    if (student) {
        await User.findByIdAndDelete(student.userId); // Delete associated user
        await student.remove();
        res.json({ message: 'Student removed' });
    } else {
        res.status(404).json({ message: 'Student not found' });
    }
};

module.exports = { getStudents, addStudent, getStudentById, deleteStudent };

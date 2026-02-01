const Faculty = require('../models/Faculty');
const User = require('../models/User');

// @desc    Get all faculty
// @route   GET /api/faculty
// @access  Private/Admin
const getFaculty = async (req, res) => {
    try {
        const faculty = await Faculty.find().populate('userId', 'name email').populate('department', 'departmentName');
        res.json(faculty);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Add a new faculty member
// @route   POST /api/faculty
// @access  Private/Admin
const addFaculty = async (req, res) => {
    const {
        name, email, password, // User details
        employeeId, department, designation, qualifications // Faculty details
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
            role: 'faculty',
        });

        // 2. Create Faculty Profile
        const facultyMember = await Faculty.create({
            userId: user._id,
            employeeId,
            department,
            designation,
            qualifications,
        });

        res.status(201).json(facultyMember);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getFaculty, addFaculty };

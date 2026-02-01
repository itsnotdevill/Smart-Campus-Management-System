const Complaint = require('../models/Complaint');

// @desc    File a complaint
// @route   POST /api/complaints
// @access  Private/Student
const fileComplaint = async (req, res) => {
    const { title, description } = req.body;

    try {
        const complaint = await Complaint.create({
            filedBy: req.user._id,
            title,
            description,
        });
        res.status(201).json(complaint);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// @desc    Get all complaints
// @route   GET /api/complaints
// @access  Private/Admin/Faculty (Faculty view?)
const getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find().populate('filedBy', 'name email').sort({ date: -1 });
        res.json(complaints);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// @desc    Update complaint status
// @route   PUT /api/complaints/:id
// @access  Private/Admin
const updateComplaintStatus = async (req, res) => {
    const { status } = req.body;

    try {
        const complaint = await Complaint.findById(req.params.id);

        if (complaint) {
            complaint.status = status;
            await complaint.save();
            res.json(complaint);
        } else {
            res.status(404).json({ message: 'Complaint not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { fileComplaint, getComplaints, updateComplaintStatus };

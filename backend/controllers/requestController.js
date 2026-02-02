const Request = require('../models/Request');

// @desc    Get my requests
// @route   GET /api/requests
// @access  Private
const getMyRequests = async (req, res) => {
    const requests = await Request.find({ requester: req.user._id }).sort({ createdAt: -1 });
    res.json(requests);
};

// @desc    Create a request
// @route   POST /api/requests
// @access  Private
const createRequest = async (req, res) => {
    const { type, details, dateRequired } = req.body;

    const request = await Request.create({
        requester: req.user._id,
        type,
        details,
        dateRequired
    });

    res.status(201).json(request);
};

// @desc    Get all requests (Admin)
// @route   GET /api/requests/all
// @access  Private/Admin
const getAllRequests = async (req, res) => {
    const requests = await Request.find({}).populate('requester', 'name email').sort({ createdAt: -1 });
    res.json(requests);
};

module.exports = { getMyRequests, createRequest, getAllRequests };

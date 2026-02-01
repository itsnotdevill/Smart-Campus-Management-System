const express = require('express');
const router = express.Router();
const { fileComplaint, getComplaints, updateComplaintStatus } = require('../controllers/complaintController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .post(protect, fileComplaint)
    .get(protect, admin, getComplaints); // Only admin sees all? Or staff too? Requirement: Staff "View complaints"

router.route('/:id')
    .put(protect, admin, updateComplaintStatus);

module.exports = router;

const express = require('express');
const router = express.Router();
const { getMyRequests, createRequest, getAllRequests } = require('../controllers/requestController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(protect, getMyRequests).post(protect, createRequest);
router.route('/all').get(protect, admin, getAllRequests);

module.exports = router;

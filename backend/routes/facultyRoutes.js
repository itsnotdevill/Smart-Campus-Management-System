const express = require('express');
const router = express.Router();
const { getFaculty, addFaculty } = require('../controllers/facultyController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, getFaculty) // Admin and maybe Student/Faculty can view directory? Let's keep it open for logged in generally? No, requirement says Admin manages it.
    .post(protect, admin, addFaculty);

module.exports = router;

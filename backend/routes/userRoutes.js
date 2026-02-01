const express = require('express');
const router = express.Router();
const { authUser, registerUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/login', authUser);
router.post('/', registerUser); // Open registration for demo, or protect with admin

module.exports = router;

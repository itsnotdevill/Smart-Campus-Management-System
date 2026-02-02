const express = require('express');
const router = express.Router();
const { authUser, registerUser, getUsers, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

router.post('/login', authUser);
router.route('/').post(registerUser).get(protect, admin, getUsers);
router.route('/:id').delete(protect, admin, deleteUser);

module.exports = router;

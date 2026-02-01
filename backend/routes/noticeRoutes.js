const express = require('express');
const router = express.Router();
const { getNotices, createNotice, deleteNotice } = require('../controllers/noticeController');
const { protect, faculty } = require('../middleware/authMiddleware'); // faculty middleware allows faculty and admin

router.route('/')
    .get(protect, getNotices)
    .post(protect, faculty, createNotice);

router.route('/:id')
    .delete(protect, faculty, deleteNotice);

module.exports = router;

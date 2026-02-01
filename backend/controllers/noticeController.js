const Notice = require('../models/Notice');

// @desc    Get all notices
// @route   GET /api/notices
// @access  Private (All roles)
const getNotices = async (req, res) => {
    // Filter by audience if needed, or return all relevant.
    // For simplicity, return all, frontend filters? Or backend filter based on role.
    const notices = await Notice.find().sort({ date: -1 }).populate('postedBy', 'name');
    res.json(notices);
};

// @desc    Create a notice
// @route   POST /api/notices
// @access  Private/Admin/Faculty
const createNotice = async (req, res) => {
    const { title, content, targetAudience } = req.body;

    const notice = new Notice({
        title,
        content,
        targetAudience,
        postedBy: req.user._id,
    });

    const createdNotice = await notice.save();
    res.status(201).json(createdNotice);
};

// @desc    Delete notice
// @route   DELETE /api/notices/:id
// @access  Private/Admin/Faculty
const deleteNotice = async (req, res) => {
    const notice = await Notice.findById(req.params.id);

    if (notice) {
        // Check if user is admin or the one who posted it
        if (req.user.role === 'admin' || notice.postedBy.toString() === req.user._id.toString()) {
            await notice.remove();
            res.json({ message: 'Notice removed' });
        } else {
            res.status(401).json({ message: 'Not authorized to delete this notice' });
        }
    } else {
        res.status(404).json({ message: 'Notice not found' });
    }
};

module.exports = { getNotices, createNotice, deleteNotice };

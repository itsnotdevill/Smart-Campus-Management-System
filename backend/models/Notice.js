const mongoose = require('mongoose');

const noticeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    postedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    targetAudience: {
        type: String,
        enum: ['all', 'student', 'faculty'],
        default: 'all',
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, {
    timestamps: true,
});

const Notice = mongoose.model('Notice', noticeSchema);

module.exports = Notice;

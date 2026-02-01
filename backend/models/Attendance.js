const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;

const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    enrollmentNo: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
    course: {
        type: String,
        required: true,
    },
    batch: {
        type: String, // e.g., "2023-2027"
        required: true,
    },
    contactNumber: {
        type: String,
    },
}, {
    timestamps: true,
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;

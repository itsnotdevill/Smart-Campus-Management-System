const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    employeeId: {
        type: String,
        required: true,
        unique: true,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
    },
    designation: {
        type: String, // e.g., "Professor", "Assistant Professor"
        required: true,
    },
    qualifications: {
        type: [String],
    },
}, {
    timestamps: true,
});

const Faculty = mongoose.model('Faculty', facultySchema);

module.exports = Faculty;

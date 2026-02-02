const mongoose = require('mongoose');

const requestSchema = mongoose.Schema({
    requester: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    type: {
        type: String,
        enum: ['Leave', 'Equipment', 'Maintenance', 'Other'],
        required: true
    },
    details: { type: String, required: true },
    status: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Pending'
    },
    dateRequired: { type: Date }
}, {
    timestamps: true
});

module.exports = mongoose.model('Request', requestSchema);

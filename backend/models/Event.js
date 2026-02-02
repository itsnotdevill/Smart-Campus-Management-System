const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    organizer: { type: String, default: 'Admin' }, // Could be a reference to User
    type: { type: String, enum: ['Academic', 'Sports', 'Cultural', 'Workshop', 'Other'], default: 'Other' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Event', eventSchema);

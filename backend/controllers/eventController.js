const Event = require('../models/Event');

// @desc    Get all events
// @route   GET /api/events
// @access  Private
const getEvents = async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 });
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Create a new event
// @route   POST /api/events
// @access  Private (Admin only)
const createEvent = async (req, res) => {
    try {
        const { title, description, date, location, type, organizer } = req.body;

        const event = new Event({
            title,
            description,
            date,
            location,
            type,
            organizer
        });

        const createdEvent = await event.save();
        res.status(201).json(createdEvent);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

// @desc    Delete event
// @route   DELETE /api/events/:id
// @access  Private (Admin only)
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (event) {
            await event.deleteOne();
            res.json({ message: 'Event removed' });
        } else {
            res.status(404).json({ message: 'Event not found' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getEvents, createEvent, deleteEvent };

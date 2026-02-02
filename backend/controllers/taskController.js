const Task = require('../models/Task');

// @desc    Get all tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
    const tasks = await Task.find({}).sort({ createdAt: -1 });
    res.json(tasks);
};

// @desc    Create a task
// @route   POST /api/tasks
// @access  Private
const createTask = async (req, res) => {
    const { title, description, priority, assignedTo } = req.body;

    const task = await Task.create({
        title,
        description,
        priority,
        assignedTo
    });

    res.status(201).json(task);
};

// @desc    Update task status
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (task) {
        task.status = req.body.status || task.status;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

module.exports = { getTasks, createTask, updateTask };

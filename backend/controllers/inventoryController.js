const Inventory = require('../models/Inventory');

// @desc    Get all inventory
// @route   GET /api/inventory
// @access  Private
const getInventory = async (req, res) => {
    const items = await Inventory.find({}).sort({ itemName: 1 });
    res.json(items);
};

// @desc    Create inventory item
// @route   POST /api/inventory
// @access  Private
const addInventoryItem = async (req, res) => {
    const { itemName, category, quantity, minQuantity } = req.body;

    const item = await Inventory.create({
        itemName,
        category,
        quantity,
        minQuantity
    });

    res.status(201).json(item);
};

// @desc    Update inventory quantity
// @route   PUT /api/inventory/:id
// @access  Private
const updateInventoryItem = async (req, res) => {
    const item = await Inventory.findById(req.params.id);

    if (item) {
        item.quantity = req.body.quantity !== undefined ? req.body.quantity : item.quantity;

        // Auto update status
        if (item.quantity === 0) item.status = 'Out of Stock';
        else if (item.quantity <= item.minQuantity) item.status = 'Low Stock';
        else item.status = 'In Stock';

        const updatedItem = await item.save();
        res.json(updatedItem);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
};

module.exports = { getInventory, addInventoryItem, updateInventoryItem };

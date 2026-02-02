const mongoose = require('mongoose');

const inventorySchema = mongoose.Schema({
    itemName: { type: String, required: true },
    category: { type: String, required: true },
    quantity: { type: Number, required: true, default: 0 },
    minQuantity: { type: Number, default: 10 }, // For low stock alerts
    status: {
        type: String,
        enum: ['In Stock', 'Low Stock', 'Out of Stock'],
        default: 'In Stock'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Inventory', inventorySchema);

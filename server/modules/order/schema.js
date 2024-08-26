// models/Order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: 'User',
        required: true,
    },
    items: [{
        foodItem: {
            type: mongoose.Schema.Types.ObjectId, // Reference to the FoodItem model
            ref: 'FoodItem',
            required: true,
        },
        quantity: { type: Number, required: true }, // Quantity of each food item
    }, ],
    totalAmount: { type: Number, required: true },
    status: { type: String, enum: ['Pending', 'Ongoing', 'Delivered'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
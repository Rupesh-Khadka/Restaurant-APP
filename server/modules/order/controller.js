// controllers/orderController.js
const Order = require('../models/Order');

// Create a new order
exports.createOrder = async(req, res) => {
    try {
        const { items, totalAmount } = req.body;
        const order = await Order.create({
            user: req.user._id,
            items,
            totalAmount,
        });
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all orders for admin or user's own orders
exports.getOrders = async(req, res) => {
    try {
        const orders = await Order.find(req.user.role === 'admin' ? {} : { user: req.user._id }).populate('items.foodItem');
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update order status
exports.updateOrderStatus = async(req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findByIdAndUpdate(req.params.id, { status }, { new: true });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete an order
exports.deleteOrder = async(req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
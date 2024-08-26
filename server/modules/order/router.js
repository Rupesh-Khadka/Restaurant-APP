// routes/orderRoutes.js
const express = require('express');
const { createOrder, getOrders, updateOrderStatus, deleteOrder } = require('../controllers/orderController');
const { verifyUser } = require('../middleware/verifyUser');

const router = express.Router();

router.post('/orders', verifyUser, createOrder);
router.get('/orders', verifyUser, getOrders);
router.put('/orders/:id', verifyUser, updateOrderStatus);
router.delete('/orders/:id', verifyUser, deleteOrder);

module.exports = router;
// models/Order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the User model
        ref: "User",
        required: true,
    },
    items: {
        type: mongoose.Schema.Types.ObjectId, // Reference to the menu model
        ref: "Menu",
        required: true,
    },
});

module.exports = mongoose.model("Order", orderSchema);
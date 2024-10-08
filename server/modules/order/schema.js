const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    orderNumber: {
        // New field for a simpler order ID
        type: String,
        unique: true,
        required: true,
    },
    items: [{
        item: {
            type: mongoose.Schema.Types.ObjectId, // Reference to the Menu model
            ref: "Menu",
            required: true,
        },

        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
        total: {
            type: Number,
            required: true,
            default: 0,
        },
    }, ],

    totalAmount: {
        type: Number,
        required: true,
        default: 0,
    },
    customer: {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        number: {
            type: Number,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
    },

    status: {
        type: String,
        enum: ["Pending", "Ongoing", "Completed", "Delivered"],
        default: "Pending",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Order", orderSchema);
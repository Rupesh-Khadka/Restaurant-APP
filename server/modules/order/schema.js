const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    items: [{
        item: {
            type: mongoose.Schema.Types.ObjectId, // Reference to the Menu model
            ref: "Menu",
            required: true,
        },
        title: {
            type: String,
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
        type: mongoose.Schema.Types.ObjectId,
        ref: "CustomerDetails",
        required: true,
    },

    status: {
        type: String,
        enum: ["Pending", "Ongoing", "Delivered"],
        default: "Pending",
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Order", orderSchema);
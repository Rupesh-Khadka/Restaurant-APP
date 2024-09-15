const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
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
    }, ],
    totalamount: {
        type: Number,
        required: true,
        default: 0,
    },
    name: {
        type: String,
        required: true,
    },
    address: {
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
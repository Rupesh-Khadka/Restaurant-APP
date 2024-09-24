const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerDetails = new Schema({
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
});

module.exports = mongoose.model("CustomerDetails", customerDetails);
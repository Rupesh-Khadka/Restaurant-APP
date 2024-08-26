const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
    image: {
        type: "String",
        default: "",
    },
    title: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
        required: true,
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Category",
    },
    person: {
        type: "Number",
        required: true,
    },
    price: {
        type: "Number",
        required: true,
    },
});

module.exports = mongoose.model("Menu", menuSchema);
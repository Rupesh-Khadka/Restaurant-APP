const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    foodItem: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Menu",
    },
});

module.exports = mongoose.model("Favorite", favoriteSchema);
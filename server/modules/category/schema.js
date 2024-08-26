 const mongoose = require("mongoose");
 const Schema = mongoose.Schema;

 const categoryScheme = new Schema({
     title: {
         type: "String",
         required: "True",
     },
 });

 module.exports = mongoose.model("Category", categoryScheme);
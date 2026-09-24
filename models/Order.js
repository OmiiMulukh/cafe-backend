const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  name: String,
  table: String,
  mobile: String,
  items: Array,
  total: Number,
  date: String
});

module.exports = mongoose.model("Order", orderSchema);
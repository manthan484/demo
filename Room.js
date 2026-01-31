const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  roomNumber: Number,
  type: String,
  price: Number,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Room", roomSchema);

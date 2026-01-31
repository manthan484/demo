const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  roomId: mongoose.Schema.Types.ObjectId,
  checkIn: Date,
  checkOut: Date
});

module.exports = mongoose.model("Booking", bookingSchema);

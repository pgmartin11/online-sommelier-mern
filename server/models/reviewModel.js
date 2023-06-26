const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = mongoose.Schema({
  region: { type: String, required: true },
  producer: { type: String, required: true },
  year: { type: String, required: false },
  notes: { type: String, required: false },
});

module.exports = mongoose.model("Review", reviewSchema);

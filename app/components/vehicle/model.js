const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicle = new Schema({
  plate: String,
  color: String,
  type: String,
  brand: String,
  model: String,
  author: String
})

module.exports = mongoose.model("Vehicles", vehicle);
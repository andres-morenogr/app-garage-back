const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const owner = new Schema({
  name: String,
  last_name: String,
  dni: Number,
  email: String,
  phone_number: Number
})

module.exports = mongoose.model("Owners", owner);
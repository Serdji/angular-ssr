const mongoose = require('./mongoose');

const citySchema = new mongoose.Schema({
  value: String,
  id: Number,
});


module.exports = mongoose.model('City', citySchema);





const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://admin:admin123@ds263640.mlab.com:63640/mylad123');
module.exports = mongoose;

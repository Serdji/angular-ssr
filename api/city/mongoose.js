const mongoose = require('mongoose');

mongoose.set('debug', true);
if ( process.env.ENV === 'dev' ) mongoose.connect('mongodb://localhost/test');
mongoose.connect('mongodb://admin:admin123@ds263640.mlab.com:63640/mylad123');
module.exports = mongoose;

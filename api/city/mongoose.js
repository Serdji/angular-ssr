const mongoose = require('mongoose');

mongoose.set('debug', true);
if ( process.env.ENV === 'dev' ) mongoose.connect('mongodb://localhost/test');
if ( process.env.ENV === 'prod' ) mongoose.connect('mongodb://Serdjei:S0e1r0e4g8a7@ds263640.mlab.com:63640/mylad123');
module.exports = mongoose;

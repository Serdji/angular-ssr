const mongoose = require('mongoose');

mongoose.set('debug', true);
if ( process.env.ENV === 'dev' ) mongoose.connect('mongodb://localhost/test');
module.exports = mongoose;

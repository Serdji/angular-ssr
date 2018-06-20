const mongoose = require('mongoose');

mongoose.set('debug', true);
if ( process.env.ENV === 'dev' ) mongoose.connect('mongodb://localhost/test');
console.log(process.env.NODE_ENV);
module.exports = mongoose;

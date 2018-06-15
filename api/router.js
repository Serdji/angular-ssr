const user = require('./user/index');

module.exports = (app) => {

  app.get('/api/user', user.list);

  app.get('/api/user/:user', user.send);

};
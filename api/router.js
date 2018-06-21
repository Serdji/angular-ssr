const user = require('./user/index');
const city = require('./city/index');

module.exports = (app) => {

  app.get('/api/user', user.list);
  app.get('/api/user/:user', user.send);

  app.get('/api/city', city.list);
  app.get('/api/city/:limit', city.list);
  app.put('/api/city', city.send);
  app.delete('/api/city', city.delete);


};

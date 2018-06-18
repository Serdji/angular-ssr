const cities = require('./cities');
const City = require('./city');

exports.list = (req, res) => {
  City.find({}, (err, user) => {
    if (err) return res.status(500).send('Произошла ошибка: ошибка базы данных.');
    res.json(user.map((c) => {
      return {
        name: c,
      }
    }));
  });
};

exports.send = (req, res) => {
  for (const city of cities) {
    City.create(city);
  }
};
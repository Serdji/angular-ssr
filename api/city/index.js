const cities = require('./cities');
const City = require('./city');

exports.list = (req, res) => {
  City.find({}, (err, city) => {
    if (err) return res.status(500).send('Произошла ошибка: ошибка базы данных.');
    res.json(city.map((c) => {
      return {
        value: c.value,
        id: c.id
      }
    }));
  });
};

exports.send = (req, res) => {
  for (const city of cities) {
    City.create(city);
  }
};

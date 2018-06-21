const cities = require('./cities');
const City = require('./city');

exports.list = (req, res) => {
  City.find({}, null, { limit: +req.params.limit }, (err, city) => {
    if (err) return res.status(500).send('Произошла ошибка: ошибка базы данных.' + err);
    res.json(city.map((c) => {
      return {
        value: c.value,
        id: c.id
      }
    }));
  });
};

exports.send = (req, res) => {
  City.remove({}, function(err, row) {
    if (err) {
      console.log('Произошла ошибка: ошибка базы данных.' + err);
      return;
    }
    for (const city of cities) {
      City.create(city);
    }
  });
  City.find({}, (err, city) => {
    if (err) return res.status(500).send('Произошла ошибка: ошибка базы данных.' + err);
    res.send('SEND CITIES');
  });
};

exports.delete = (req, res) => {
  City.remove({}, function(err, row) {
    if (err) {
      console.log('Произошла ошибка: ошибка базы данных.' + err);
      return;
    }
    res.send('DELETE CITIES');
  });
};

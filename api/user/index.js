const User = require('./user');

exports.list = (req, res) => {
  User.find({}, (err, user) => {
    if (err) return res.status(500).send('Произошла ошибка: ошибка базы данных.');
    res.json(user.map((u) => {
      return {
        name: u.name,
      }
    }));
  });
};

exports.send = (req, res) => {
  User.create({name: req.params.user}, (err, user) => {
    if (err) return res.status(500).send('Произошла ошибка: ошибка базы данных.');
    res.json(user)
  });
};
const authenticate = require('./login');

const login = (req, res) => {
  authenticate(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send({token: result});
  });
}

module.exports = login;
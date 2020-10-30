const signup = require('./signup');

const register = (req, res) => {
  signup(req.body, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
}

module.exports = register;
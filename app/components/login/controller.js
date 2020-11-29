const authenticate = require('./login');

const login = (req, res) => {
  authenticate(req.body, (err, result) => {
    if (err) {
      res.send({message:"Nombre de usuario o contraseña incorrectos"});
    }
    res.send({token: result});
  });
}

module.exports = login;
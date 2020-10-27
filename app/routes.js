const { Router } = require('express');

const router = new Router();

const signup = require('./components/signup/route');
//const login = require('./components/login/route');

router.use('/auth/signup', signup);
//router.use('/auth/login', login);

module.exports = router;
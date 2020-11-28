const { Router } = require('express');

const router = new Router();

const signup = require('./components/signup/route');
const login = require('./components/login/route');
const vehicle = require('./components/vehicle/route');

router.use('/auth/signup', signup);
router.use('/auth/login', login);
router.use('/vehicle', vehicle)

module.exports = router;
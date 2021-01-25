const { Router } = require('express');

const router = new Router();

const signup = require('./components/signup/route');
const login = require('./components/login/route');
const vehicle = require('./components/vehicle/route');
const owner = require('./components/owner/route');

router.use('/auth/signup', signup);
router.use('/auth/login', login);
router.use('/vehicle', vehicle);
router.use('/owner', owner)

module.exports = router;
const { Router } = require('express');
const register = require('./controller');

const router = new Router();

router.post('/', register);

module.exports = router;
const express = require('express');
const router = express.Router();
const passport = require('passport');

const { getUsers } = require('../../../controllers/users');

require('../../../../utils/auth/jwt-strategy');

router.get('/', passport.authenticate('jwt', { session: false }), getUsers);

module.exports = router;

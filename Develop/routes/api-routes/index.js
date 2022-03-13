const router = require('express').Router();
const noteApiRoute = require('./noteApiRoute');

router.use(noteApiRoute);

module.exports = router;
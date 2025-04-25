const express = require('express');

const v1Routes = require('./v1');
// const v2Routes = require('./v2');

const router  = express.Router();

console.log('Inside api routes');

router.use('/v1', v1Routes);

// router.use('/v2', v2Routes);

module.exports = router;
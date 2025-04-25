const express = require('express');

const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');

const router = express.Router();

console.log('Inside api routes1');

router.use('/airplanes', airplaneRoutes);

// router.get('/info', (req, res) => {
//     return res.json({msg: "ok"});
// })

router.get('/info', InfoController.info)

module.exports = router;
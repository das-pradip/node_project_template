const express = require('express');

const { CityController } = require('../../controllers');
// const { CityMiddlewares } = require('../../middlewares');
const router = express.Router();

console.log('Inside airplane routes');
// /api/v1/cities POST
router.post('/', 
    // CityMiddlewares.validateCreateRequest,
    CityController.createCity,
);

module.exports = router;
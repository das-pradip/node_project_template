const { StatusCodes } = require('http-status-codes'); 

const { CityService } = require('../services');
const { SuccessResponse, ErrorResponse} = require('../utils/common');

/**
 * POST : /cities
 * req-body {name: 'delhi'}
 */
async function createCity(req, res) {
    try {
        console.log("Inside city controller");
        const city = await CityService.createCity({
            name: req.body.name
        });
        SuccessResponse.data = city;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
                                
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
               
    }
}


module.exports = {
    createCity
}
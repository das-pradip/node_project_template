const { StatusCodes } = require('http-status-codes'); 

const { AirplaneSevice } = require('../services');
const { SuccessResponse, ErrorResponse} = require('../utils/common');

/**
 * POST : /airplanes
 * req-body {modelNumber: 'airbus320', capacity: 200}
 */
async function createAirplane(req, res) {
    try {
        console.log("Inside controller");
        const airplane = await AirplaneSevice.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
                // .json({
                //     success: true,
                //     message: 'Successfully create an airplane',
                //     data: airplane,
                //     error: {}
                // });                     
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
                // .json({
                //     success: false,
                //     message: 'Something went wrong while creating airplane',
                //     data: {},
                //     error: error
                // });
    }
}

async function getAirplanes (req, res) {
    try {
        const airplanes = await AirplaneSevice.getAirplanes();
        SuccessResponse.data = airplanes;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

module.exports = {
    createAirplane,
    getAirplanes
}
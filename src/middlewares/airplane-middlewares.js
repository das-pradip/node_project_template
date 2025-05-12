const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');


function validateCreateRequest(req, res, next) {
    if(!req.body.modelNumber) {
        ErrorResponse.message = 'Something went wrong while creating airplane';
        // new AppError(['Model Number not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        // ErrorResponse.error = {explanation: 'Model Number not found in the incoming request in the correct form'}
        ErrorResponse.error = new AppError(['Model Number not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
        
        return res
                 .status(StatusCodes.BAD_REQUEST)
                 .json(ErrorResponse);
                 // Here instead of witing this much below code for error handling we use ErrorResponse module which is created by us for common use in 'common folder' stayed inside 'utils' folder
                //  .json({
                //     success: false,
                //     message: 'Something went wrong while creating airplane',
                //     data: {},
                //     error: {explanation: 'Model Number not found in the incoming request in the correct form'}
                // });
    }
    next();
}

module.exports = {
    validateCreateRequest
}
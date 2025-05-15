const { StatusCodes } = require('http-status-codes');

const { FlightService } = require('../services');
const { SuccessResponse, ErrorResponse } = require('../utils/common');


/**
 * POST : /flights
 * req-body {
 * flightNumber: 'US 505',
 * airplaneId: 'a370',
 * departureAirportId: 11,
 * arrivalAirportId: 9,
 * arrivalTime: '7:21:11',
 * departureTime: '3:11:11',
 * price: '2000',
 * boardingGate: '11A'
 * totalSeats: 120
 * }
 */
async function createFlight(req, res) {
    try {
        console.log("Inside controller flight");
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,

        });
        SuccessResponse.data = flight;
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
            // .status(error.statusCode)
            // .json(ErrorResponse);

            .status(error.statusCode || StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse);


        
    }
}

module.exports = {
    createFlight,
    
}
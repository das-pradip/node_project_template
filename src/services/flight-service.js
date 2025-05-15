const { StatusCodes } = require('http-status-codes');

const { FlightRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');
const { compareTime } = require('../utils/helpers/datetime-helpers');

const flightRepository = new FlightRepository();

async function createFlight(data) { 
    try {
        console.log('Inside flight service');
        // Time validation
        if (!compareTime(data.arrivalTime, data.departureTime)) {
            throw new AppError(
                'Arrival time must be greater than Departure time',
                StatusCodes.BAD_REQUEST
            );
        }
        const flight = await flightRepository.create(data);
        return flight;
    } catch (error) {
           if(error.name == 'SequelizeValidationError')
             {
            let explanation = [];
            // console.log(error);
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });    
            // console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        // throw error;
        throw new AppError('Cannot create a new Flight object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


module.exports = {
    createFlight,
}
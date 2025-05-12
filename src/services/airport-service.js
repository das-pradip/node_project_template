const { StatusCodes } = require('http-status-codes');

const { AirportRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airportRepository = new AirportRepository();

async function createAirport(data) { 
    try {
        console.log('Inside service');
        const airport = await airportRepository.create(data);
        return airport;
    } catch (error) {
        // console.log(error);
        // if(error.name == 'TypeError')
        // if(error.name == 'validationError')
           if(error.name == 'SequelizeValidationError')
             {
            let explanation = [];
            // console.log(error);
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });    
            // console.log(explanation);
            // throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        // throw error;
        throw new AppError('Cannot create a new Airport object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirports() {
    try {
        const airports = await airportRepository.getAll();
        return airports;
    } catch (error) {
        throw new AppError('Cannot create a new Airport object', StatusCodes.BAD_REQUEST);
    }
}

async function getAirport(id) {
    try {
        const airport = await airportRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot create a new Airport object', StatusCodes.BAD_REQUEST);
    }
}

async function destroyAirport(id) {
    try {
        const response = await airportRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airport you requested to delete is not present", error.statusCode);
        }
        throw new AppError('Cannot create a new Airport object', StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    createAirport,
    getAirports,
    getAirport,
    destroyAirport
}
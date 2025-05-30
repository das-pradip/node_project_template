const { StatusCodes } = require('http-status-codes');

const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) { 
    try {
        console.log('Inside service');
        const airplane = await airplaneRepository.create(data);
        return airplane;
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
        throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    } catch (error) {
        throw new AppError('Cannot create a new Airplane object', StatusCodes.BAD_REQUEST);
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND) {
            throw new AppError('The airplane you requested is not present', error.statusCode);
        }
        throw new AppError('Cannot create a new Airplane object', StatusCodes.BAD_REQUEST);
    }
}

async function destroyAirplane(id) {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("The airplane you requested to delete is not present", error.statusCode);
        }
        throw new AppError('Cannot create a new Airplane object', StatusCodes.BAD_REQUEST);
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}
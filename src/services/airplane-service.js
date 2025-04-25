const {StatusCodes} = require('http-status-codes');

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
            throw new AppError('Cannot create a new Airplane object', StatusCodes.BAD_REQUEST);
        }
        throw error;
    }
}

module.exports = {
    createAirplane
}
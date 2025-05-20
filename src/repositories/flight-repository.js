const crudRepository = require('./crud-repository');
const { Flight } = require('../models');


class FlightRepository extends crudRepository {
    constructor(){
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort
        });
        return response;
    }
}

module.exports = FlightRepository;
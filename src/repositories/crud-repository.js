const { where } = require('sequelize');
const { Logger } = require('../config');

class crudRepository {
    constructor(model) {
        this.model = model; 
    }

    async create(data) {
        console.log('Inside repositoy');
        const response = await this.model.create(data);
        return response;

      //   try{
      //      const response = await this.model.create(data);
      //      return response;
      //   } catch(error) {
      //      Logger.error('Something went wrong in the Crud Repo : create');
      //      throw error;
      //   }
    }

    async destroy(data) {
        try{
           const response = await this.model.destroy({
               where: {
                id: data
               }
           });
           return response;
        } catch(error) {
           Logger.error('Something went wrong in the Crud Repo : destroy');
           throw error;
        }
    }

    async get(data) {
        try{
           const response = await this.model.findByPk(data);
           return response;
        } catch(error) {
           Logger.error('Something went wrong in the Crud Repo : get');
           throw error;
        }
    }

    async getAll() {
        try{
           const response = await this.model.findAll();
           return response;
        } catch(error) {
           Logger.error('Something went wrong in the Crud Repo : getAll');
           throw error;
        }
    }

    async update(id, data) {
        try{
           const response = await this.model.update(data, {
               where: {
                id: id
          }
           });
           return response;
        } catch(error) {
           Logger.error('Something went wrong in the Crud Repo : create');
           throw error;
        }
    }
}

module.exports = crudRepository;


// const { where } = require('sequelize');
const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const AppError = require('../utils/errors/app-error');

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
        // try{
        //    const response = await this.model.destroy({
        //        where: {
        //         id: data
        //        }
        //    });
        //    return response;
        // } catch(error) {
        //    Logger.error('Something went wrong in the Crud Repo : destroy');
        //    throw error;
        // }

        const response = await this.model.destroy({
            where: {
             id: data
            }
        });
        if(!response) {
            throw new AppError("Not able to find the resourse", StatusCodes.NOT_FOUND)
        }
        return response;
    }

    async get(data) {
        // try{
        //    const response = await this.model.findByPk(data);
        //    return response;
        // } catch(error) {
        //    Logger.error('Something went wrong in the Crud Repo : get');
        //    throw error;
        // }
        const response = await this.model.findByPk(data);
        if(!response) {
            throw new AppError('Not able to find the resourse', StatusCodes.NOT_FOUND);
        }
           return response;
    }

    async getAll() {
        // try{
        //    const response = await this.model.findAll();
        //    return response;
        // } catch(error) {
        //    Logger.error('Something went wrong in the Crud Repo : getAll');
        //    throw error;
        // }
        const response = await this.model.findAll();
           return response;
    }

    async update(id, data) {
        // try{
        //    const response = await this.model.update(data, {
        //        where: {
        //         id: id
        //   }
        //    });
        //    return response;
        // } catch(error) {
        //    Logger.error('Something went wrong in the Crud Repo : create');
        //    throw error;
        // }
        const response = await this.model.update(data, {
            where: {
             id: id
       }
        });
        return response;
    }
}

module.exports = crudRepository;


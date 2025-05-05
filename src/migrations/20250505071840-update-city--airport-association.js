'use strict';

const { Model } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // Here Airports is the table name and cityId is column name
   await queryInterface.addConstraint('Airports', {
    type: 'FOREIGN KEY',
    name: 'city_fkey-constraint',
    fields: ['cityId'],
    references: {
      table: 'Cities',
      field: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
   });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Airports', 'city_fkey-constraint');
  }
};



'use strict';

const sequelize = require('sequelize');

const {USER_TABLE} = require ('./../models/user.model.js')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn(USER_TABLE,'area_id',{
      type: sequelize.DataTypes.INTEGER,
      references:{
        model: 'areas',
        key: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(USER_TABLE,'area_id')
  }
};

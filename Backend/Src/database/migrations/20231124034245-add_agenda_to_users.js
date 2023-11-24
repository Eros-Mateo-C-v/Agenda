'use strict';
const sequelize = require('sequelize');

const {USER_TABLE} = require ('./../models/user.model.js')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
        await queryInterface.addColumn(USER_TABLE, 'agenda_id', {
        type: sequelize.DataTypes.INTEGER,
        references: {
          model: 'agendas',
          key: 'id'
        }
    })
  },

  async down(queryInterface, Sequelize) {
      /**
       * Add reverting commands here.
       *
       * Example:
       * await queryInterface.dropTable('users');
       */
    }
  };

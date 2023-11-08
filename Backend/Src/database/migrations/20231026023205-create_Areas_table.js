'use strict';

const { AREA_TABLE } = require('../models/area.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(AREA_TABLE, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Codigo: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
     Nombre: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      Observaciones: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
      },
      Lugar: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },

      status: {
        type: Sequelize.DataTypes.BOOLEAN,
        defaultValue: false,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};

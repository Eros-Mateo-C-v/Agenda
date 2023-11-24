'use strict';

const { AGENDA_TABLE } = require('../models/agenda.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(AGENDA_TABLE, {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Fecha: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false,
      },
      Hora_Inicio: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false,
      },
      Fecha_Fin: {
        type: Sequelize.DataTypes.TIME,
        allowNull: false,
      },
     Usuario: {
        type: Sequelize.DataTypes.STRING,
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

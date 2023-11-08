const { DataTypes, Model } = require('sequelize')
const AGENDA_TABLE = 'Agendas'

const AgendaSchema = {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Fecha:{
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    Hora_Inicio:{
        type:DataTypes.TIME,
        allowNull: false,
        unique:true
    },
    Hora_Fin:{
        type:DataTypes.TIME,
        allowNull: false
    },
    Usuario:{
        type:DataTypes.STRING,
        allowNull: false
    },
    Lugar:{
        type:DataTypes.STRING,
        allowNull: false
    },
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }
}

class Agenda extends Model {
    static associate(models) {
    }

    static config(sequelize) {
        return { sequelize, tableName:AGENDA_TABLE, modelName: 'Agenda', timestamps: false }
    }

}

module.exports = {AGENDA_TABLE, AgendaSchema, Agenda}
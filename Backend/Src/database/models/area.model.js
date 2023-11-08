const { DataTypes, Model } = require('sequelize')

const AREA_TABLE = 'Areas'

const AreaSchema= {
    id:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    Codigo:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Observaciones:{
        type:DataTypes.TEXT,
        allowNull: false,
        unique:true
    },
    
    status:{
        type:DataTypes.BOOLEAN,
        defaultValue: false
    }
}
class Area extends Model {
    static associate(models) {
    }

    static config(sequelize) {
        return { sequelize, tableName: AREA_TABLE, modelName: 'Area', timestamps: false }
    }
}

module.exports = {AREA_TABLE, AreaSchema, Area}
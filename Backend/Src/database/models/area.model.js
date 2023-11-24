const { DataTypes, Model } = require('sequelize')

const AREA_TABLE = 'areas'

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
        this.hasMany(models.User,{as: 'users', foreignKey: 'area_id'})
    }

    static config(sequelize) {
        return { sequelize, tableName: AREA_TABLE, modelName: 'Area', timestamps: false }
    }
}

module.exports = {AREA_TABLE, AreaSchema, Area}
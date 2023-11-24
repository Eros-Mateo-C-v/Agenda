const {User, UserSchema} = require('./user.model')
const {Agenda, AgendaSchema} = require('./agenda.model')
const {Area, AreaSchema} = require('./area.model')

function setupModels(sequelize){
    User.init(UserSchema, User.config(sequelize))
    Agenda.init(AgendaSchema, Agenda.config(sequelize))
    Area.init(AreaSchema, Area.config(sequelize))
    User.associate(sequelize.models)
    Agenda.associate(sequelize.models)
    Area.associate(sequelize.models)
}

module.exports = setupModels 


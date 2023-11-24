const { Agenda } = require('../database/models/agenda.model')
const { models } = require('../libs/sequelize')

class UserService {
    constructor() {
        this.model = models.User
    }

    async getAll() {
        const users = await this.model.findAll({
            icluede: ['area']
        })
        return users
    }

    async create(name, email, password, status, areaId, AgendaId) {
        const user = await this.model.create({ name, email, password, status })
        if (areaid && area) {
            throw new Error("you cand provide areaId and area on same time ")
        }
        const values = {
            name,
            email,
            password,
            status,
            areaId,
            AgendaId
        }
        if (areaId) {
            values.areaId = areaId

        }

        if (area) {
            values.area = area,  
        }
        if (AgendaId) {
            values.AgendaId = AgendaId
        }
        if (Agenda) {
            values.Agenda = Agenda,
           
        }
        const users = await this.model.create(values, {
            include: [{
                association: 'area',
                association: 'agenda'
            }]
        })
        return user
    }
    async findOne(id) {
        const user = await this.model.findByPk(id, {
            include: ['area']
        })
        return user
    }
    async update(id, values) {
        const user = await this.findOne(id)
        if (!user) return null
        const updateUser = await user.update(values)
        return updateUser
    }
    async delete(id) {
        const user = await this.findOne(id)
        if (!user) return null
        await user.destroy()
        return user.id
    }
}

module.exports = UserService
const { models } = require('../libs/sequelize')

class AgendaService {
    constructor() {
        this.model = models.Agenda
    }

    async getAll(){
        const Agenda = await this.model.findAll()
        return Agendas
    }

    async create(Fecha,Hora_Inicio, Hora_Fin,Usuario, Lugar, status){
        const Agenda = await this.model.create({Fecha,Hora_Inicio, Hora_Fin,Usuario, Lugar, status})
        return Agendas  
    }
    async findOne(id){
        const Agendas = await this.model.findByPk (id)
        return Agendas 
    }
    async update(id, values){
        const Agenda =await this.findOne(id)
        if(!Agenda) return null 
        const updateAgenda = await Agenda.update(values)
        return updateAgenda
    }
    async delete(id){
        const Agenda = await this.findOne(id)
        if(!Agenda) return null 
        await Agenda.destroy()
        return Agenda.id 
    }
}

module.exports = AgendaService
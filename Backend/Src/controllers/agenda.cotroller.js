const AgendaService = require('../services/agenda.service')

class agendaController{
    constructor(){
        this.service = new AgendaService()
    }

    async index(){
        const agendas = await this.service.getAll()
        return agendas
    }

    async create(Fecha,Hora_Inicio, Hora_Fin,Usuario, Lugar,status){
        const agenda = await this. service.create(Fecha,Hora_Inicio, Hora_Fin,Usuario, Lugar, status)
        return agenda
    }
    async findOne(id){
        const agenda = await this.service.findOne(id)

        if(!user){
            throw new Error ('usuario no encontrado')
        }
        delete agenda.dataValues.password

        return
    }
    async update(id, values){
        const agenda = await this.service.update(id, values)
        if (!agenda){
        throw new Error('usuario no encontrado')
    }
    return agenda
    }

    async delete(id){
        const agenda = await this.service.delete(id)
        
        if(!agenda){
        throw new Error('Usuario no encontrado')
        }
        return agenda 
    }
    
}

module.exports = agendaController
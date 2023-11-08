const AreaService = require('../services/area.service')

class AreaController {
    constructor(){
        this.service = new AreaService()
    }

    async index(){
        const Areas = await this.service.getAll()
        return Areas
    }

    async create(Codigo,Nombre,Observaciones,status){
        const area = await this. service.create(Codigo,Nombre,Observaciones, status)
        return area
    }
    async findOne(id){
        const area = await this.service.findOne(id)

        if(!area){
            throw new Error ('usuario no encontrado')
        }
        delete area.dataValues.password

        return
    }
    async update(id, values){
        const area = await this.service.update(id, values)
        if (!area){
        throw new Error('usuario no encontrado')
    }
    return area
    }

    async delete(id){
        const area = await this.service.delete(id)
        
        if(!area){
        throw new Error('Usuario no encontrado')
        }
        return area 
    }
    
}

module.exports = AreaController
const {Router} = require('express')
const AgendaController = require('../controllers/agenda.cotroller')

const router = Router()

const controller = new AgendaController()

router.get('/', async (req, res )=> {
    const Agendas = await controller.index()
    res.json({Agendas})
})
router.post('/', async (req, res)=>{
    const {Fecha,Hora_Inicio, Hora_Fin,Usuario, Lugar,status} = req.body
    const agenda = await controller.create(Fecha,Hora_Inicio, Hora_Fin,Usuario, Lugar,status)
    res.status(201).json({area})
})
router.get('/:id', async (red, res) => {
    try {
        const {id} = req.params 
        const area = await controller.findOne
        res.status(200).json({area})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})
router.put('/:id', async (req, res)=> {
    const {id} = req.params
    const {Fecha='',Hora_Inicio='', Hora_Fin,Usuario='', Lugar='',status=''}= req.body 
    const values= {}
    if(Fecha) values.Fecha = Fecha
    if(Hora_Inicio) values.Hora_Inicio= Hora_Inicio
    if(Hora_Fin) values.Hora_Fin= Hora_Fin
    if(Usuario) values.Usuario= Usuario
    if(Lugar) values.Lugar= Lugar    
    if(status) values.status = status
    

    try{
        const agenda = await controller.update(id, values)
        res.status(200).json({agenda})
    }catch (error){
        res.status(404).json({message: error.message})
    }
})

router.delete('/:id', async (req, res)=>{
    const {id} = req.params

    try {
        const user = await controller.delete(id)
        res.status(200).json({agenda})
    }catch (error){
        res.status(400).json({message: error.message})
    }
})

module.exports = router 
